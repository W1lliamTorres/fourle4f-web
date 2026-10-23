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

  // Sección "Limitado". Toma la tela y las tallas de la línea marcada con limitada:true.
  limitado: {
    nombre: "Drop 01 · Edición limitada",
    titulo: "Pocas unidades. Sin reposición.",
    texto: "Nuestra tela más pesada, en un lote corto a propósito. Cuando se acaba, se acaba.",
    edicion: "01",
    agotado: false        // true = sello "Agotado" en esta sección y la línea limitada bloqueada
  },

  // Medios de pago. Los datos de cuenta NO van aquí: se envían por WhatsApp.
  pagos: ["Nequi", "Llaves bancarias", "Transferencia Bancolombia"],

  // ===================================================================
  // LÍNEAS DE PRODUCTO (una tarjeta por línea de tela).
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
