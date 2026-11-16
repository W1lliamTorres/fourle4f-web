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

  // Sección "Limitado". Toma la tela y las tallas de la línea marcada con limitada:true.
  limitado: {
    nombre: "Drop 01 · Edición limitada",
    titulo: "Pocas unidades. Sin reposición.",
    texto: "Nuestra tela más pesada, en un lote corto a propósito. Cuando se acaba, se acaba.",
    edicion: "01",
    agotado: false        // true = sello "Agotado" en esta sección y la línea limitada bloqueada
  },

  // Sección misteriosa "Próximamente": lleva a Instagram. activa: false para ocultarla.
  proximo: {
    activa: true,
    etiqueta: "Próximamente",
    titulo: "Algo se está cosiendo.",
    texto: "Estamos trabajando en algo nuevo para ti. No te podemos contar más… todavía. Las pistas salen primero en Instagram.",
    boton: "Ver las pistas en Instagram"
  },

  // Medios de pago. Los datos de cuenta NO van aquí: se envían por WhatsApp.
  pagos: ["Nequi", "Llaves bancarias", "Transferencia Bancolombia"],

  // ===================================================================
  // SUBSECCIONES DEL CATÁLOGO (aparecen en los filtros y en el menú
  // desplegable "Catálogo"). Se muestran todas, aunque todavía no tengan
  // prendas. "limitada" junta todo lo marcado con limitada:true; "basicas"
  // son las camisetas lisas (lista "productos", más abajo).
  // ===================================================================
  categorias: [
    { id: "hombre",        nombre: "Hombre / Unisex" },
    { id: "hoodies",       nombre: "Hoodies" },
    { id: "limitada",      nombre: "Edición limitada" },
    { id: "basicas",       nombre: "Básicas" },
    { id: "gorras",        nombre: "Gorras" },
    { id: "ropa-interior", nombre: "Ropa interior hombres" },
    { id: "calcetines",    nombre: "Calcetines" },
    { id: "billeteras",    nombre: "Billeteras / Tarjeteros" }
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
  //   categoria: "hombre", "hoodies", "gorras", "ropa-interior", "calcetines" o "billeteras"
  //   limitada:  true = aparece también en Edición limitada, con borde dorado
  //   mostrar:   false = el producto NO se ve en la página (queda guardado)
  //   precio:    en pesos, sin puntos
  //   tallas:    tallas disponibles, ej. ["S","M","L","XL"].
  //              Vacío [] = TALLA ÚNICA (gorras, billeteras, tarjeteros...).
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
    // CAMISETAS ESTAMPADAS (Hombre / Unisex).
    { id:"estampada-01", nombre:"Estampada 01", tipo:"Camiseta", categoria:"hombre", mostrar:true, precio:79500, tallas:["M","L"], colores:[{nombre:"Negro",hex:"#151515"}], fotos:["img/catalogo/estampada-01-1.jpg","img/catalogo/estampada-01-2.jpg"] },
    { id:"estampada-02", nombre:"Estampada 02", tipo:"Camiseta", categoria:"hombre", mostrar:true, precio:79500, tallas:["M","L"], colores:[{nombre:"Café",hex:"#6B5E4E"}], fotos:["img/catalogo/estampada-02-1.jpg","img/catalogo/estampada-02-2.jpg"] },
    { id:"estampada-03", nombre:"Estampada 03", tipo:"Camiseta", categoria:"hombre", mostrar:true, precio:79500, tallas:["M"], colores:[{nombre:"Arena",hex:"#B8AE9C"}], fotos:["img/catalogo/estampada-03-1.jpg","img/catalogo/estampada-03-2.jpg"] },
    { id:"estampada-04", nombre:"Estampada 04", tipo:"Camiseta", categoria:"hombre", mostrar:true, precio:79500, tallas:["XL"], colores:[{nombre:"Gris",hex:"#8C8A86"}], fotos:["img/catalogo/estampada-04-1.jpg","img/catalogo/estampada-04-2.jpg"] },
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
  //   limitada:  true solo para la edición limitada
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
      limitada: false, agotado: false,
      medidas: { S:{ancho:53.5, largo:67.5}, M:{ancho:57, largo:69}, L:{ancho:57, largo:72} },  // SUPUESTO: verificar M y L (mismo ancho). Para vender XL agrega  XL:{ancho:__, largo:__}
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
