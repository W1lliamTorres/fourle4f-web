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
| `CLAUDE.md` | Instrucciones internas para Claude. Está en `.gitignore`: no se sube a GitHub ni a Hostinger | No |

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
| `proximo` | Sección misteriosa "Próximamente" que lleva a Instagram. `activa: false` la oculta | — |
| `categorias` | Subsecciones del menú desplegable "Catálogo" y de los filtros. Salen todas, aunque aún no tengan productos (en ese caso se ve "Muy pronto"). Hoy: Hombre / Unisex, Hoodies, Edición limitada, Básicas, Gorras, Ropa interior hombres, Calcetines y Billeteras / Tarjeteros | — |
| `avisoOriginales` | Frase que sale sobre el catálogo. `""` la quita | — |
| `avisoFotos` | Franja "¿Quieres ver las prendas sin difuminar?" con botón a WhatsApp. `activo: false` la quita | — |
| `disenos` | Los productos con foto: camisetas, hoodies, gorras, ropa interior, calcetines, billeteras (punto 3A) | — |
| `productos` | Las Básicas de 270 g (punto 3B) | — |
| `municipios` | Las opciones de entrega que ve el cliente | — |

## 3A. Productos con foto (`disenos`)

La lista empieza vacía. Dentro de `config.js` hay dos líneas de ejemplo (una camiseta y una gorra) comentadas con `//`: cópialas dentro de `disenos: [ ]`, quítales las `//` del inicio y cámbialas. Cada producto es una línea:

```js
{ id:"camiseta-halo", nombre:"Halo", tipo:"Camiseta", categoria:"hombre", mostrar:true, precio:119900, tallas:["S","M","L","XL"], colores:[{nombre:"Negro",hex:"#151515"}], fotos:["img/catalogo/camiseta-halo-1.jpg","img/catalogo/camiseta-halo-2.jpg"] },
```

- **`categoria`:** `"hombre"` (Hombre / Unisex), `"hoodies"`, `"gorras"`, `"ropa-interior"` (Ropa interior hombres), `"calcetines"` o `"billeteras"` (Billeteras / Tarjeteros).
- **`limitada: true`:** el producto sale también en "Edición limitada", con borde dorado, y su foto aparece en el ticket de la sección Limitado.
- **`mostrar: false`:** queda guardado pero no se ve en la página.
- **Varias fotos:** pon dos o más en `fotos`, separadas por comas: `fotos:["img/catalogo/a-1.jpg","img/catalogo/a-2.jpg"]`. Se deslizan en el celular y tienen flechas y puntos en el computador. Con una sola foto se ve fija; sin fotos (`fotos:[]`) se ve una silueta con "Foto próximamente".
- **Talla única (gorras, billeteras, tarjeteros):** deja las tallas vacías, `tallas:[]`. La tarjeta muestra "Talla única", no pide escoger S/M/L/XL y el pedido llega como "talla Única".
- **Tallas distintas por color:** ponlas dentro del color, por ejemplo `{nombre:"Negro",hex:"#2E2E2E",tallas:["M","XL"]}`.
- **Fotos nuevas:** guárdalas en `img/catalogo/`, formato vertical 3:4 (900 × 1200 px), menos de 150 KB. Usa nombres sin marcas (ej. `gorra-negra-1.jpg`), porque el nombre del archivo se ve en internet.
- **`agotado: true`:** se ve, pero no se puede pedir.

## 3B. Básicas (`productos`)

Camisetas sin estampado de 270 g, 100% algodón, en Blanco, Negro y Gris, tallas S, M y L. Son una tarjeta del catálogo (filtro "Básicas") y una pestaña de la guía de tallas:

```js
{
  id: "basicas-270", nombre: "Básicas", gramaje: 270,
  detalle: "Camiseta sin estampado, 100% algodón.",
  precio: 79500,
  limitada: false, agotado: false,
  medidas: { S:{ancho:53.5, largo:67.5}, M:{ancho:57, largo:69}, L:{ancho:57, largo:72} },
  colores: [
    { nombre:"Blanco", hex:"#EEEAE2", foto:"", fotoEspalda:"" },
    { nombre:"Negro",  hex:"#151515", foto:"", fotoEspalda:"" },
    { nombre:"Gris",   hex:"#8C8C8A", foto:"", fotoEspalda:"" }
  ]
},
```

