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
// Básicas por tela (tallas salen de su guía de medidas)
const productos = (CONFIG.productos || []).filter(p => p && p.id && Array.isArray(p.colores) && p.colores.length)
  .map(p => ({ ...p, tipoItem: "basica" }));
// Prendas con foto (tallas propias, y opcionalmente por color)
const disenos = (CONFIG.disenos || []).filter(d => d && d.id && d.mostrar !== false && Array.isArray(d.colores) && d.colores.length)
  .map(d => ({ ...d, tipoItem: "diseno", fotos: (d.fotos || []).filter(Boolean) }));
const tallasDe = (p, ci = 0) => p.tipoItem === "diseno"
  ? ((p.colores[ci] && p.colores[ci].tallas) || p.tallas || [])
  : Object.keys(p.medidas || {});
const producto = id => disenos.find(d => d.id === id) || productos.find(p => p.id === id);
const nombreItem = p => p.tipoItem === "diseno" ? `${p.tipo || ""} ${p.nombre}`.trim() : `${p.nombre} ${+p.gramaje} g`;
const lineaLimitada = productos.find(p => p.limitada);
const categorias = (CONFIG.categorias || []).filter(c => c && c.id && c.nombre);
const catsDe = p => p.tipoItem === "basica"
  ? ["basicas"].concat(p.limitada ? ["limitada"] : [])
  : [p.categoria].concat(p.limitada ? ["limitada"] : []);

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

/* ---------- Conoce FOURLE4F: fotos o ilustraciones mientras llegan las fotos ---------- */
const ILUSTRACION = {
  // Gancho con camiseta oversized
  outfit: `<svg viewBox="0 0 240 300"><path class="oro" d="M120 26a11 11 0 1 1 11 11c-6 0-11 4-11 9v8"/><path class="oro" d="M120 54 44 92h152Z"/>
    <path d="M86 92 52 108 30 152l28 12 12-20v122h100V144l12 20 28-12-22-44-34-16c-8 12-20 18-34 18s-26-6-34-18Z"/><path d="M98 92c6 10 14 14 22 14s16-4 22-14" class="fino"/></svg>`,
  // Camisetas dobladas apiladas
  dobladas: `<svg viewBox="28 66 184 130"><path d="M40 150h160v34H40Z"/><path d="M48 116h144v34H48Z"/><path d="M56 82h128v34H56Z"/>
    <path class="oro" d="M100 82c4 8 12 12 20 12s16-4 20-12"/><path class="fino" d="M40 167h160M48 133h144"/></svg>`,
  // Textura de tela con una costura dorada
  tela: `<svg viewBox="0 0 240 240"><path class="oro punteada" d="M24 160c40-30 70 20 110-6s60-50 82-40"/><path class="fino" d="M24 172c40-30 70 20 110-6s60-50 82-40"/></svg>`,
  // Dos camisetas superpuestas: combinar prendas
  mision: `<svg viewBox="0 0 300 220"><path d="M70 44 44 56 26 88l20 9 9-14v104h74V83l9 14 20-9-18-32-26-12c-6 9-15 13-25 13s-19-4-25-13Z"/>
    <path class="oro" d="M170 34l-28 13-19 34 21 9 10-15v112h78V75l10 15 21-9-19-34-28-13c-6 10-16 14-26 14s-20-4-26-14Z"/></svg>`
};
const fotosConoce = (CONFIG.conoce && CONFIG.conoce.fotos) || {};
$$("[data-foto-conoce]").forEach(fig => {
  const clave = fig.dataset.fotoConoce, f = fotosConoce[clave] || {};
  if (f.foto){
    fig.classList.add("con-foto");
    fig.innerHTML = `<img src="${esc(f.foto)}" alt="${esc(f.alt || "")}" loading="lazy">`;
  } else {
    fig.classList.add("ilustrada", "il-" + clave);
    fig.setAttribute("aria-hidden", "true");
    fig.innerHTML = ILUSTRACION[clave] || "";
  }
});

/* Aparición suave al bajar por la página (no se activa si la persona pidió menos movimiento) */
const aparecen = $$(".aparece");
if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches){
  document.documentElement.classList.add("con-aparicion");
  const obs = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting){ e.target.classList.add("visible"); obs.unobserve(e.target); }
  }), { rootMargin: "0px 0px -8% 0px" });
  aparecen.forEach(el => obs.observe(el));
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
if (limAgotado){
  $("#sello").hidden = false;
  const b = $("#limBtn"); b.textContent = "Avísame la próxima"; b.href = igUrl; b.target = "_blank"; b.rel = "noopener"; b.removeAttribute("data-cat");
}
// Fotos de las prendas de edición limitada dentro del ticket
const fotosLim = disenos.filter(d => d.limitada && d.fotos.length);
if (fotosLim.length){
  $("#limFotos").innerHTML = fotosLim.slice(0, 3).map(d =>
    `<a href="#d-${esc(d.id)}" data-cat="limitada" data-ir="${esc(d.id)}" aria-label="Ver ${esc(nombreItem(d))}"><img src="${esc(d.fotos[0])}" alt="" loading="lazy" width="900" height="1200"></a>`).join("");
} else $("#limFotos").remove();

