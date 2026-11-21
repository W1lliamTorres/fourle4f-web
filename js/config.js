/* =====================================================================
   CONFIGURACIÓN DE LA TIENDA FOURLE4F
   ---------------------------------------------------------------------
   Este es el ÚNICO archivo que necesitas editar para cambiar datos.
   Reglas para no romper nada:
   - Los textos van entre comillas "así".
   - No borres las comas al final de cada línea ni las llaves { } [ ].
   - Lo que dice SUPUESTO es temporal: cámbialo por el dato real.
   - Guarda el archivo y recarga la página para ver el cambio.
   ===================================================================== */
const CONFIG = {

  // Número de WhatsApp que recibe los pedidos: 57 + número, sin "+", sin espacios.
  whatsapp: "573122181447",                 // Temporal

  // Redes sociales: solo el usuario, sin @ y sin link.
  // Si una red está vacía ("") no aparece en la página.
  redes: {
    instagram: "fourle4f.co",
    tiktok: "",                             // Cuando crees la cuenta
    facebook: ""                            // Cuando crees la página
  },

  // Barra delgada arriba de todo. activa: false para ocultarla.
  promo: {
    activa: true,
    texto: "Pedidos por WhatsApp · Entregas en La Vega, Villeta, San Francisco y Nocaima"
  },

  // Foto principal del inicio. Vacía ("") = se muestra el trébol bordado.
  // Cuando tengas la sesión de fotos, ej. "img/hero.jpg" (vertical, 1200 x 1500 px).
  hero: {
    foto: "",
    textoAlternativo: "Modelo con camiseta oversized FOURLE4F"
  },

  // Sección "Conoce FOURLE4F": fotos de la marca. Vacía ("") = ilustración de prenda sobre textura de tela.
  // Usa SOLO fotos de prendas que vendes (que no parezcan productos que no existen).
  //   outfit:   persona con un outfit FOURLE4F, de cuerpo entero (vertical, 1200 x 1500 px)
  //   dobladas: camisetas dobladas o apiladas (cuadrada, 1200 x 1200 px)
  //   tela:     primer plano de la tela o una costura (cuadrada, 1200 x 1200 px)
  //   mision:   prendas reales colgadas o sobre una superficie (vertical, 1200 x 1500 px)
  conoce: {
    fotos: {
      outfit:   { foto: "", alt: "Outfit urbano con camiseta oversized FOURLE4F" },
      dobladas: { foto: "", alt: "Camisetas FOURLE4F dobladas" },
      tela:     { foto: "", alt: "Detalle de la tela de una camiseta FOURLE4F" },
      mision:   { foto: "", alt: "Prendas FOURLE4F" }
    }
  },

  // Sección "Sugerencias" (antes "Próximamente"). activa: false la oculta junto con el botón del menú.
  //   mensaje: texto que llega por WhatsApp al tocar el botón; al lado aparece "Síguenos en Instagram".
  //            Vacío ("") = un solo botón, que lleva a Instagram.
  proximo: {
    activa: true,
    etiqueta: "Sugerencias",
    titulo: "La espera terminó.",
    texto: "Las prendas ya están cosidas y en el catálogo. Ahora queremos escucharte: cuéntanos qué prenda, color, estilo o talla te gustaría encontrar en FOURLE4F. Leemos cada mensaje y las mejores ideas entran en la próxima edición.",
    boton: "Enviar mi sugerencia",
    mensaje: "Hola FOURLE4F, tengo una sugerencia para la próxima edición: ___"
  },

  // Medios de pago. Los datos de cuenta NO van aquí: se envían por WhatsApp.
  pagos: ["Nequi", "Llaves bancarias", "Transferencia Bancolombia"],

  // ===================================================================
  // SUBSECCIONES DEL CATÁLOGO (aparecen en los filtros y en el menú
  // desplegable "Catálogo"). Se muestran todas, aunque todavía no tengan
  // prendas. "basicas"
  // son las camisetas lisas (lista "productos", más abajo).
  // ===================================================================
  categorias: [
    { id: "gorras",        nombre: "Gorras" },
    { id: "basicas",       nombre: "Camisetas básicas" },
    { id: "hombre",        nombre: "Camisetas estampadas" },
    { id: "hoodies",       nombre: "Hoodies" },
    { id: "bermudas",      nombre: "Bermudas" },
    { id: "pantalones",    nombre: "Pantalones" },
    { id: "ropa-interior", nombre: "Ropa interior" },
    { id: "calcetines",    nombre: "Calcetines" },
    { id: "billeteras",    nombre: "Accesorios" }
  ],

  // Aviso que sale arriba del catálogo. "" para quitarlo.
  avisoOriginales: "Todas nuestras prendas son 100% originales.",

  // Franja sobre el catálogo para pedir las fotos sin difuminar por WhatsApp. activo: false la quita.
  avisoFotos: {
    activo: true,
    titulo: "¿Quieres ver las prendas sin difuminar?",
    texto: "Por respeto a las marcas tapamos los logos en la web. Escríbenos y te enviamos las fotos completas por WhatsApp.",
    boton: "Pedir fotos por WhatsApp",
    mensaje: "Hola FOURLE4F, quiero ver las fotos sin difuminar de estas prendas: ___"
  },

  // ===================================================================
  // PRENDAS CON FOTO (una tarjeta por producto).
  // Para agregar uno: copia la línea de ejemplo de abajo, pégala dentro de
  // los corchetes [ ], quítale las dos barras // del inicio y cámbiala.
  //   id:        único, minúsculas, sin espacios ni tildes
  //   nombre:    lo que ve el cliente
  //   tipo:      "Camiseta", "Polo", "Hoodie", "Gorra", "Bóxer", "Calcetines", "Billetera"...
  //   categoria: "hombre" (Camisetas estampadas), "hoodies", "gorras", "bermudas", "pantalones",
  //              "ropa-interior", "calcetines" o "billeteras" (Accesorios)
  //   mostrar:   false = el producto NO se ve en la página (queda guardado)
  //   precio:    en pesos, sin puntos
  //   tallas:    tallas disponibles, ej. ["S","M","L","XL"].
  //              Vacío [] = TALLA ÚNICA (gorras, billeteras, tarjeteros...).
  //   refTalla:  opcional con talla única: muestra "Talla única (ref. M)". Ej. refTalla:"M"
  //              Un color puede tener las suyas: { nombre:"Negro", hex:"#111", tallas:["M","XL"] }
  //   colores:   al menos un color (nombre y hex)
  //   fotos:     una o varias fotos de img/catalogo/. Con 2 o más, se deslizan.
  //              El nombre del archivo NO debe llevar marcas (se ve en internet).
  //   agotado:   true para mostrarlo sin poder pedirlo
  //
  // Ejemplos (copiar sin las // del inicio):
  // { id:"camiseta-ejemplo", nombre:"Ejemplo", tipo:"Camiseta", categoria:"hombre", mostrar:true, precio:119900, tallas:["S","M","L","XL"], colores:[{nombre:"Negro",hex:"#151515"}], fotos:["img/catalogo/camiseta-ejemplo-1.jpg","img/catalogo/camiseta-ejemplo-2.jpg"] },
  // { id:"gorra-ejemplo", nombre:"Ejemplo", tipo:"Gorra", categoria:"gorras", mostrar:true, precio:85000, tallas:[], colores:[{nombre:"Negro",hex:"#151515"}], fotos:["img/catalogo/gorra-ejemplo.jpg"] },
  // ===================================================================
  disenos: [
    // CAMISETAS ESTAMPADAS (sección Camisetas).
    { id:"estampada-01", nombre:"Estampada 01", tipo:"Camiseta", categoria:"hombre", mostrar:true, precio:79500, tallas:["M","L"], colores:[{nombre:"Negro",hex:"#151515"}], fotos:["img/catalogo/estampada-01-1.jpg","img/catalogo/estampada-01-2.jpg"] },
    { id:"estampada-02", nombre:"Estampada 02", tipo:"Camiseta", categoria:"hombre", mostrar:true, precio:79500, tallas:["M","L"], colores:[{nombre:"Café",hex:"#6B5E4E"}], fotos:["img/catalogo/estampada-02-1.jpg","img/catalogo/estampada-02-2.jpg"] },
    { id:"estampada-03", nombre:"Estampada 03", tipo:"Camiseta", categoria:"hombre", mostrar:true, precio:79500, tallas:["M"], colores:[{nombre:"Arena",hex:"#B8AE9C"}], fotos:["img/catalogo/estampada-03-1.jpg","img/catalogo/estampada-03-2.jpg"] },
    { id:"estampada-04", nombre:"Estampada 04", tipo:"Camiseta", categoria:"hombre", mostrar:true, precio:79500, tallas:["XL"], colores:[{nombre:"Gris",hex:"#8C8A86"}], fotos:["img/catalogo/estampada-04-1.jpg","img/catalogo/estampada-04-2.jpg"] },
    // CAMISETAS TOP QUALITY. Tallas según la foto del proveedor.
    { id:"top-01", nombre:"Top Quality 01", tipo:"Camiseta", categoria:"hombre", mostrar:true, precio:79500, tallas:["M"], colores:[{nombre:"Blanco",hex:"#EEEAE2"}], fotos:["img/catalogo/camiseta-01-1.jpg","img/catalogo/camiseta-01-2.jpg"] },
    { id:"top-02", nombre:"Top Quality 02", tipo:"Camiseta", categoria:"hombre", mostrar:true, precio:79500, tallas:["M"], colores:[{nombre:"Blanco",hex:"#EEEAE2"}], fotos:["img/catalogo/camiseta-02-1.jpg","img/catalogo/camiseta-02-2.jpg"] },
    { id:"top-03", nombre:"Top Quality 03", tipo:"Camiseta", categoria:"hombre", mostrar:true, precio:79500, tallas:["M"], colores:[{nombre:"Blanco",hex:"#EEEAE2"}], fotos:["img/catalogo/camiseta-03-1.jpg","img/catalogo/camiseta-03-2.jpg"] },
    { id:"top-04", nombre:"Top Quality 04", tipo:"Camiseta", categoria:"hombre", mostrar:true, precio:79500, tallas:["M"], colores:[{nombre:"Negro",hex:"#151515"}], fotos:["img/catalogo/camiseta-04-1.jpg","img/catalogo/camiseta-04-2.jpg"] },
    { id:"top-05", nombre:"Top Quality 05", tipo:"Camiseta", categoria:"hombre", mostrar:true, precio:79500, tallas:["M"], colores:[{nombre:"Negro",hex:"#151515"}], fotos:["img/catalogo/camiseta-05-1.jpg","img/catalogo/camiseta-05-2.jpg"] },
    { id:"top-06", nombre:"Top Quality 06", tipo:"Camiseta", categoria:"hombre", mostrar:true, precio:79500, tallas:["M"], colores:[{nombre:"Negro",hex:"#151515"}], fotos:["img/catalogo/camiseta-06-1.jpg","img/catalogo/camiseta-06-2.jpg"] },
    { id:"top-07", nombre:"Top Quality 07", tipo:"Camiseta", categoria:"hombre", mostrar:true, precio:79500, tallas:["M"], colores:[{nombre:"Negro",hex:"#151515"}], fotos:["img/catalogo/camiseta-07-1.jpg","img/catalogo/camiseta-07-2.jpg"] },
    { id:"top-08", nombre:"Top Quality 08", tipo:"Camiseta", categoria:"hombre", mostrar:true, precio:79500, tallas:["M"], colores:[{nombre:"Negro",hex:"#151515"}], fotos:["img/catalogo/camiseta-08-1.jpg","img/catalogo/camiseta-08-2.jpg"] },
    { id:"top-09", nombre:"Top Quality 09", tipo:"Camiseta", categoria:"hombre", mostrar:true, precio:79500, tallas:["M"], colores:[{nombre:"Negro",hex:"#151515"}], fotos:["img/catalogo/camiseta-09-1.jpg","img/catalogo/camiseta-09-2.jpg"] },
    { id:"top-10", nombre:"Top Quality 10", tipo:"Camiseta", categoria:"hombre", mostrar:true, precio:79500, tallas:["M"], colores:[{nombre:"Blanco",hex:"#EEEAE2"}], fotos:["img/catalogo/camiseta-10-1.jpg","img/catalogo/camiseta-10-2.jpg"] },
    { id:"top-11", nombre:"Top Quality 11", tipo:"Camiseta", categoria:"hombre", mostrar:true, precio:79500, tallas:["M"], colores:[{nombre:"Negro",hex:"#151515"}], fotos:["img/catalogo/camiseta-11-1.jpg","img/catalogo/camiseta-11-2.jpg"] },
    { id:"top-12", nombre:"Top Quality 12", tipo:"Camiseta", categoria:"hombre", mostrar:true, precio:79500, tallas:["M"], colores:[{nombre:"Blanco",hex:"#EEEAE2"}], fotos:["img/catalogo/camiseta-12-1.jpg","img/catalogo/camiseta-12-2.jpg"] },
    { id:"top-13", nombre:"Top Quality 13", tipo:"Camiseta", categoria:"hombre", mostrar:true, precio:79500, tallas:["M"], colores:[{nombre:"Blanco",hex:"#EEEAE2"}], fotos:["img/catalogo/camiseta-13-1.jpg","img/catalogo/camiseta-13-2.jpg"] },
    { id:"top-14", nombre:"Top Quality 14", tipo:"Camiseta", categoria:"hombre", mostrar:true, precio:79500, tallas:["L"], colores:[{nombre:"Negro",hex:"#151515"}], fotos:["img/catalogo/camiseta-14-1.jpg","img/catalogo/camiseta-14-2.jpg"] },
    { id:"top-15", nombre:"Top Quality 15", tipo:"Camiseta", categoria:"hombre", mostrar:true, precio:79500, tallas:["L"], colores:[{nombre:"Blanco",hex:"#EEEAE2"}], fotos:["img/catalogo/camiseta-15-1.jpg","img/catalogo/camiseta-15-2.jpg"] },
    { id:"top-16", nombre:"Top Quality 16", tipo:"Camiseta", categoria:"hombre", mostrar:true, precio:79500, tallas:["L"], colores:[{nombre:"Blanco",hex:"#EEEAE2"}], fotos:["img/catalogo/camiseta-16-1.jpg","img/catalogo/camiseta-16-2.jpg"] },
    { id:"top-17", nombre:"Top Quality 17", tipo:"Camiseta", categoria:"hombre", mostrar:true, precio:79500, tallas:["L"], colores:[{nombre:"Negro",hex:"#151515"}], fotos:["img/catalogo/camiseta-17-1.jpg","img/catalogo/camiseta-17-2.jpg"] },
    // HOODIES / CHAQUETAS.
    { id:"chaqueta-01", nombre:"Chaqueta 01", tipo:"Chaqueta", categoria:"hoodies", mostrar:true, precio:199500, tallas:["M","L"], colores:[{nombre:"Blanco",hex:"#EEEAE2"}], fotos:["img/catalogo/chaqueta-01-1.jpg","img/catalogo/chaqueta-01-2.jpg"] },
    { id:"chaqueta-02", nombre:"Chaqueta 02", tipo:"Chaqueta", categoria:"hoodies", mostrar:true, precio:199500, tallas:["M","L"], colores:[{nombre:"Negro y gris",hex:"#4A4A4A"}], fotos:["img/catalogo/chaqueta-02-1.jpg","img/catalogo/chaqueta-02-2.jpg"] },
    { id:"chaqueta-03", nombre:"Chaqueta 03", tipo:"Chaqueta", categoria:"hoodies", mostrar:true, precio:199500, tallas:["M","L"], colores:[{nombre:"Negro",hex:"#151515"}], fotos:["img/catalogo/chaqueta-03-1.jpg","img/catalogo/chaqueta-03-2.jpg"] },
    { id:"chaqueta-04", nombre:"Chaqueta 04", tipo:"Chaqueta", categoria:"hoodies", mostrar:true, precio:199500, tallas:["M","L"], colores:[{nombre:"Gris oscuro",hex:"#3E3F42"}], fotos:["img/catalogo/chaqueta-04-1.jpg","img/catalogo/chaqueta-04-2.jpg"] },
    { id:"chaqueta-05", nombre:"Chaqueta 05", tipo:"Chaqueta", categoria:"hoodies", mostrar:true, precio:199500, tallas:["M","L"], colores:[{nombre:"Beige",hex:"#B9A88C"}], fotos:["img/catalogo/chaqueta-05-1.jpg","img/catalogo/chaqueta-05-2.jpg"] },
    { id:"chaqueta-06", nombre:"Chaqueta 06", tipo:"Chaqueta", categoria:"hoodies", mostrar:true, precio:199500, tallas:["M","L"], colores:[{nombre:"Morado",hex:"#4B2E83"}], fotos:["img/catalogo/chaqueta-06-1.jpg","img/catalogo/chaqueta-06-2.jpg"] },
    { id:"chaqueta-07", nombre:"Chaqueta 07", tipo:"Chaqueta", categoria:"hoodies", mostrar:true, precio:199500, tallas:["M","L"], colores:[{nombre:"Rojo",hex:"#A3172B"}], fotos:["img/catalogo/chaqueta-07-1.jpg","img/catalogo/chaqueta-07-2.jpg"] },
    { id:"chaqueta-08", nombre:"Chaqueta 08", tipo:"Chaqueta", categoria:"hoodies", mostrar:true, precio:199500, tallas:["M","L"], colores:[{nombre:"Negro",hex:"#151515"}], fotos:["img/catalogo/chaqueta-08-1.jpg","img/catalogo/chaqueta-08-2.jpg"] },
    // BERMUDAS. Talla única (equivale a una M).
    { id:"bermuda-01", nombre:"Bermuda 01", tipo:"Bermuda", categoria:"bermudas", mostrar:true, precio:75900, tallas:[], refTalla:"M", colores:[{nombre:"Negro",hex:"#151515"}], fotos:["img/catalogo/bermuda-01.jpg"] },
    { id:"bermuda-02", nombre:"Bermuda 02", tipo:"Bermuda", categoria:"bermudas", mostrar:true, precio:75900, tallas:[], refTalla:"M", colores:[{nombre:"Crema",hex:"#E3D7BF"}], fotos:["img/catalogo/bermuda-02.jpg"] },
    { id:"bermuda-03", nombre:"Bermuda 03", tipo:"Bermuda", categoria:"bermudas", mostrar:true, precio:75900, tallas:[], refTalla:"M", colores:[{nombre:"Caqui",hex:"#BFA67A"}], fotos:["img/catalogo/bermuda-03.jpg"] },
    // PANTALONES. Referencia (Clásico, Baggy, Cargo) y talla según el proveedor.
    { id:"pantalon-01", nombre:"Clásico 01", tipo:"Pantalón", categoria:"pantalones", mostrar:true, precio:115000, tallas:["28"], colores:[{nombre:"Negro",hex:"#2B2B2D"}], fotos:["img/catalogo/pantalon-01-1.jpg","img/catalogo/pantalon-01-2.jpg"] },
    { id:"pantalon-02", nombre:"Clásico 02", tipo:"Pantalón", categoria:"pantalones", mostrar:true, precio:115000, tallas:["28"], colores:[{nombre:"Negro",hex:"#2B2B2D"}], fotos:["img/catalogo/pantalon-02-1.jpg","img/catalogo/pantalon-02-2.jpg"] },
    { id:"pantalon-03", nombre:"Clásico 03", tipo:"Pantalón", categoria:"pantalones", mostrar:true, precio:115000, tallas:["30"], colores:[{nombre:"Azul",hex:"#3F6E9E"}], fotos:["img/catalogo/pantalon-03-1.jpg","img/catalogo/pantalon-03-2.jpg"] },
    { id:"pantalon-04", nombre:"Baggy 01", tipo:"Pantalón", categoria:"pantalones", mostrar:true, precio:115000, tallas:["28"], colores:[{nombre:"Gris oscuro",hex:"#4A4B4E"}], fotos:["img/catalogo/pantalon-04-1.jpg","img/catalogo/pantalon-04-2.jpg"] },
    { id:"pantalon-05", nombre:"Baggy 02", tipo:"Pantalón", categoria:"pantalones", mostrar:true, precio:115000, tallas:["28"], colores:[{nombre:"Gris claro",hex:"#A3A39E"}], fotos:["img/catalogo/pantalon-05-1.jpg","img/catalogo/pantalon-05-2.jpg"] },
    { id:"pantalon-06", nombre:"Baggy 03", tipo:"Pantalón", categoria:"pantalones", mostrar:true, precio:115000, tallas:["30"], colores:[{nombre:"Azul",hex:"#4F6F8C"}], fotos:["img/catalogo/pantalon-06-1.jpg","img/catalogo/pantalon-06-2.jpg"] },
    { id:"pantalon-07", nombre:"Baggy 04", tipo:"Pantalón", categoria:"pantalones", mostrar:true, precio:115000, tallas:["30"], colores:[{nombre:"Azul claro",hex:"#7D9BB5"}], fotos:["img/catalogo/pantalon-07-1.jpg","img/catalogo/pantalon-07-2.jpg"] },
    { id:"pantalon-08", nombre:"Cargo 01", tipo:"Pantalón", categoria:"pantalones", mostrar:true, precio:115000, tallas:["28"], colores:[{nombre:"Negro",hex:"#2B2B2D"}], fotos:["img/catalogo/pantalon-08-1.jpg","img/catalogo/pantalon-08-2.jpg"] },
    { id:"pantalon-09", nombre:"Cargo 02", tipo:"Pantalón", categoria:"pantalones", mostrar:true, precio:115000, tallas:["28"], colores:[{nombre:"Azul",hex:"#3F6E9E"}], fotos:["img/catalogo/pantalon-09-1.jpg","img/catalogo/pantalon-09-2.jpg"] },
    { id:"pantalon-10", nombre:"Cargo 03", tipo:"Pantalón", categoria:"pantalones", mostrar:true, precio:115000, tallas:["30"], colores:[{nombre:"Negro",hex:"#2B2B2D"}], fotos:["img/catalogo/pantalon-10-1.jpg","img/catalogo/pantalon-10-2.jpg"] },
    // CALCETINES Y ROPA INTERIOR. Colores variados (el cliente lo coordina por WhatsApp). Calcetines: precio por par.
    { id:"calcetines-01", nombre:"Calcetines 01 (par)", tipo:"Calcetines", categoria:"calcetines", mostrar:true, precio:8900, tallas:["Universal"], colores:[{nombre:"Variado",hex:"#8C8C8A"}], fotos:["img/catalogo/calcetines-01-1.jpg","img/catalogo/calcetines-01-2.jpg"] },
    { id:"boxer-01", nombre:"Bóxer 01", tipo:"Bóxer", categoria:"ropa-interior", mostrar:true, precio:22500, tallas:["M"], colores:[{nombre:"Variado",hex:"#8C8C8A"}], fotos:["img/catalogo/boxer-01-1.jpg","img/catalogo/boxer-01-2.jpg"] },
    // GORRAS.
    { id:"gorra-01", nombre:"Gorra 01", tipo:"Gorra", categoria:"gorras", mostrar:true, precio:65000, tallas:[], colores:[{nombre:"Negro",hex:"#151515"}], fotos:["img/catalogo/gorra-01-1.jpg","img/catalogo/gorra-01-2.jpg"] },
    { id:"gorra-02", nombre:"Gorra 02", tipo:"Gorra", categoria:"gorras", mostrar:true, precio:99000, tallas:[], colores:[{nombre:"Negro",hex:"#151515"}], fotos:["img/catalogo/gorra-02-1.jpg","img/catalogo/gorra-02-2.jpg"] },
    { id:"gorra-03", nombre:"Gorra 03", tipo:"Gorra", categoria:"gorras", mostrar:true, precio:65000, tallas:[], colores:[{nombre:"Negro",hex:"#151515"}], fotos:["img/catalogo/gorra-03-1.jpg","img/catalogo/gorra-03-2.jpg"] },
    { id:"gorra-04", nombre:"Gorra 04", tipo:"Gorra", categoria:"gorras", mostrar:true, precio:99000, tallas:[], colores:[{nombre:"Negro",hex:"#151515"}], fotos:["img/catalogo/gorra-04-1.jpg","img/catalogo/gorra-04-2.jpg"] },
    { id:"gorra-05", nombre:"Gorra 05", tipo:"Gorra", categoria:"gorras", mostrar:true, precio:75000, tallas:[], colores:[{nombre:"Negro",hex:"#151515"}], fotos:["img/catalogo/gorra-05-1.jpg","img/catalogo/gorra-05-2.jpg"] },
    { id:"gorra-06", nombre:"Gorra 06", tipo:"Gorra", categoria:"gorras", mostrar:true, precio:69000, tallas:[], colores:[{nombre:"Gris claro",hex:"#B9B4AC"}], fotos:["img/catalogo/gorra-06-1.jpg","img/catalogo/gorra-06-2.jpg"] },
    { id:"gorra-07", nombre:"Gorra 07", tipo:"Gorra", categoria:"gorras", mostrar:true, precio:65000, tallas:[], colores:[{nombre:"Café",hex:"#7A5E48"}], fotos:["img/catalogo/gorra-07-1.jpg","img/catalogo/gorra-07-2.jpg"] },
    { id:"gorra-08", nombre:"Gorra 08", tipo:"Gorra", categoria:"gorras", mostrar:true, precio:99000, tallas:[], colores:[{nombre:"Blanco",hex:"#EEEAE2"}], fotos:["img/catalogo/gorra-08-1.jpg","img/catalogo/gorra-08-2.jpg"] },
    { id:"gorra-09", nombre:"Gorra 09", tipo:"Gorra", categoria:"gorras", mostrar:true, precio:75000, tallas:[], colores:[{nombre:"Negro",hex:"#151515"}], fotos:["img/catalogo/gorra-09-1.jpg","img/catalogo/gorra-09-2.jpg"] },
    { id:"gorra-10", nombre:"Gorra 10", tipo:"Gorra", categoria:"gorras", mostrar:true, precio:99000, tallas:[], colores:[{nombre:"Negro",hex:"#151515"}], fotos:["img/catalogo/gorra-10-1.jpg","img/catalogo/gorra-10-2.jpg"] },
    { id:"gorra-11", nombre:"Gorra 11", tipo:"Gorra", categoria:"gorras", mostrar:true, precio:65000, tallas:[], colores:[{nombre:"Negro",hex:"#151515"}], fotos:["img/catalogo/gorra-11-1.jpg","img/catalogo/gorra-11-2.jpg"] },
    { id:"gorra-12", nombre:"Gorra 12", tipo:"Gorra", categoria:"gorras", mostrar:true, precio:99000, tallas:[], colores:[{nombre:"Negro",hex:"#151515"}], fotos:["img/catalogo/gorra-12-1.jpg","img/catalogo/gorra-12-2.jpg"] },
    { id:"gorra-13", nombre:"Gorra 13", tipo:"Gorra", categoria:"gorras", mostrar:true, precio:69000, tallas:[], colores:[{nombre:"Negro",hex:"#151515"}], fotos:["img/catalogo/gorra-13-1.jpg","img/catalogo/gorra-13-2.jpg"] },
    { id:"gorra-14", nombre:"Gorra 14", tipo:"Gorra", categoria:"gorras", mostrar:true, precio:65000, tallas:[], colores:[{nombre:"Negro",hex:"#151515"}], fotos:["img/catalogo/gorra-14-1.jpg","img/catalogo/gorra-14-2.jpg"] },
    { id:"gorra-15", nombre:"Gorra 15", tipo:"Gorra", categoria:"gorras", mostrar:true, precio:99000, tallas:[], colores:[{nombre:"Gris oscuro",hex:"#3A3A3A"}], fotos:["img/catalogo/gorra-15-1.jpg","img/catalogo/gorra-15-2.jpg"] },
    { id:"gorra-16", nombre:"Gorra 16", tipo:"Gorra", categoria:"gorras", mostrar:true, precio:65000, tallas:[], colores:[{nombre:"Negro",hex:"#151515"}], fotos:["img/catalogo/gorra-16-1.jpg","img/catalogo/gorra-16-2.jpg"] },
    { id:"gorra-17", nombre:"Gorra 17", tipo:"Gorra", categoria:"gorras", mostrar:true, precio:65000, tallas:[], colores:[{nombre:"Blanco y rosado",hex:"#EAD9DE"}], fotos:["img/catalogo/gorra-17-1.jpg","img/catalogo/gorra-17-2.jpg"] },
    { id:"gorra-18", nombre:"Gorra 18", tipo:"Gorra", categoria:"gorras", mostrar:true, precio:65000, tallas:[], colores:[{nombre:"Blanco y negro",hex:"#EEEAE2"}], fotos:["img/catalogo/gorra-18-1.jpg","img/catalogo/gorra-18-2.jpg"] },
    { id:"gorra-19", nombre:"Gorra 19", tipo:"Gorra", categoria:"gorras", mostrar:true, precio:65000, tallas:[], colores:[{nombre:"Azul oscuro",hex:"#1C2541"}], fotos:["img/catalogo/gorra-19-1.jpg","img/catalogo/gorra-19-2.jpg"] },
    { id:"gorra-20", nombre:"Gorra 20", tipo:"Gorra", categoria:"gorras", mostrar:true, precio:69000, tallas:[], colores:[{nombre:"Negro",hex:"#151515"}], fotos:["img/catalogo/gorra-20-1.jpg","img/catalogo/gorra-20-2.jpg"] },
    { id:"gorra-21", nombre:"Gorra 21", tipo:"Gorra", categoria:"gorras", mostrar:true, precio:65000, tallas:[], colores:[{nombre:"Negro",hex:"#151515"}], fotos:["img/catalogo/gorra-21-1.jpg","img/catalogo/gorra-21-2.jpg"] },
    { id:"gorra-22", nombre:"Gorra 22", tipo:"Gorra", categoria:"gorras", mostrar:true, precio:69000, tallas:[], colores:[{nombre:"Negro",hex:"#151515"}], fotos:["img/catalogo/gorra-22-1.jpg","img/catalogo/gorra-22-2.jpg"] },
    { id:"gorra-23", nombre:"Gorra 23", tipo:"Gorra", categoria:"gorras", mostrar:true, precio:69000, tallas:[], colores:[{nombre:"Negro",hex:"#151515"}], fotos:["img/catalogo/gorra-23-1.jpg","img/catalogo/gorra-23-2.jpg"] },
    { id:"gorra-24", nombre:"Gorra 24", tipo:"Gorra", categoria:"gorras", mostrar:true, precio:65000, tallas:[], colores:[{nombre:"Negro",hex:"#151515"}], fotos:["img/catalogo/gorra-24-1.jpg","img/catalogo/gorra-24-2.jpg"] },
    { id:"gorra-25", nombre:"Gorra 25", tipo:"Gorra", categoria:"gorras", mostrar:true, precio:65000, tallas:[], colores:[{nombre:"Negro",hex:"#151515"}], fotos:["img/catalogo/gorra-25-1.jpg","img/catalogo/gorra-25-2.jpg"] },
    { id:"gorra-26", nombre:"Gorra 26", tipo:"Gorra", categoria:"gorras", mostrar:true, precio:69000, tallas:[], colores:[{nombre:"Negro",hex:"#151515"}], fotos:["img/catalogo/gorra-26-1.jpg","img/catalogo/gorra-26-2.jpg"] },
    { id:"gorra-27", nombre:"Gorra 27", tipo:"Gorra", categoria:"gorras", mostrar:true, precio:65000, tallas:[], colores:[{nombre:"Negro",hex:"#151515"}], fotos:["img/catalogo/gorra-27-1.jpg","img/catalogo/gorra-27-2.jpg"] },
    { id:"gorra-28", nombre:"Gorra 28", tipo:"Gorra", categoria:"gorras", mostrar:true, precio:69000, tallas:[], colores:[{nombre:"Negro",hex:"#151515"}], fotos:["img/catalogo/gorra-28-1.jpg","img/catalogo/gorra-28-2.jpg"] },
    { id:"gorra-29", nombre:"Gorra 29", tipo:"Gorra", categoria:"gorras", mostrar:true, precio:65000, tallas:[], colores:[{nombre:"Negro",hex:"#151515"}], fotos:["img/catalogo/gorra-29-1.jpg","img/catalogo/gorra-29-2.jpg"] },
    { id:"gorra-30", nombre:"Gorra 30", tipo:"Gorra", categoria:"gorras", mostrar:true, precio:65000, tallas:[], colores:[{nombre:"Negro",hex:"#151515"}], fotos:["img/catalogo/gorra-30-1.jpg","img/catalogo/gorra-30-2.jpg"] },
    { id:"gorra-31", nombre:"Gorra 31", tipo:"Gorra", categoria:"gorras", mostrar:true, precio:110000, tallas:[], colores:[{nombre:"Negro",hex:"#151515"}], fotos:["img/catalogo/gorra-31-1.jpg","img/catalogo/gorra-31-2.jpg"] },
    // BILLETERAS / TARJETEROS.
    { id:"billetera-01", nombre:"Billetera 01", tipo:"Billetera", categoria:"billeteras", mostrar:true, precio:85000, tallas:[], colores:[{nombre:"Negro",hex:"#151515"}], fotos:["img/catalogo/billetera-01.jpg"] },
    { id:"billetera-02", nombre:"Billetera 02", tipo:"Billetera", categoria:"billeteras", mostrar:true, precio:85000, tallas:[], colores:[{nombre:"Negro",hex:"#151515"}], fotos:["img/catalogo/billetera-02.jpg"] },
    { id:"billetera-03", nombre:"Billetera 03", tipo:"Billetera", categoria:"billeteras", mostrar:true, precio:85000, tallas:[], colores:[{nombre:"Negro",hex:"#151515"}], fotos:["img/catalogo/billetera-03.jpg"] },
    { id:"billetera-04", nombre:"Billetera 04", tipo:"Billetera", categoria:"billeteras", mostrar:true, precio:85000, tallas:[], colores:[{nombre:"Negro",hex:"#151515"}], fotos:["img/catalogo/billetera-04.jpg"] },
    { id:"tarjetero-01", nombre:"Tarjetero 01", tipo:"Tarjetero", categoria:"billeteras", mostrar:true, precio:85000, tallas:[], colores:[{nombre:"Negro",hex:"#151515"}], fotos:["img/catalogo/tarjetero-01.jpg"] },
    { id:"tarjetero-02", nombre:"Tarjetero 02", tipo:"Tarjetero", categoria:"billeteras", mostrar:true, precio:85000, tallas:[], colores:[{nombre:"Negro y gris",hex:"#4A4A4A"}], fotos:["img/catalogo/tarjetero-02.jpg"] },
  ],

  // ===================================================================
  // BÁSICAS: camisetas sin estampado, 270 g, 100% algodón.
  // Para agregar otra línea: copia un bloque completo { ... }, pégalo debajo y cámbialo.
  //   id:        único, minúsculas, sin espacios ni tildes
  //   nombre:    lo que ve el cliente
  //   gramaje:   peso de la tela en gramos (GSM)
  //   detalle:   una frase corta sobre la camiseta
  //   precio:    en pesos, sin puntos (89900 = $89.900)
  //   agotado:   true para mostrarla sin poder pedirla
  //   medidas:   guía de tallas en cm (ancho axila a axila / largo hombro a borde).
  //              Las tallas que aparecen en la tarjeta salen de aquí.
  //              null = la talla se vende, pero la guía dice "Por confirmar".
  //   colores:   cada color con su foto de frente y de espalda ("" = silueta "Foto próximamente")
  // ===================================================================
  productos: [
    {
      id: "basicas-270", nombre: "Básicas", gramaje: 270,
      detalle: "Camiseta sin estampado, 100% algodón.",
      precio: 79500,
      agotado: false,
      medidas: { S:{ancho:53.5, largo:67.5}, M:{ancho:55, largo:69}, L:{ancho:57, largo:72}, XL:{ancho:62.5, largo:76} },
      colores: [
        { nombre:"Negro",  hex:"#151515", foto:"img/catalogo/basica-negra-frente.jpg",  fotoEspalda:"img/catalogo/basica-negra-espalda.jpg" },
        { nombre:"Blanco", hex:"#EEEAE2", foto:"img/catalogo/basica-blanca-frente.jpg", fotoEspalda:"img/catalogo/basica-blanca-espalda.jpg" },
        { nombre:"Gris",   hex:"#8C8C8A", foto:"img/catalogo/basica-gris-frente.jpg",   fotoEspalda:"img/catalogo/basica-gris-espalda.jpg" }
      ]
    }
  ],

  // Municipios en la lista del pedido. "Otro municipio" abre un campo para escribirlo.
  municipios: ["La Vega", "Villeta", "San Francisco", "Nocaima", "Otro municipio"]
};
/* ============================ FIN ============================ */
