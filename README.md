# Taz Brand

Sistema de diseño de TazCorp: tokens de color derivados del logotipo y una capa de
componentes en CSS plano. Sin dependencias y sin build — son clases, así que Angular,
React y las plantillas Jinja consumen exactamente el mismo archivo.

📖 **Documentación viva:** https://developers-taz.github.io/taz-brand/

---

## Instalación

### Angular, React o cualquier proyecto con npm

```bash
npm i github:developers-taz/taz-brand#v1.0.0
```

```css
/* src/styles.css */
@import "@tazcorp/brand";
```

### FastAPI + Jinja, Bootstrap o HTML suelto

Sin instalar nada: jsDelivr sirve el archivo directo desde el tag de GitHub.

```html
<link rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/developers-taz/taz-brand@v1.0.0/dist/taz.css">
```

### Proyecto con Tailwind 4

```css
@import "tailwindcss";
@import "@tazcorp/brand";
@import "@tazcorp/brand/theme.css";  /* habilita bg-primary, text-brand-gold-700… */
```

---

## Qué trae

| Archivo | Contenido |
|---|---|
| `dist/taz.css` | Punto de entrada: tokens + componentes |
| `dist/tokens.css` | Variables de color y tipografía, con tema oscuro |
| `dist/taz-ui.css` | Componentes: botones, formularios, tablas, insignias, alertas, tarjetas, pestañas |
| `dist/taz.theme.css` | Bloque `@theme` para Tailwind 4 |

Componentes disponibles: botones (6 variantes, 3 tamaños, grupos), campos de texto,
`textarea`, combobox, casillas, radios, interruptor, grupos con prefijo y sufijo, tablas
(alternas, compactas, encabezado fijo, selección, totales, estado vacío), paginación,
insignias, alertas, tarjetas, métricas, pestañas y el spinner de la espiral.

---

## Los colores

Salen del conteo de píxeles del logotipo oficial, no de la plantilla del sitio.

| Rol | Hex | Presencia en el logotipo |
|---|---|---|
| Azul Taz — primario | `#4477B7` | 14,4 % |
| Oro Taz — acento | `#E8BB2F` | 8,5 % |
| Gris del wordmark | `#959595` | 75,3 % |

> **Nota.** `tazcorp.cl` usa hoy `#2F55D4` y `#614092`, que son los valores de fábrica de
> la plantilla Bootstrap «Landrick» y no aparecen en el logotipo. Este paquete toma el
> logotipo como fuente de verdad. Actualizar el sitio es tarea pendiente.

### Las tres reglas

1. **Ningún proyecto escribe hexadecimales.** Todo sale de las variables. Si falta un
   color, se agrega acá, no allá.
2. **El dorado es escaso.** Una acción destacada por pantalla y el indicador de pestaña
   activa. Si se ve en todas partes, deja de leerse como marca y empieza a leerse como
   advertencia.
3. **Proporción 60 / 30 / 10.** Neutro para sostener, azul para la acción, dorado para el
   acento.

### Prohibiciones

- Degradado azul → oro: interpolado en sRGB pasa por un verde oliva sucio.
- Texto dorado sobre blanco: `#E8BB2F` da 1,8:1. Usa el oro 700 (`#8A660D`).
- Texto blanco sobre oro: el dorado siempre lleva tinta oscura encima.
- El violeta `#614092`: no pertenece a la marca.
- El gris `#959595` como neutro de interfaz: queda reservado al wordmark.

---

## Tema oscuro

Funciona solo: los tokens responden a `prefers-color-scheme`. Para forzarlo, estampa el
atributo en el elemento raíz.

```html
<html data-theme="dark">   <!-- o data-theme="light" -->
```

Los tres estados están cubiertos: elección explícita clara, explícita oscura, y el estado
por defecto del sistema sin estampar.

---

## Tipografía

Las tres familias son pilas del sistema: cargan al instante y no dependen de un CDN. Para
usar una fuente propia en un proyecto, basta redefinir las variables — todo el sistema la
adopta.

```css
:root {
  --taz-font-display: "Tu fuente", sans-serif;
  --taz-font-body:    "Tu fuente", sans-serif;
  --taz-font-mono:    "Tu mono", monospace;
}
```

---

## Logotipos

- `TAZ_LOGO.png` — sobre fondos claros
- `TAZ_LOGO_BLANCO.png` — sobre azul 700 (`#2A4D7C`) o más oscuro

La espiral del sistema (spinner, marca de agua, favicon) es una **abstracción** para
interfaz; no reemplaza al logotipo en material de marca.

---

## Desarrollo

```bash
npm install
npm run storybook        # http://localhost:6006
npm run build-storybook  # compila a storybook-static/
```

Cada push a `main` reconstruye y publica la documentación en GitHub Pages.

### Publicar una versión

```bash
git tag v1.1.0 && git push origin v1.1.0
```

Los proyectos apuntan a un tag, no a `main`, para que un cambio en el sistema no altere
una interfaz en producción sin que alguien lo decida.

---

TazCorp · developers@tazcorp.cl
