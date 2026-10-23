/* FOURLE4F · lógica de la página. No necesitas editar este archivo:
   los datos se cambian en js/config.js */
(function(){
"use strict";

const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);
const cop = n => new Intl.NumberFormat("es-CO",{style:"currency",currency:"COP",maximumFractionDigits:0}).format(n);
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const num = n => String(n).replace(".", ",");
const hexValido = h => /^#[0-9a-f]{3,8}$/i.test(h) ? h : "#222";
const limpiarUsuario = u => String(u || "").trim().replace(/^@/,"").replace(/^https?:\/\/[^/]+\//,"").split(/[/?#]/)[0];
const wa = txt => `https://wa.me/${String(CONFIG.whatsapp).replace(/\D/g,"")}?text=${encodeURIComponent(txt)}`;

const R = CONFIG.redes || {};
const ig = limpiarUsuario(R.instagram);
const redes = [
  ig && { nombre:"Instagram", url:`https://www.instagram.com/${encodeURIComponent(ig)}/` },
  limpiarUsuario(R.tiktok) && { nombre:"TikTok", url:`https://www.tiktok.com/@${encodeURIComponent(limpiarUsuario(R.tiktok))}` },
  limpiarUsuario(R.facebook) && { nombre:"Facebook", url:`https://www.facebook.com/${encodeURIComponent(limpiarUsuario(R.facebook))}` }
].filter(Boolean);
const igUrl = ig ? redes[0].url : "#";
const pagos = Array.isArray(CONFIG.pagos) ? CONFIG.pagos : [];
const L = CONFIG.limitado || {};
const productos = (CONFIG.productos || []).filter(p => p && p.id && Array.isArray(p.colores) && p.colores.length);
const tallasDe = p => Object.keys(p.medidas || {});
const lineaLimitada = productos.find(p => p.limitada);

/* ---------- Enlaces y textos generales ---------- */
$("#anio").textContent = new Date().getFullYear();
const saludo = wa("Hola FOURLE4F, tengo una pregunta.");
$("#waFlot").href = saludo;
$("#waTallas").href = wa("Hola FOURLE4F, necesito ayuda con mi talla. Me interesa la línea ___. Mido ___ cm, peso ___ kg y me gusta que me quede ___ (holgada / normal).");
$("#igBtn").href = igUrl;
$$(".igHandle").forEach(e => e.textContent = "@" + ig);
$("#footRedes").innerHTML = `<a href="${esc(saludo)}" target="_blank" rel="noopener">WhatsApp</a>` +
  redes.map(r => `<a href="${esc(r.url)}" target="_blank" rel="noopener">${esc(r.nombre)}</a>`).join("");
$("#pagosLista").innerHTML = pagos.map(p => `<li>${esc(p)}</li>`).join("");
$("#footPagos").textContent = pagos.join(" · ");

if (CONFIG.promo && CONFIG.promo.activa && CONFIG.promo.texto){
  $("#promo").textContent = CONFIG.promo.texto;
  $("#promo").hidden = false;
}

const hv = $("#heroVisual");
if (CONFIG.hero && CONFIG.hero.foto){
  hv.className = "hero-visual foto";
  hv.innerHTML = `<img src="${esc(CONFIG.hero.foto)}" alt="${esc(CONFIG.hero.textoAlternativo)}" width="1200" height="1500" fetchpriority="high">`;
} else {
  hv.className = "hero-visual trebol";
  hv.innerHTML = `<img src="img/logo-trebol.png" alt="" width="205" height="205">`;
}

/* ---------- Menú en celular ---------- */
const menu = $("#menu"), btnMenu = $("#btnMenu");
function cerrarMenu(){ menu.classList.remove("abierto"); btnMenu.setAttribute("aria-expanded","false"); btnMenu.setAttribute("aria-label","Abrir menú"); }
btnMenu.addEventListener("click", () => {
  const abierto = menu.classList.toggle("abierto");
  btnMenu.setAttribute("aria-expanded", String(abierto));
  btnMenu.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");
});
menu.addEventListener("click", e => { if (e.target.closest("a")) cerrarMenu(); });

/* ---------- Sección Limitado ---------- */
const limAgotado = !!L.agotado || !!(lineaLimitada && lineaLimitada.agotado);
$("#limNombre").textContent = L.nombre || "";
$("#limTitulo").textContent = limAgotado ? "Agotado. Gracias por la suerte." : (L.titulo || "");
$("#limTexto").textContent = limAgotado ? "Esta edición ya se acabó. Síguenos en Instagram para enterarte de la próxima." : (L.texto || "");
$("#limEdicion").textContent = L.edicion || "01";
$("#limTela").textContent = lineaLimitada ? `${+lineaLimitada.gramaje} GSM` : "—";
$("#limTallas").textContent = lineaLimitada ? tallasDe(lineaLimitada).join(" · ") : "—";
if (lineaLimitada && !limAgotado) $("#limBtn").href = "#p-" + lineaLimitada.id;
if (limAgotado){
  $("#sello").hidden = false;
  const b = $("#limBtn"); b.textContent = "Avísame la próxima"; b.href = igUrl; b.target = "_blank"; b.rel = "noopener";
}

/* ---------- Catálogo ---------- */
const disponible = p => !p.agotado && !(p.limitada && L.agotado);
const silueta = hex => `<svg viewBox="0 0 260 220" aria-hidden="true"><path d="M80 20 L40 40 L10 90 L45 105 L60 82 L60 205 L200 205 L200 82 L215 105 L250 90 L220 40 L180 20 Q130 50 80 20Z" fill="${hexValido(hex)}" stroke="rgba(237,230,214,.22)" stroke-width="2"/></svg>`;

function fotoHTML(p, c){
  const alt = `${esc(p.nombre)} ${esc(c.nombre)}`;
  if (!c.foto) return silueta(c.hex) + `<span class="aviso">Foto próximamente</span>`;
  let h = `<img src="${esc(c.foto)}" alt="${alt}, frente" loading="lazy" width="1200" height="1500">`;
  if (c.fotoEspalda) h += `<img class="espalda" src="${esc(c.fotoEspalda)}" alt="${alt}, espalda" loading="lazy" width="1200" height="1500">
    <div class="lados"><button type="button" data-lado="frente" aria-pressed="true">Frente</button><button type="button" data-lado="espalda" aria-pressed="false">Espalda</button></div>`;
  return h;
}

$("#productos").innerHTML = productos.map(p => {
  const sin = !disponible(p), pid = esc(p.id);
  return `<article class="prod${p.limitada ? " es-limitada" : ""}" id="p-${pid}">
    <div class="foto" data-foto="${pid}">${fotoHTML(p, p.colores[0])}</div>
    <div class="insignias">
      ${p.limitada ? `<span class="insignia oro">Edición limitada</span>` : ""}
      <span class="insignia">${+p.gramaje} g</span>
      ${sin ? `<span class="insignia agot">Agotado</span>` : ""}
    </div>
    <h3>${esc(p.nombre)}</h3>
    <p class="detalle">${esc(p.detalle)}</p>
    <div class="meta"><span class="color-nombre" data-cnom="${pid}">${esc(p.colores[0].nombre)}</span><span class="precio">${cop(p.precio)}</span></div>
    <fieldset class="colores">
      <legend class="sr">Color de ${esc(p.nombre)}</legend>
      ${p.colores.map((c,i) => `<label title="${esc(c.nombre)}"><input type="radio" name="c-${pid}" value="${i}" ${i===0?"checked":""} ${sin?"disabled":""} data-color="${pid}"><span style="--c:${hexValido(c.hex)}"></span><b class="sr">${esc(c.nombre)}</b></label>`).join("")}
    </fieldset>
    <fieldset class="tallas">
      <legend class="sr">Talla de ${esc(p.nombre)}</legend>
      ${tallasDe(p).map((t,i) => `<label><input type="radio" name="t-${pid}" value="${esc(t)}" ${i===0?"checked":""} ${sin?"disabled":""}><span>${esc(t)}</span></label>`).join("")}
    </fieldset>
    <div class="acciones-prod">
      <button class="btn ${sin ? "btn-linea" : "btn-solido"}" type="button" data-add="${pid}" ${sin?"disabled":""}>${sin ? "Agotado" : "Añadir a la bolsa"}</button>
      <a class="ver-guia" href="#tallas" data-guia="${pid}">Ver guía de tallas</a>
    </div>
  </article>`;
}).join("");

document.addEventListener("change", e => {
  const r = e.target.closest("[data-color]");
  if (!r) return;
  const p = productos.find(x => x.id === r.dataset.color), c = p && p.colores[+r.value];
  if (!c) return;
  const caja = document.querySelector(`[data-foto="${CSS.escape(p.id)}"]`);
  caja.classList.remove("ver-espalda");
  caja.innerHTML = fotoHTML(p, c);
  document.querySelector(`[data-cnom="${CSS.escape(p.id)}"]`).textContent = c.nombre;
});

/* ---------- Guía de tallas (pestañas por línea) ---------- */
const conGuia = productos.filter(p => tallasDe(p).length);
let guiaActual = conGuia[0];
function pintarGuia(){
  const p = guiaActual; if (!p) return;
  $$("#tabsGuia [role=tab]").forEach(b => { const on = b.dataset.tab === p.id; b.setAttribute("aria-selected", String(on)); b.tabIndex = on ? 0 : -1; });
  $("#capGuia").textContent = `Medidas en centímetros, línea ${p.nombre} ${p.gramaje} g`;
  $("#tablaTallas").innerHTML = Object.entries(p.medidas).map(([t,m]) =>
    m ? `<tr><td>${esc(t)}</td><td>${num(+m.ancho)} cm</td><td>${num(+m.largo)} cm</td></tr>`
      : `<tr><td>${esc(t)}</td><td class="pend" colspan="2">Por confirmar</td></tr>`).join("");
  $("#resTalla").textContent = "";
}
if (!conGuia.length){
  $("#guia").hidden = true;
} else {
  $("#tabsGuia").innerHTML = conGuia.map(p =>
    `<button type="button" role="tab" id="tab-${esc(p.id)}" aria-controls="panelGuia" data-tab="${esc(p.id)}">${esc(p.nombre)} <small>${+p.gramaje} g</small></button>`).join("");
  $("#tabsGuia").addEventListener("click", e => {
    const b = e.target.closest("[data-tab]"); if (!b) return;
    guiaActual = conGuia.find(p => p.id === b.dataset.tab); pintarGuia();
  });
  $("#tabsGuia").addEventListener("keydown", e => {
    if (!["ArrowRight","ArrowLeft"].includes(e.key)) return;
    const i = conGuia.indexOf(guiaActual), n = conGuia.length;
    guiaActual = conGuia[(i + (e.key === "ArrowRight" ? 1 : n - 1)) % n]; pintarGuia();
    $(`#tab-${CSS.escape(guiaActual.id)}`).focus();
  });
  pintarGuia();

  $("#formTalla").addEventListener("submit", e => {
    e.preventDefault();
    const v = parseFloat(String($("#anchoCm").value).replace(",", "."));
    const out = $("#resTalla");
    if (!v || v < 30 || v > 90){ out.textContent = "Escribe el ancho en centímetros, por ejemplo 55."; return; }
    const ops = Object.entries(guiaActual.medidas).filter(([,m]) => m);
    if (!ops.length) return;
    // La talla de ancho más cercano; si dos empatan, se avisa abajo que solo cambia el largo
    ops.sort((a,b) => Math.abs(a[1].ancho - v) - Math.abs(b[1].ancho - v) || a[1].largo - b[1].largo);
    const [t,m] = ops[0], dif = +(m.ancho - v).toFixed(1);
    const anchos = ops.map(o => o[1].ancho), min = Math.min(...anchos), max = Math.max(...anchos);
    const mismos = ops.filter(o => o[1].ancho === m.ancho).map(o => o[0]);
    let txt = `En la línea <b>${esc(guiaActual.nombre)}</b> te recomendamos la talla <b>${esc(t)}</b> (${num(m.ancho)} cm de ancho). `;
    if (v < min - 3) txt += "Tu camiseta es bastante más angosta: la nuestra te quedará holgada, que es la idea del fit oversized.";
    else if (v > max + 1.5) txt += "Tu camiseta es más ancha que nuestra talla más grande en esta línea. Escríbenos y te ayudamos.";
    else if (Math.abs(dif) < 0.5) txt += "Te quedará prácticamente igual de ancha que la que mediste.";
    else txt += dif > 0 ? `Te quedará ${num(dif)} cm más ancha que la que mediste.` : `Te quedará ${num(Math.abs(dif))} cm más ajustada que la que mediste.`;
    if (mismos.length > 1) txt += ` Las tallas ${esc(mismos.join(" y "))} tienen el mismo ancho; cambia el largo, así que escoge según tu estatura.`;
    out.innerHTML = txt;
  });
}
document.addEventListener("click", e => {
  const g = e.target.closest("[data-guia]");
  if (g){ const p = conGuia.find(x => x.id === g.dataset.guia); if (p){ guiaActual = p; pintarGuia(); } }
});

/* ---------- Reseñas: copiar usuario ---------- */
$("#copiarIg").addEventListener("click", async () => {
  try { await navigator.clipboard.writeText("@" + ig); toast("Usuario copiado: @" + ig); }
  catch(e){ toast("@" + ig); }
});

/* ---------- Bolsa ---------- */
const CLAVE = "fourle4f-bolsa-v2";
let bolsa = [];
try { bolsa = JSON.parse(localStorage.getItem(CLAVE) || "[]"); if (!Array.isArray(bolsa)) bolsa = []; } catch(e){ bolsa = []; }

// Precios y nombres siempre salen de config.js. Se descartan prendas que ya no
// existen, se agotaron o ya no tienen ese color o esa talla.
const producto = id => productos.find(p => p.id === id);
bolsa = bolsa.filter(i => {
  const p = producto(i.id);
  return p && disponible(p) && tallasDe(p).includes(i.talla) && p.colores.some(c => c.nombre === i.color) && Number.isInteger(i.qty) && i.qty > 0;
}).map(i => ({ id:i.id, color:i.color, talla:i.talla, qty:Math.min(i.qty, 20) }));

const guardar = () => { try { localStorage.setItem(CLAVE, JSON.stringify(bolsa)); } catch(e){} };
const lineas = () => bolsa.map(i => { const p = producto(i.id); return { ...i, nombre:p.nombre, gramaje:p.gramaje, precio:p.precio, subtotal:p.precio * i.qty }; });
const totalBolsa = () => lineas().reduce((s,l) => s + l.subtotal, 0);

$("#cMunicipio").innerHTML = `<option value="">Escoge…</option>` + CONFIG.municipios.map(m => `<option>${esc(m)}</option>`).join("");
$("#cPago").innerHTML = `<option value="">Lo decido luego</option>` + pagos.map(p => `<option>${esc(p)}</option>`).join("");
$("#cMunicipio").addEventListener("change", e => {
  const otro = /^otro/i.test(e.target.value);
  $("#otroWrap").hidden = !otro;
  $("#cOtro").required = otro;
  if (otro) $("#cOtro").focus();
});

function pintarBolsa(){
  const ls = lineas();
  $("#nBolsa").textContent = ls.reduce((s,l) => s + l.qty, 0);
  $("#total").textContent = cop(totalBolsa());
  $("#items").innerHTML = ls.length ? ls.map((l,k) => `
    <div class="item">
      <div><strong>${esc(l.nombre)} ${+l.gramaje} g</strong><br><small>${esc(l.color)}, talla ${esc(l.talla)}</small></div>
      <div>${cop(l.subtotal)}</div>
      <div class="q"><button type="button" aria-label="Quitar una" data-q="${k}" data-d="-1">−</button><span>${l.qty}</span><button type="button" aria-label="Añadir una" data-q="${k}" data-d="1">+</button></div>
      <button type="button" class="quitar" data-x="${k}">Quitar</button>
    </div>`).join("") : `<p class="vacia">Tu bolsa está vacía. Escoge una camiseta del catálogo para empezar.</p>`;
}

function toast(msg){
  const t = $("#toast"); t.textContent = msg; t.classList.add("on");
  clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove("on"), 2200);
}

/* Abrir / cerrar panel: foco atrapado y el resto de la página inactiva */
const panel = $("#bolsa"), fondo = [$("main"), $("header.top"), $("footer"), $("#waFlot"), $("#promo")];
let ultimoFoco = null;
function abrir(){
  ultimoFoco = document.activeElement;
  cerrarMenu();
  panel.inert = false;
  fondo.forEach(el => el && (el.inert = true));
  document.body.classList.add("bolsa-abierta");
  $("#cerrarBolsa").focus();
}
function cerrar(){
  document.body.classList.remove("bolsa-abierta");
  panel.inert = true;
  fondo.forEach(el => el && (el.inert = false));
  (ultimoFoco && ultimoFoco.focus ? ultimoFoco : $("#abrirBolsa")).focus();
}
panel.addEventListener("keydown", e => {
  if (e.key !== "Tab") return;
  const f = [...panel.querySelectorAll("button,input,select,a[href]")].filter(x => !x.disabled && x.offsetParent !== null);
  if (!f.length) return;
  const primero = f[0], ultimo = f[f.length - 1];
  if (e.shiftKey && document.activeElement === primero){ e.preventDefault(); ultimo.focus(); }
  else if (!e.shiftKey && document.activeElement === ultimo){ e.preventDefault(); primero.focus(); }
});

document.addEventListener("click", e => {
  const lado = e.target.closest("[data-lado]");
  if (lado){
    const caja = lado.closest(".foto"), espalda = lado.dataset.lado === "espalda";
    caja.classList.toggle("ver-espalda", espalda);
    caja.querySelectorAll("[data-lado]").forEach(b => b.setAttribute("aria-pressed", String(b === lado)));
    return;
  }
  const add = e.target.closest("[data-add]");
  if (add){
    const p = producto(add.dataset.add);
    if (!p || !disponible(p)) return;
    const talla = [...document.getElementsByName("t-" + p.id)].find(r => r.checked)?.value;
    const ci = [...document.getElementsByName("c-" + p.id)].find(r => r.checked)?.value;
    const color = p.colores[+ci || 0].nombre;
    if (!talla) return;
    const ex = bolsa.find(i => i.id === p.id && i.talla === talla && i.color === color);
    if (ex) ex.qty = Math.min(ex.qty + 1, 20); else bolsa.push({ id:p.id, color, talla, qty:1 });
    guardar(); pintarBolsa(); toast(`Añadida: ${p.nombre} ${color}, talla ${talla}`);
    return;
  }
  const q = e.target.closest("[data-q]");
  if (q){
    const k = +q.dataset.q, it = bolsa[k]; if (!it) return;
    it.qty = Math.min(it.qty + +q.dataset.d, 20);
    if (it.qty < 1) bolsa.splice(k,1);
    guardar(); pintarBolsa();
    (panel.querySelector(`[data-q="${k}"][data-d="${q.dataset.d}"]`) || $("#cerrarBolsa")).focus();
    return;
  }
  const x = e.target.closest("[data-x]");
  if (x){ bolsa.splice(+x.dataset.x,1); guardar(); pintarBolsa(); $("#cerrarBolsa").focus(); }
});
$("#abrirBolsa").addEventListener("click", abrir);
$("#cerrarBolsa").addEventListener("click", cerrar);
$("#velo").addEventListener("click", cerrar);
document.addEventListener("keydown", e => {
  if (e.key !== "Escape") return;
  if (document.body.classList.contains("bolsa-abierta")) cerrar();
  else if (menu.classList.contains("abierto")){ cerrarMenu(); btnMenu.focus(); }
});

/* ---------- Pedido ----------
   armarPedido() junta los datos; finalizarPedido() decide cómo se envía.
   Hoy: WhatsApp. Para una pasarela (Wompi, Mercado Pago) más adelante,
   solo se cambia finalizarPedido(); el resto queda igual. */
function armarPedido(){
  const muni = $("#cMunicipio").value;
  return {
    items: lineas(),
    total: totalBolsa(),
    nombre: $("#cNombre").value.trim(),
    municipio: /^otro/i.test(muni) ? $("#cOtro").value.trim() : muni,
    pago: $("#cPago").value
  };
}
function validar(){
  const campos = [$("#cNombre"), $("#cMunicipio")].concat($("#cOtro").required ? [$("#cOtro")] : []);
  let malo = null;
  campos.forEach(c => { const ok = c.value.trim() !== ""; c.setAttribute("aria-invalid", String(!ok)); if (!ok && !malo) malo = c; });
  if (malo){ $("#errPedido").textContent = "Completa tu nombre y el municipio de entrega."; malo.focus(); return false; }
  const chk = $("#cTalla");
  chk.setAttribute("aria-invalid", String(!chk.checked));
  if (!chk.checked){ $("#errPedido").textContent = "Confirma que revisaste tu talla: no hacemos cambios."; chk.focus(); return false; }
  $("#errPedido").textContent = ""; return true;
}
function mensajeWhatsApp(p){
  const ls = p.items.map(l => `• ${l.qty} x ${l.nombre} ${l.gramaje} g, ${l.color}, talla ${l.talla}: ${cop(l.subtotal)}`).join("\n");
  return `Hola FOURLE4F, quiero hacer este pedido:\n\n${ls}\n\nTotal: ${cop(p.total)}\nNombre: ${p.nombre}\nEntrega en: ${p.municipio}` +
    (p.pago ? `\nPago: ${p.pago}` : "") + `\n\n¿Está disponible?`;
}
function finalizarPedido(p){
  window.open(wa(mensajeWhatsApp(p)), "_blank", "noopener");
}
$("#formPedido").addEventListener("submit", e => {
  e.preventDefault();
  if (!bolsa.length){ toast("Tu bolsa está vacía"); return; }
  if (!validar()) return;
  finalizarPedido(armarPedido());
});

pintarBolsa();
})();
