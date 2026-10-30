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
  // SUBSECCIONES DEL CATÁLOGO (aparecen en el menú desplegable "Catálogo").
  // "limitada" junta todo lo marcado con limitada:true; "basicas" son las
  // camisetas lisas por línea de tela (lista "productos", más abajo).
  // ===================================================================
  categorias: [
    { id: "hombre",   nombre: "Hombre / Unisex" },
    { id: "mujer",    nombre: "Mujer" },
    { id: "hoodies",  nombre: "Hoodies" },
    { id: "limitada", nombre: "Edición limitada" },
    { id: "basicas",  nombre: "Básicas por tela" }
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
  // PRENDAS CON FOTO (una tarjeta por diseño).
  // Para agregar una: copia una línea completa { ... }, pégala debajo y cámbiala.
  //   id:        único, minúsculas, sin espacios ni tildes
  //   nombre:    lo que ve el cliente
  //   tipo:      "Camiseta", "Polo", "Hoodie"...
  //   categoria: "hombre", "mujer" o "hoodies" (ver categorias)
  //   limitada:  true = aparece también en Edición limitada, con borde dorado
  //   mostrar:   false = la prenda NO se ve en la página (queda guardada)
  //   precio:    en pesos, sin puntos
  //   tallas:    tallas disponibles. Un color puede tener las suyas: { nombre:"Negro", hex:"#111", tallas:["M","XL"] }
  //   colores:   colores de la foto
  //   fotos:     una o varias fotos (img/catalogo/...). Con varias, se deslizan.
  //   agotado:   true para mostrarla sin poder pedirla
  // ===================================================================
  disenos: [   // SUPUESTO: nombres, precios y tallas. Ajusta a lo real.
    { id:"limitada-02", nombre:"Firma Bordada", tipo:"Camiseta", categoria:"hombre", limitada:true, mostrar:true,  precio:149900, tallas:["S","M","L","XL"], colores:[{nombre:"Blanco",hex:"#EEEAE2"},{nombre:"Negro",hex:"#151515"}], fotos:["img/catalogo/limitada-02.jpg"] },
    { id:"limitada-01", nombre:"Escudo Barroco", tipo:"Camiseta", categoria:"hombre", limitada:true, mostrar:true , precio:149900, tallas:["S","M","L","XL"], colores:[{nombre:"Blanco",hex:"#EEEAE2"},{nombre:"Negro",hex:"#151515"}], fotos:["img/catalogo/limitada-01.jpg"] },
    { id:"limitada-03", nombre:"Racing", tipo:"Camiseta", categoria:"hombre", limitada:true, mostrar:true , precio:149900, tallas:["S","M","L","XL"], colores:[{nombre:"Blanco",hex:"#EEEAE2"},{nombre:"Azul noche",hex:"#141826"}], fotos:["img/catalogo/limitada-03.jpg"] },

    { id:"camiseta-halo",       nombre:"Halo",            tipo:"Camiseta", categoria:"hombre", mostrar:true,  precio:119900, tallas:["S","M","L","XL"], colores:[{nombre:"Negro",hex:"#151515"},{nombre:"Blanco",hex:"#EEEAE2"}], fotos:["img/catalogo/camiseta-halo.jpg"] },
    { id:"camiseta-jinete",     nombre:"Jinete",          tipo:"Camiseta", categoria:"hombre", mostrar:true,  precio:119900, tallas:["S","M","L","XL"], colores:[{nombre:"Negro",hex:"#151515"},{nombre:"Blanco",hex:"#EEEAE2"}], fotos:["img/catalogo/camiseta-jinete.jpg"] },
    { id:"camiseta-orbita",     nombre:"Órbita",          tipo:"Camiseta", categoria:"hombre", mostrar:true,  precio:119900, tallas:["S","M","L","XL"], colores:[{nombre:"Negro",hex:"#151515"},{nombre:"Blanco",hex:"#EEEAE2"}], fotos:["img/catalogo/camiseta-orbita.jpg"] },
    { id:"camiseta-palmeras",   nombre:"Palmeras",        tipo:"Camiseta", categoria:"hombre", mostrar:true,  precio:119900, tallas:["S","M","L","XL"], colores:[{nombre:"Blanco",hex:"#EEEAE2"},{nombre:"Negro",hex:"#151515"}], fotos:["img/catalogo/camiseta-palmeras.jpg"] },
    { id:"camiseta-salpicada",  nombre:"Salpicada",       tipo:"Camiseta", categoria:"hombre", mostrar:true,  precio:119900, tallas:["S","M","L","XL"], colores:[{nombre:"Negro",hex:"#151515"},{nombre:"Blanco",hex:"#EEEAE2"}], fotos:["img/catalogo/camiseta-salpicada.jpg"] },
    { id:"camiseta-grabado",    nombre:"Grabado",         tipo:"Camiseta", categoria:"hombre", mostrar:true,  precio:119900, tallas:["S","M","L","XL"], colores:[{nombre:"Negro",hex:"#151515"},{nombre:"Arena",hex:"#A8977C"},{nombre:"Blanco",hex:"#EEEAE2"}], fotos:["img/catalogo/camiseta-grabado.jpg"] },
    { id:"camiseta-puntos",     nombre:"Ondas de Puntos", tipo:"Camiseta", categoria:"hombre", mostrar:true,  precio:119900, tallas:["S","M","L","XL"], colores:[{nombre:"Negro",hex:"#151515"},{nombre:"Blanco",hex:"#EEEAE2"}], fotos:["img/catalogo/camiseta-puntos.jpg"] },
    { id:"camiseta-sport",      nombre:"Sport Line",      tipo:"Camiseta", categoria:"hombre", mostrar:true,  precio:119900, tallas:["S","M","L","XL"], colores:[{nombre:"Negro",hex:"#151515"},{nombre:"Blanco",hex:"#EEEAE2"}], fotos:["img/catalogo/camiseta-sport.jpg"] },
    { id:"camiseta-franja",     nombre:"Franja Neón",     tipo:"Camiseta", categoria:"hombre", mostrar:true,  precio:119900, tallas:["S","M","L","XL"], colores:[{nombre:"Negro",hex:"#151515"},{nombre:"Blanco",hex:"#EEEAE2"}], fotos:["img/catalogo/camiseta-franja.jpg"] },
    { id:"camiseta-bordado",    nombre:"Bordado Tonal",   tipo:"Camiseta", categoria:"hombre", mostrar:true,  precio:119900, tallas:["S","M","L","XL"], colores:[{nombre:"Negro",hex:"#151515"},{nombre:"Blanco",hex:"#EEEAE2"}], fotos:["img/catalogo/camiseta-bordado.jpg"] },
    { id:"camiseta-minimal",    nombre:"Minimal",         tipo:"Camiseta", categoria:"hombre", mostrar:true,  precio:119900, tallas:["S","M","L","XL"], colores:[{nombre:"Negro",hex:"#151515"},{nombre:"Arena",hex:"#D9C8B0"},{nombre:"Blanco",hex:"#EEEAE2"}], fotos:["img/catalogo/camiseta-minimal.jpg"] },
    { id:"camiseta-lavada",     nombre:"Lavada",          tipo:"Camiseta", categoria:"hombre", mostrar:true,  precio:119900, tallas:["S","M","L","XL"], colores:[{nombre:"Negro lavado",hex:"#2A2C2C"},{nombre:"Gris",hex:"#5E5E5C"},{nombre:"Arena",hex:"#D8C29A"}], fotos:["img/catalogo/camiseta-lavada.jpg"] },
    { id:"polo-clasico",        nombre:"Clásico",         tipo:"Polo",     categoria:"hombre", mostrar:true,  precio:129900, tallas:["S","M","L","XL"], colores:[{nombre:"Negro",hex:"#151515"},{nombre:"Beige",hex:"#D9C8B0"},{nombre:"Blanco",hex:"#EEEAE2"}], fotos:["img/catalogo/polo-clasico.jpg"] },
    { id:"polo-ribete",         nombre:"Ribete",          tipo:"Polo",     categoria:"hombre", mostrar:true,  precio:129900, tallas:["S","M","L","XL"], colores:[{nombre:"Negro",hex:"#151515"},{nombre:"Verde",hex:"#1F5A3A"},{nombre:"Blanco",hex:"#EEEAE2"}], fotos:["img/catalogo/polo-ribete.jpg"] },
    { id:"polo-contraste",      nombre:"Contraste",       tipo:"Polo",     categoria:"hombre", mostrar:true,  precio:129900, tallas:["S","M","L","XL"], colores:[{nombre:"Negro",hex:"#151515"},{nombre:"Verde oliva",hex:"#8A9A72"},{nombre:"Blanco",hex:"#EEEAE2"}], fotos:["img/catalogo/polo-contraste.jpg"] },

    // Prendas donde el logo tapado ocupa casi todo el estampado.
    { id:"camiseta-relieve",     nombre:"Relieve",     tipo:"Camiseta", categoria:"hombre", mostrar:true , precio:119900, tallas:["S","M","L","XL"], colores:[{nombre:"Negro",hex:"#151515"},{nombre:"Verde",hex:"#1F5A3A"},{nombre:"Blanco",hex:"#EEEAE2"}], fotos:["img/catalogo/camiseta-relieve.jpg"] },
    { id:"camiseta-varsity",     nombre:"Varsity",     tipo:"Camiseta", categoria:"hombre", mostrar:true , precio:119900, tallas:["S","M","L","XL"], colores:[{nombre:"Negro",hex:"#151515"},{nombre:"Blanco",hex:"#EEEAE2"}], fotos:["img/catalogo/camiseta-varsity.jpg"] },
    { id:"camiseta-studio",      nombre:"Studio",      tipo:"Camiseta", categoria:"hombre", mostrar:true , precio:119900, tallas:["S","M","L","XL"], colores:[{nombre:"Negro",hex:"#151515"},{nombre:"Blanco",hex:"#EEEAE2"}], fotos:["img/catalogo/camiseta-studio.jpg"] },
    { id:"camiseta-contorno",    nombre:"Contorno",    tipo:"Camiseta", categoria:"hombre", mostrar:true , precio:119900, tallas:["S","M","L","XL"], colores:[{nombre:"Negro",hex:"#151515"},{nombre:"Azul noche",hex:"#1B2236"},{nombre:"Blanco",hex:"#EEEAE2"}], fotos:["img/catalogo/camiseta-contorno.jpg"] },
    { id:"camiseta-gotica",      nombre:"Gótica",      tipo:"Camiseta", categoria:"hombre", mostrar:true , precio:119900, tallas:["S","M","L","XL"], colores:[{nombre:"Negro",hex:"#151515"},{nombre:"Blanco",hex:"#EEEAE2"}], fotos:["img/catalogo/camiseta-gotica.jpg"] },
    { id:"camiseta-tipografica", nombre:"Tipográfica", tipo:"Camiseta", categoria:"hombre", mostrar:true , precio:119900, tallas:["S","M","L","XL"], colores:[{nombre:"Negro",hex:"#151515"},{nombre:"Gris",hex:"#4A4F57"},{nombre:"Azul",hex:"#6E8FB5"}], fotos:["img/catalogo/camiseta-tipografica.jpg"] },
    { id:"camiseta-huesos",      nombre:"Huesos",      tipo:"Camiseta", categoria:"hombre", mostrar:true , precio:119900, tallas:["S","M","L","XL"], colores:[{nombre:"Negro",hex:"#151515"},{nombre:"Blanco",hex:"#EEEAE2"}], fotos:["img/catalogo/camiseta-huesos.jpg"] },
    { id:"camiseta-bloque",      nombre:"Bloque",      tipo:"Camiseta", categoria:"hombre", mostrar:true , precio:119900, tallas:["S","M","L","XL"], colores:[{nombre:"Negro",hex:"#151515"},{nombre:"Rojo",hex:"#B3121F"},{nombre:"Blanco",hex:"#EEEAE2"}], fotos:["img/catalogo/camiseta-bloque.jpg"] },
    { id:"camiseta-angeles",     nombre:"Ángeles",     tipo:"Camiseta", categoria:"hombre", mostrar:true , precio:119900, tallas:["S","M","L","XL"], colores:[{nombre:"Negro",hex:"#151515"},{nombre:"Blanco",hex:"#EEEAE2"}], fotos:["img/catalogo/camiseta-angeles.jpg"] },
    { id:"camiseta-caricatura",  nombre:"Caricatura",  tipo:"Camiseta", categoria:"hombre", mostrar:true , precio:119900, tallas:["S","M","L","XL"], colores:[{nombre:"Negro",hex:"#151515"},{nombre:"Blanco",hex:"#EEEAE2"}], fotos:["img/catalogo/camiseta-caricatura.jpg"] },
    { id:"camiseta-firma",       nombre:"Firma",       tipo:"Camiseta", categoria:"hombre", mostrar:true , precio:119900, tallas:["S","M","L","XL"], colores:[{nombre:"Negro",hex:"#151515"},{nombre:"Blanco",hex:"#EEEAE2"}], fotos:["img/catalogo/camiseta-firma.jpg"] },

    { id:"mujer-corazon", nombre:"Corazón Bordado", tipo:"Camiseta", categoria:"mujer", mostrar:true,  precio:119900, tallas:["S","M","L"], colores:[{nombre:"Blanco",hex:"#EEEAE2"},{nombre:"Rojo",hex:"#C8161D"},{nombre:"Negro",hex:"#151515"}], fotos:["img/catalogo/mujer-corazon.jpg"] },
    { id:"mujer-franjas", nombre:"Franjas",         tipo:"Camiseta", categoria:"mujer", mostrar:true , precio:119900, tallas:["S","M","L"], colores:[{nombre:"Blanco",hex:"#EEEAE2"},{nombre:"Café",hex:"#8E7A5E"},{nombre:"Negro",hex:"#151515"}], fotos:["img/catalogo/mujer-franjas.jpg"] },

    // Las tallas por color salen de la foto del proveedor.
    { id:"hoodie-grafiti", nombre:"Grafiti París", tipo:"Hoodie", categoria:"hoodies", mostrar:true, precio:189900, tallas:["M","L","XL","2XL"],
      colores:[{nombre:"Blanco",hex:"#EEEAE2",tallas:["M","L","XL","2XL"]},{nombre:"Negro lavado",hex:"#2E2E2E",tallas:["M","XL"]}], fotos:["img/catalogo/hoodie-grafiti.jpg"] }
  ],

  // ===================================================================
  // BÁSICAS POR TELA: camisetas lisas (una tarjeta por línea de tela).
  // Para agregar una línea: copia un bloque completo { ... }, pégalo debajo y cámbialo.
  //   id:        único, minúsculas, sin espacios ni tildes
  //   nombre:    lo que ve el cliente
  //   gramaje:   peso de la tela en gramos (GSM)
  //   detalle:   una frase corta sobre la tela
  //   precio:    en pesos, sin puntos (89900 = $89.900)
  //   limitada:  true solo para la edición limitada
  //   agotado:   true para mostrarla sin poder pedirla
  //   medidas:   guía de tallas en cm (ancho axila a axila / largo hombro a borde).
  //              Las tallas que aparecen en la tarjeta salen de aquí.
  //   colores:   cada color con su foto de frente y de espalda ("" = silueta "Foto próximamente")
  // ===================================================================
  productos: [
    {
      id: "limitada-310", nombre: "Edición Limitada", gramaje: 310,
      detalle: "Nuestra tela más pesada. Lote único.",
      precio: 109900,                                   // SUPUESTO
      limitada: true, agotado: false,
      medidas: { S:{ancho:53.5, largo:67.5}, M:{ancho:57, largo:69}, L:{ancho:57, largo:72} },  // Verificar M y L (mismo ancho)
      colores: [                                        // SUPUESTO
        { nombre:"Negro",  hex:"#151515", foto:"", fotoEspalda:"" },
        { nombre:"Blanco", hex:"#EEEAE2", foto:"", fotoEspalda:"" }
      ]
    },
    {
      id: "premium-270", nombre: "Premium", gramaje: 270,
      detalle: "Tela pesada que mantiene la forma lavada tras lavada.",
      precio: 89900,                                    // SUPUESTO
      limitada: false, agotado: false,
      medidas: { S:{ancho:53.5, largo:67.5}, M:{ancho:57, largo:69}, L:{ancho:57, largo:72} },  // Verificar M y L (mismo ancho)
      colores: [                                        // SUPUESTO
        { nombre:"Negro",  hex:"#151515", foto:"", fotoEspalda:"" },
        { nombre:"Blanco", hex:"#EEEAE2", foto:"", fotoEspalda:"" },
        { nombre:"Gris",   hex:"#8C8C8A", foto:"", fotoEspalda:"" }
      ]
    },
    {
      id: "acid-240", nombre: "Acid Wash", gramaje: 240,
      detalle: "100% algodón con lavado ácido. Cada prenda queda única.",
      precio: 94900,                                    // SUPUESTO
      limitada: false, agotado: false,
      medidas: { S:{ancho:51, largo:70}, M:{ancho:55, largo:70}, L:{ancho:57.5, largo:75}, XL:{ancho:62.5, largo:76} },
      colores: [                                        // SUPUESTO
        { nombre:"Negro deslavado", hex:"#2B2B2B", foto:"", fotoEspalda:"" },
        { nombre:"Gris deslavado",  hex:"#6E6E6B", foto:"", fotoEspalda:"" }
      ]
    },
    {
      id: "esencial-210", nombre: "Esencial", gramaje: 210,   // SUPUESTO: nombre de la línea
      detalle: "Más liviana y fresca, para el día a día.",
      precio: 69900,                                    // SUPUESTO
      limitada: false, agotado: false,
      medidas: { S:{ancho:53.5, largo:67.5}, M:{ancho:57, largo:69}, L:{ancho:57, largo:72} },  // Verificar M y L (mismo ancho)
      colores: [                                        // SUPUESTO
        { nombre:"Negro",  hex:"#151515", foto:"", fotoEspalda:"" },
        { nombre:"Blanco", hex:"#EEEAE2", foto:"", fotoEspalda:"" },
        { nombre:"Gris",   hex:"#8C8C8A", foto:"", fotoEspalda:"" }
      ]
    }
  ],

  // Municipios en la lista del pedido. "Otro municipio" abre un campo para escribirlo.
  municipios: ["La Vega", "Villeta", "San Francisco", "Nocaima", "Otro municipio"]
};
/* ============================ FIN ============================ */
