/**
 * La espiral de Taz como SVG. Es una abstracción del isotipo pensada para
 * interfaz (spinner, marca de agua, favicon); no reemplaza al logotipo
 * oficial en material de marca.
 *
 * @param {number} size  lado en píxeles
 * @param {{ spin?: boolean, mono?: boolean }} opts
 *        spin: los dos arcos giran en sentidos opuestos
 *        mono: usa currentColor en vez de azul y oro
 */
export function spiral(size = 48, { spin = false, mono = false } = {}) {
  const outer = mono ? 'currentColor' : '#4477b7';
  const inner = mono ? 'currentColor' : '#e8bb2f';
  const core = mono ? 'currentColor' : '#4477b7';
  return `
<svg class="taz-spinner" width="${size}" height="${size}" viewBox="0 0 100 100" role="img" aria-label="Taz">
  <g fill="none" stroke-linecap="round">
    <circle class="${spin ? 'taz-spinner__outer' : ''}" cx="50" cy="50" r="42"
            stroke="${outer}" stroke-width="7" pathLength="100"
            stroke-dasharray="76 24" transform="rotate(-95 50 50)"/>
    <circle class="${spin ? 'taz-spinner__inner' : ''}" cx="50" cy="50" r="29"
            stroke="${inner}" stroke-width="9" pathLength="100"
            stroke-dasharray="60 40" transform="rotate(55 50 50)"/>
  </g>
  <circle cx="50" cy="50" r="11" fill="${core}"/>
</svg>`;
}
