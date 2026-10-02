# MB — Sitio web (documentación técnica)

Sitio estático: HTML + CSS + JS vanilla. Sin frameworks, sin dependencias externas, sin cookies ni analytics.

## Estructura

```
site/
├── index.html                    Inicio
├── areas-de-practica/            Inmobiliario (#inmobiliario) + Civil y Comercial (#civil-y-comercial) + Laboral (#laboral)
├── consultas/                    Canales, formulario (→ WhatsApp), preguntas frecuentes
├── privacidad/                   Aviso de privacidad (página legal, no cuenta en el plan)
├── 404.html
├── css/styles.css                Tokens en :root
├── js/main.js                    Menú móvil + formulario → WhatsApp
├── assets/fonts/ images/ ASSET_MANIFEST.md
└── favicon.svg · favicon.ico · site.webmanifest · robots.txt · sitemap.xml
```

## Vista previa local

Los enlaces usan URLs limpias (`consultas/`). Abrir con un servidor local (por ejemplo, la extensión Live Server de VS Code sobre la carpeta `site/`). Abriendo los archivos con doble clic, los enlaces a carpetas no cargan `index.html`.

## Formulario

Campos permitidos por la vertical Abogados: Nombre, Teléfono, Motivo (Inmobiliario / Civil y Comercial / Laboral). Sin campo de texto libre.
Con JS: valida y abre WhatsApp (`5493515501343`; el segundo teléfono, +54 9 351 258-0512, figura como línea de llamada) con el mensaje armado. Sin JS: abre el chat de WhatsApp sin texto precargado.
Número configurado en `js/main.js` (`WHATSAPP_NUMBER`) y en los enlaces `wa.me` del HTML.

## Antes de publicar (bloqueantes)

1. **Dominio:** reemplazar `https://dominio-pendiente.invalid` en todos los `.html`, `robots.txt` y `sitemap.xml` (buscar y reemplazar en VS Code).
2. **Nombre de marca:** confirmar el texto exacto (hoy: "MB Estudio Jurídico — Moreno · Baudino"). Ver ASSET_MANIFEST para todos los lugares.
3. **Contenido aprobado por el cliente:** todos los textos, especialmente preguntas frecuentes y aviso de privacidad.
4. **Preguntas pendientes de respuesta del cliente:** costo de la primera consulta y pago de honorarios en cuotas (no publicadas).

## Imagen de portada (capacidad preparada, no activa)

El hero admite una imagen sin reestructurar: agregar un `<img>` dentro de `.hero__grid` y ajustar la grilla. No se usa por decisión del proyecto (sin retratos).

## Firma PROL

Pie de página, `.prol-signature`: isotipo oficial de PROL (SVG en línea, toma el color del texto) + "Infraestructura web por PROL", enlace a https://prolstudio.com.
