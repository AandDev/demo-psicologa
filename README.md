# Lic. Mariana Ferreyra · Psicóloga (proyecto conceptual)

Landing de una página para una psicóloga con enfoque cognitivo-conductual que
atiende ansiedad, ataques de pánico, estrés y burnout, de forma presencial en
Palermo (CABA) y online. El objetivo de la web es que quien la visite escriba por
WhatsApp para pedir una primera entrevista.

> **Proyecto conceptual.** Mariana Ferreyra es un perfil ficticio. El teléfono
> (+54 9 11 0000-0000), la matrícula (M.N. 00000) y el enlace de Instagram son
> ficticios a propósito. El sitio lleva `noindex`.

## Stack

HTML, CSS y JavaScript vanilla, sin frameworks, sin build y sin dependencias. La
única carga externa es Google Fonts (Young Serif y Figtree). El JavaScript es solo
una mejora progresiva: la página funciona sin él.

## Estructura

```
index.html          Página única con navegación por anclas
css/styles.css      Tokens en :root, base, componentes y secciones (mobile-first)
js/main.js          Menú plegable en móvil y respaldo si falta una foto
assets/img/         Fotos (WebP, 3:4) e imagen para compartir (og-image.png)
assets/icons/       Favicons
```

## Ver en local

Abrir `index.html` en el navegador. No hace falta servidor.

## Diseño

Dirección visual "Arco y barro": paleta tierra (crema, arena, terracota), fotos
recortadas en arco con marco terracota y bandas de color en lugar de líneas
divisorias. Todos los contrastes cumplen WCAG AA y las animaciones respetan
`prefers-reduced-motion`.

## Publicación

Sitio estático en Netlify. La URL provisoria
(`https://demo-web-psicologa.netlify.app/`) figura en `canonical`, `og:url` y en las
imágenes de Open Graph y Twitter. Hay que cambiarla cuando haya dominio propio.