/* ---------- Próximamente ---------- */
const P = CONFIG.proximo || {};
if (P.activa){
  $("#proxEtiqueta").textContent = P.etiqueta || "";
  $("#proxTitulo").textContent = P.titulo || "";
  $("#proxTexto").textContent = P.texto || "";
  $("#proxBtnTxt").textContent = P.boton || "Instagram";
  $("#proxBtn").href = igUrl;
  $("#proximo").hidden = false;
} else {
  $$('a[href="#proximo"]').forEach(a => a.remove());
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

const radiosTallas = (p, sin, ci = 0) => tallasDe(p, ci).map((t,i) =>
  `<label><input type="radio" name="t-${esc(p.id)}" value="${esc(t)}" ${i===0?"checked":""} ${sin?"disabled":""}><span>${esc(t)}</span></label>`).join("");

function galeriaHTML(d){
  const alt = esc(nombreItem(d));
  if (!d.fotos.length) return `<div class="foto">${silueta(d.colores[0].hex)}<span class="aviso">Foto próximamente</span></div>`;
  const slides = d.fotos.map((f,i) => `<img src="${esc(f)}" alt="${alt}${d.fotos.length > 1 ? `, foto ${i+1} de ${d.fotos.length}` : ""}" loading="lazy" width="900" height="1200">`).join("");
  if (d.fotos.length === 1) return `<div class="foto foto-real">${slides}</div>`;
  return `<div class="foto foto-real galeria" data-gal="${esc(d.id)}">
    <div class="pista" tabindex="0" aria-label="Fotos de ${alt}. Desliza para ver más.">${slides}</div>
    <button type="button" class="gal-flecha ant" data-galmov="-1" aria-label="Foto anterior">‹</button>
    <button type="button" class="gal-flecha sig" data-galmov="1" aria-label="Foto siguiente">›</button>
    <div class="puntos" aria-hidden="true">${d.fotos.map((_,i) => `<i class="${i===0?"on":""}"></i>`).join("")}</div>
  </div>`;
}

const tarjetaDiseno = d => {
  const sin = !disponible(d), pid = esc(d.id);
  return `<article class="prod prod-diseno${d.limitada ? " es-limitada" : ""}" id="d-${pid}" data-cats="${esc(catsDe(d).join(" "))}">
    ${galeriaHTML(d)}
    <div class="insignias">
      ${d.limitada ? `<span class="insignia oro">Edición limitada</span>` : ""}
      <span class="insignia">${esc((categorias.find(c => c.id === d.categoria) || {}).nombre || d.tipo || "")}</span>
      ${sin ? `<span class="insignia agot">Agotado</span>` : ""}
    </div>
    <h3><small>${esc(d.tipo || "")}</small>${esc(d.nombre)}</h3>
    <div class="meta"><span class="color-nombre" data-cnom="${pid}">${esc(d.colores[0].nombre)}</span><span class="precio">${cop(d.precio)}</span></div>
    <fieldset class="colores">
      <legend class="sr">Color de ${esc(nombreItem(d))}</legend>
      ${d.colores.map((c,i) => `<label title="${esc(c.nombre)}"><input type="radio" name="c-${pid}" value="${i}" ${i===0?"checked":""} ${sin?"disabled":""} data-color="${pid}"><span style="--c:${hexValido(c.hex)}"></span><b class="sr">${esc(c.nombre)}</b></label>`).join("")}
    </fieldset>
    <fieldset class="tallas" data-tallas="${pid}">
      <legend class="sr">Talla de ${esc(nombreItem(d))}</legend>
      ${radiosTallas(d, sin)}
    </fieldset>
    <div class="acciones-prod">
      <button class="btn ${sin ? "btn-linea" : "btn-solido"}" type="button" data-add="${pid}" ${sin?"disabled":""}>${sin ? "Agotado" : "Añadir a la bolsa"}</button>
      <a class="ver-guia" target="_blank" rel="noopener" href="${esc(wa(`Hola FOURLE4F, quiero asesoría de talla para ${nombreItem(d)}. Mido ___ cm y peso ___ kg.`))}">Asesoría de talla</a>
    </div>
  </article>`;
};

// Orden: limitadas primero, luego el resto de prendas con foto y al final las básicas por tela
const ordenDisenos = [...disenos.filter(d => d.limitada), ...disenos.filter(d => !d.limitada)];
$("#productos").innerHTML = ordenDisenos.map(tarjetaDiseno).join("") + productos.map(p => {
  const sin = !disponible(p), pid = esc(p.id);
  return `<article class="prod${p.limitada ? " es-limitada" : ""}" id="p-${pid}" data-cats="${esc(catsDe(p).join(" "))}">
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
  const p = producto(r.dataset.color), c = p && p.colores[+r.value];
  if (!c) return;
  const id = CSS.escape(p.id);
  document.querySelector(`[data-cnom="${id}"]`).textContent = c.nombre;
  if (p.tipoItem === "diseno"){
    // Si el color tiene tallas propias, se actualizan las opciones de talla
    const fs = document.querySelector(`[data-tallas="${id}"]`);
    const leyenda = fs.querySelector("legend").outerHTML;
    fs.innerHTML = leyenda + radiosTallas(p, !disponible(p), +r.value);
    return;
  }
  const caja = document.querySelector(`[data-foto="${id}"]`);
  caja.classList.remove("ver-espalda");
  caja.innerHTML = fotoHTML(p, c);
});

/* Galerías: flechas y puntos */
function irFoto(gal, paso){
  const pista = gal.querySelector(".pista"), n = pista.children.length;
  const i = Math.round(pista.scrollLeft / pista.clientWidth);
  pista.scrollTo({ left: ((i + paso + n) % n) * pista.clientWidth, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
}
$$(".galeria .pista").forEach(pista => pista.addEventListener("scroll", () => {
  const i = Math.round(pista.scrollLeft / pista.clientWidth);
  pista.parentElement.querySelectorAll(".puntos i").forEach((p,k) => p.classList.toggle("on", k === i));
}, { passive: true }));

/* ---------- Filtros del catálogo y menú desplegable ---------- */
const todos = [...ordenDisenos, ...productos];
const catsConItems = categorias.filter(c => todos.some(p => catsDe(p).includes(c.id)));
const opciones = [{ id: "todo", nombre: "Ver todo" }, ...catsConItems];
$("#filtros").innerHTML = opciones.map(c =>
  `<button type="button" class="filtro" data-cat="${esc(c.id)}" aria-pressed="${c.id === "todo"}">${esc(c.id === "todo" ? "Todo" : c.nombre)}</button>`).join("");
$("#subCat").innerHTML = opciones.map(c =>
  `<li><a href="#catalogo" data-cat="${esc(c.id)}">${esc(c.nombre)}</a></li>`).join("");
if (CONFIG.avisoOriginales){ $("#avisoOriginales").textContent = CONFIG.avisoOriginales; $("#avisoOriginales").hidden = false; }

function filtrar(cat){
  if (!opciones.some(o => o.id === cat)) cat = "todo";
  let n = 0;
  $$("#productos .prod").forEach(el => {
    const ver = cat === "todo" || el.dataset.cats.split(" ").includes(cat);
    el.hidden = !ver; if (ver) n++;
  });
  $$("#filtros .filtro").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.cat === cat)));
  $$("#subCat a").forEach(a => a.toggleAttribute("aria-current", a.dataset.cat === cat));
  const nom = (opciones.find(o => o.id === cat) || {}).nombre;
  $("#conteoCat").textContent = `${nom}: ${n} ${n === 1 ? "prenda" : "prendas"}`;
}
filtrar("todo");

const menuCat = $("#menuCat"), btnCat = $("#btnCat");
const abrirCat = abierto => { menuCat.classList.toggle("abierto", abierto); btnCat.setAttribute("aria-expanded", String(abierto)); };
btnCat.addEventListener("click", () => abrirCat(!menuCat.classList.contains("abierto")));
document.addEventListener("click", e => {
  if (!menuCat.contains(e.target)) abrirCat(false);
  const g = e.target.closest("[data-galmov]");
  if (g){ irFoto(g.closest(".galeria"), +g.dataset.galmov); return; }
  const f = e.target.closest("[data-cat]");
  if (!f) return;
  filtrar(f.dataset.cat);
  abrirCat(false);
  if (f.dataset.ir){
    // Desde el ticket: ir a la tarjeta de esa prenda
    e.preventDefault();
    const t = document.getElementById("d-" + f.dataset.ir);
    if (t) t.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
  }
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
bolsa = bolsa.filter(i => {
  const p = producto(i.id);
  if (!p || !disponible(p) || !Number.isInteger(i.qty) || i.qty < 1) return false;
  const ci = p.colores.findIndex(c => c.nombre === i.color);
  return ci >= 0 && tallasDe(p, ci).includes(i.talla);
}).map(i => ({ id:i.id, color:i.color, talla:i.talla, qty:Math.min(i.qty, 20) }));

const guardar = () => { try { localStorage.setItem(CLAVE, JSON.stringify(bolsa)); } catch(e){} };
const lineas = () => bolsa.map(i => { const p = producto(i.id); return { ...i, nombre:nombreItem(p), precio:p.precio, subtotal:p.precio * i.qty }; });
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
      <div><strong>${esc(l.nombre)}</strong><br><small>${esc(l.color)}, talla ${esc(l.talla)}</small></div>
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
    guardar(); pintarBolsa(); toast(`Añadida: ${nombreItem(p)} ${color}, talla ${talla}`);
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
  else if (menuCat.classList.contains("abierto")){ abrirCat(false); btnCat.focus(); }
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
  const ls = p.items.map(l => `• ${l.qty} x ${l.nombre}, ${l.color}, talla ${l.talla}: ${cop(l.subtotal)}`).join("\n");
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
