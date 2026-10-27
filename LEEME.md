# Sitio web FOURLE4F · Guía para el dueño

Esta guía explica cómo cambiar los datos del sitio sin saber programar.

## 1. Qué hay en la carpeta

| Carpeta o archivo | Qué es | ¿Lo editas? |
|---|---|---|
| `js/config.js` | Todos los datos de la tienda: WhatsApp, Instagram, productos, precios, municipios | **Sí. Es el único que necesitas editar.** |
| `img/` | Logo, favicon, fotos de producto, imagen para compartir | Sí, para agregar o cambiar fotos |
| `index.html` | La estructura de la página | Solo para el dominio (paso 6) |
| `css/estilos.css` | Colores, tipografías y diseño | No hace falta |
| `js/app.js` | El funcionamiento (bolsa, pedido por WhatsApp) | No |
| `.claude/` | Configuración de pruebas | No lo subas al hosting |

## 2. Cómo editar `js/config.js`

1. Ábrelo con el **Bloc de notas** (clic derecho → Abrir con → Bloc de notas) o con [VS Code](https://code.visualstudio.com/), que es gratis y te marca los errores en rojo.
2. Cambia **solo lo que está entre comillas** o los números.
3. Guarda y recarga la página.

**Reglas para no romper nada**
- Los textos siempre van entre comillas: `"así"`.
- No borres las comas del final de cada línea.
- Los precios se escriben sin puntos: `89900`, no `89.900`.
- Si la página queda en blanco o sin productos, revisa que no falte una comilla o una coma en lo último que cambiaste.

### Qué hace cada dato

| Campo | Para qué sirve | Ejemplo |
|---|---|---|
| `whatsapp` | Número que recibe los pedidos. Va con 57 adelante, sin `+` y sin espacios | `"573101234567"` |
| `redes.instagram` / `tiktok` / `facebook` | Solo el usuario, sin @ y sin link. Si una red está vacía (`""`), no aparece en la página | `"fourle4f.co"` |
| `promo.activa` | Muestra u oculta la barra verde de arriba | `true` o `false` |
| `promo.texto` | El texto de esa barra | `"Nuevo drop disponible"` |
| `hero.foto` | Foto grande del inicio. Vacía = se muestra el trébol bordado | `"img/hero.jpg"` |
| `conoce.fotos` | Las 4 fotos de la sección "Conoce FOURLE4F" (outfit, dobladas, tela, mision). Vacías = ilustración de prenda sobre textura de tela (ver punto 4) | `outfit: { foto:"img/conoce-outfit.jpg", alt:"..." }` |
| `limitado.nombre`, `titulo`, `texto`, `edicion` | Textos de la sección Limitado | — |
| `limitado.agotado` | `true` muestra el sello "Agotado" y bloquea la línea limitada | `false` |
| `pagos` | Medios de pago. Salen en "Cómo comprar", en la bolsa y en el pie de página. **No pongas números de cuenta aquí**: esos se envían por WhatsApp | `["Nequi", "Llaves bancarias"]` |
| `productos` | Las líneas de tela (punto 3) | — |
| `municipios` | Las opciones de entrega que ve el cliente | — |

## 3. Productos (líneas de tela)

Cada línea de tela es una tarjeta del catálogo y una pestaña de la guía de tallas:

```js
{
  id: "premium-270", nombre: "Premium", gramaje: 270,
  detalle: "Tela pesada que mantiene la forma lavada tras lavada.",
  precio: 89900,
  limitada: false, agotado: false,
  medidas: { S:{ancho:53.5, largo:67.5}, M:{ancho:57, largo:69}, L:{ancho:57, largo:72} },
  colores: [
    { nombre:"Negro",  hex:"#151515", foto:"", fotoEspalda:"" },
    { nombre:"Blanco", hex:"#EEEAE2", foto:"", fotoEspalda:"" }
  ]
},
```

- **`medidas`:** es la guía de tallas de esa tela, en cm. Las tallas que el cliente puede escoger salen de aquí: para quitar una talla, borra su parte (ej. `L:{...}`); para agregar una, añádela (ej. `XL:{ancho:60, largo:74}`). Los decimales van con punto: `53.5`.
- **Agregar un color:** copia una línea `{ nombre:..., hex:..., foto:"", fotoEspalda:"" }` dentro de `colores`. El `hex` es el color del círculo y de la silueta mientras no hay foto; puedes buscar "selector de color" en Google para encontrarlo.
- **Agregar una línea:** copia un bloque completo `{ ... },` y cambia el `id` (único, en minúsculas, sin espacios ni tildes).
- **Marcarla agotada:** `agotado: true`. Se sigue viendo, pero no se puede pedir.
- **`limitada: true`:** úsalo solo en la edición limitada. Esa línea alimenta la sección "Limitado" (tela y tallas) y su tarjeta lleva borde dorado.

## 4. Fotos

1. Copia la foto en la carpeta `img/`, con un nombre sin espacios ni tildes (ej. `premium-negro.jpg`).
2. En el color correspondiente, escribe la ruta: `foto:"img/premium-negro.jpg"`.
3. Si tienes foto de espalda, ponla en `fotoEspalda:"img/premium-negro-espalda.jpg"`. En computador se ve al pasar el mouse y en celular con los botones "Frente / Espalda".
4. Para el inicio, pon una foto vertical en `hero.foto`. Si la dejas vacía, se muestra el trébol bordado.
5. Para la sección "Conoce FOURLE4F", llena `conoce.fotos` (cada una con su `foto` y su `alt`, que es la descripción para quien no ve la imagen). Usa solo fotos de prendas que vendes:
   - `outfit`: persona con un outfit FOURLE4F, de cuerpo entero (vertical, 1200 × 1500 px).
   - `dobladas`: camisetas dobladas o apiladas (cuadrada, 1200 × 1200 px).
   - `tela`: primer plano de la tela o de una costura (cuadrada, 1200 × 1200 px).
   - `mision`: prendas reales colgadas o sobre una superficie (vertical, 1200 × 1500 px).

**Tamaño recomendado**
- **Fotos de producto:** 1200 × 1500 px (formato vertical 4:5), en JPG o WebP, de menos de 200 KB cada una. Puedes comprimirlas gratis en [squoosh.app](https://squoosh.app).
- **Imagen para compartir (`img/og-fourle4f.jpg`):** 1200 × 630 px, de menos de 300 KB. Es la que aparece cuando mandas el link por WhatsApp.
- **Fondo:** usa siempre el mismo para todas las fotos (negro o gris oscuro) para que el catálogo se vea uniforme.

## 5. Logo

Los archivos actuales son recortes de la lámina de logos (LOGO.docx):

| Archivo | Dónde se usa |
|---|---|
| `img/logo-horizontal.png` | Horizontal con trébol: encabezado de la página |
| `img/logo-texto.png` | Horizontal sin trébol: pie de página |
| `img/favicon.png` (64 × 64) e `img/apple-touch-icon.png` (180 × 180) | Trébol solo: ícono de la pestaña del navegador |
| `img/logo-trebol.png` | Imagen del inicio mientras no haya foto |
| `img/og-fourle4f.jpg` | Imagen al compartir el link |

Cuando tengas el logo final, reemplaza esos archivos con el **mismo nombre**. Lo ideal es PNG con fondo transparente.

## 6. Subir el sitio a internet

Sube **solo** estas carpetas y archivos: `index.html`, `css/`, `js/` e `img/`.

### Opción A: Netlify (gratis, la más fácil)
1. Crea una cuenta en [netlify.com](https://www.netlify.com).
2. Ve a **Add new site → Deploy manually**.
3. Arrastra una carpeta que contenga solo `index.html`, `css`, `js` e `img`.
4. Netlify te da un link de prueba (`algo.netlify.app`).
5. **Para usar tu dominio:**
   1. En Netlify ve a **Domain management → Add a domain** y escribe tu dominio.
   2. Netlify te muestra unos registros DNS.
   3. Entra donde compraste el dominio y cambia los DNS por los de Netlify. Tarda de minutos a 24 horas.
   4. El candado HTTPS se activa solo.
6. **Para actualizar:** en **Deploys**, vuelve a arrastrar la carpeta.

### Opción B: Hostinger
1. Entra a hPanel → **Sitios web → Administrar → Administrador de archivos**.
2. Abre la carpeta `public_html` y borra el `default.php` si existe.
3. Sube `index.html` y las carpetas `css`, `js` e `img`. Puedes subirlas en un .zip y usar "Extraer".
4. Si el dominio es de Hostinger, ya queda conectado. Activa el SSL gratis en **Seguridad → SSL**.

### Después de subirlo (importante)
1. En `index.html`, cambia `https://fourle4f.com` por tu dominio real en las líneas `og:url` y `og:image`. Sin esto, la imagen no aparece al compartir el link.
2. Pega tu link en [developers.facebook.com/tools/debug](https://developers.facebook.com/tools/debug/) y dale a **Volver a extraer**. Así WhatsApp e Instagram actualizan la vista previa.
3. Haz un pedido de prueba desde tu celular para confirmar que llega al WhatsApp correcto.

## 7. Datos temporales (SUPUESTO) que debes reemplazar

| Dónde | Dato |
|---|---|
| `js/config.js` → `whatsapp` | Número definitivo (hoy está el temporal 312 218 1447) |
| `js/config.js` → `redes.tiktok` y `redes.facebook` | Cuando crees las cuentas |
| `js/config.js` → `productos` → `precio` | Precios reales (hoy: $109.900, $89.900, $94.900 y $69.900) |
| `js/config.js` → `productos` → `colores` | Colores reales de cada línea |
| `js/config.js` → `productos` → `nombre` "Esencial" | Nombre definitivo de la línea de 210 g |
| `js/config.js` → `productos` → `medidas` | Confirmar con el proveedor: en 310 g, 270 g y 210 g las tallas M y L tienen el mismo ancho (57 cm) |
| `index.html` → `og:url` y `og:image` | Tu dominio |
| `img/` | Logo final y fotos de producto |

## 8. Agregar pagos en línea más adelante

El pedido sale por una sola función, `finalizarPedido()`, en `js/app.js`. Para conectar Wompi o Mercado Pago, solo hay que cambiar esa función; el catálogo y la bolsa quedan iguales.