- **`medidas`:** es la guía de tallas, en cm. Las tallas que el cliente puede escoger salen de aquí: para quitar una talla, borra su parte (ej. `L:{...}`); para agregar una, añádela (ej. `XL:{ancho:60, largo:74}`). Si una talla se vende pero aún no tienes sus medidas, ponla en `null`: se puede pedir y la guía dice "Por confirmar". Los decimales van con punto: `53.5`.
- **Agregar un color:** copia una línea `{ nombre:..., hex:..., foto:"", fotoEspalda:"" }` dentro de `colores`. El `hex` es el color del círculo y de la silueta mientras no hay foto; puedes buscar "selector de color" en Google para encontrarlo.
- **Agregar otra línea:** copia un bloque completo `{ ... },` y cambia el `id` (único, en minúsculas, sin espacios ni tildes).
- **Marcarla agotada:** `agotado: true`. Se sigue viendo, pero no se puede pedir.
- **`limitada: true`:** úsalo solo en una línea de edición limitada. Esa línea alimenta la sección "Limitado" (tela y tallas) y su tarjeta lleva borde dorado.

## 4. Fotos

1. Copia la foto en la carpeta `img/catalogo/`, con un nombre sin espacios, sin tildes y sin marcas (ej. `basica-negra.jpg`).
2. En el color de la Básica, escribe la ruta: `foto:"img/catalogo/basica-negra.jpg"`. En los productos con foto (3A) va en la lista `fotos`.
3. Si tienes foto de espalda de una Básica, ponla en `fotoEspalda:"img/catalogo/basica-negra-espalda.jpg"`. En computador se ve al pasar el mouse y en celular con los botones "Frente / Espalda".
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

### Cómo se actualiza hoy (GitHub → Hostinger)
El sitio en fourle4f.com se actualiza solo desde GitHub: cada vez que se suben cambios a la rama `main` del repositorio `W1lliamTorres/fourle4f-web` (con `git push`), Hostinger los publica en uno o dos minutos.

**Importante al cambiar estilos o código:** Hostinger les dice a los navegadores que guarden `css/` y `js/` por 7 días. Para que todos vean la versión nueva, en `index.html` sube el número `?v=` de las tres líneas que cargan `estilos.css`, `config.js` y `app.js` (por ejemplo de `?v=2` a `?v=3`). Si solo cambias datos en `js/config.js`, también súbelo.

### Después de subirlo (importante)
1. En `index.html`, cambia `https://fourle4f.com` por tu dominio real en las líneas `og:url` y `og:image`. Sin esto, la imagen no aparece al compartir el link.
2. Pega tu link en [developers.facebook.com/tools/debug](https://developers.facebook.com/tools/debug/) y dale a **Volver a extraer**. Así WhatsApp e Instagram actualizan la vista previa.
3. Haz un pedido de prueba desde tu celular para confirmar que llega al WhatsApp correcto.

## 7. Datos temporales (SUPUESTO) que debes reemplazar

| Dónde | Dato |
|---|---|
| `js/config.js` → `whatsapp` | Número definitivo (hoy está el temporal 312 218 1447) |
| `js/config.js` → `redes.tiktok` y `redes.facebook` | Cuando crees las cuentas |
| `js/config.js` → `productos` → `medidas` | Confirmar con el proveedor que M y L tienen el mismo ancho (57 cm) |
| `index.html` → `og:url` y `og:image` | Tu dominio |
| `img/` | Logo final y fotos de producto |

## 8. Agregar pagos en línea más adelante

El pedido sale por una sola función, `finalizarPedido()`, en `js/app.js`. Para conectar Wompi o Mercado Pago, solo hay que cambiar esa función; el catálogo y la bolsa quedan iguales.
