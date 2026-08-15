/**
 * La espiral de Taz como SVG. Es una abstracción del isotipo pensada para
 * interfaz (spinner, marca de agua, favicon); no reemplaza al logotipo
 * oficial en material de marca.
 *
 * El desfase de cada arco va en `stroke-dashoffset` y NO en un atributo
 * `transform`: si el SVG trae `transform="rotate(...)"` y la animación
 * escribe `transform` por CSS, el CSS gana y el arco salta al arrancar.
 *
 * @param {number} size  lado en píxeles
 * @param {{ spin?: boolean, mono?: boolean, ritmo?: '' | 'slow' | 'fast' }} opts
 *        spin:  los dos arcos giran en sentidos opuestos, a distinto período
 *        mono:  usa currentColor en vez de azul y oro
 *        ritmo: velocidad del giro
 */
export function spiral(size = 48, { spin = false, mono = false, ritmo = '' } = {}) {
  const outer = mono ? 'currentColor' : '#4477b7';
  const inner = mono ? 'currentColor' : '#e8bb2f';
  const core = mono ? 'currentColor' : '#4477b7';
  const clase = ['taz-spinner', ritmo ? `taz-spinner--${ritmo}` : ''].filter(Boolean).join(' ');
  return `
<svg class="${clase}" width="${size}" height="${size}" viewBox="0 0 100 100" role="img" aria-label="Taz">
  <g fill="none" stroke-linecap="round">
    <circle class="${spin ? 'taz-spinner__outer' : ''}" cx="50" cy="50" r="42"
            stroke="${outer}" stroke-width="7" pathLength="100"
            stroke-dasharray="76 24" stroke-dashoffset="26"/>
    <circle class="${spin ? 'taz-spinner__inner' : ''}" cx="50" cy="50" r="29"
            stroke="${inner}" stroke-width="9" pathLength="100"
            stroke-dasharray="60 40" stroke-dashoffset="85"/>
  </g>
  <circle cx="50" cy="50" r="11" fill="${core}"/>
</svg>`;
}
