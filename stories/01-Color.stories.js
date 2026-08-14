export default {
  title: 'Fundamentos/Color',
  parameters: { layout: 'fullscreen', options: { showPanel: false } },
};

const STEPS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

const SCALES = {
  Azul: {
    hint: 'El 500 es el color del logotipo. Para texto sobre blanco usa el 600.',
    logoAt: 5,
    colors: ['#f1f5fb', '#dee9f5', '#bfd2ea', '#97b4da', '#6c94c8', '#4477b7', '#35619b', '#2a4d7c', '#21395b', '#17273d'],
  },
  Oro: {
    hint: 'El color del logotipo cae en el 400 porque es claro. El 700 es el único apto para texto.',
    logoAt: 4,
    colors: ['#fdf8e9', '#faefc7', '#f5df8e', '#efcd57', '#e8bb2f', '#d3a61c', '#b08615', '#8a660d', '#664a0a', '#443106'],
  },
  Pizarra: {
    hint: 'Neutro frío con sesgo hacia el azul: fondos, bordes y texto secundario.',
    logoAt: -1,
    colors: ['#f7f8fa', '#edeff3', '#dde1e8', '#c3c9d3', '#94a0af', '#6c7788', '#525c6b', '#3d4551', '#2a313a', '#1a1f26'],
  },
};

// Contraste WCAG 2.1, calculado en vivo para que la documentación no pueda
// quedar desfasada de los valores reales.
const lin = (c) => (c /= 255) <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
const lum = (hex) => {
  const n = parseInt(hex.slice(1), 16);
  return 0.2126 * lin((n >> 16) & 255) + 0.7152 * lin((n >> 8) & 255) + 0.0722 * lin(n & 255);
};
const ratio = (a, b) => {
  const [hi, lo] = [lum(a), lum(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};

const swatch = (hex, step, isLogo) => {
  const onWhite = ratio(hex, '#ffffff');
  const onInk = ratio(hex, '#131820');
  const useWhite = onWhite >= onInk;
  return `
    <div style="border-radius:6px;overflow:hidden;position:relative">
      <div style="height:76px;padding:8px;display:flex;flex-direction:column;justify-content:space-between;background:${hex};color:${useWhite ? '#fff' : '#131820'}">
        <span style="font-family:var(--taz-font-mono);font-size:11px;font-weight:600;opacity:.9">${step}</span>
        <span style="font-family:var(--taz-font-mono);font-size:10px;opacity:.78;font-variant-numeric:tabular-nums">${Math.max(onWhite, onInk).toFixed(1)}:1</span>
      </div>
      ${isLogo ? '<span style="position:absolute;top:8px;right:8px;font-family:var(--taz-font-mono);font-size:9px;letter-spacing:.1em;background:#fff;color:#1a1f26;padding:2px 5px;border-radius:2px">LOGO</span>' : ''}
      <span style="display:block;padding:5px 2px 0;font-family:var(--taz-font-mono);font-size:11px;text-transform:uppercase;color:var(--taz-text-muted)">${hex}</span>
    </div>`;
};

export const Escalas = {
  name: 'Escalas',
  render: () => `
<div style="max-width:1000px;margin:0 auto;padding:12px 8px 56px">
  <span class="taz-eyebrow">Fundamentos</span>
  <h1 class="taz-h1" style="margin-top:6px">Escalas de color</h1>
  <p style="margin:12px 0 0;max-width:64ch;color:var(--taz-text-muted)">
    Los tres colores base salen del conteo de píxeles del logotipo oficial:
    azul <span class="taz-mono">#4477B7</span> (14,4 %), oro <span class="taz-mono">#E8BB2F</span> (8,5 %)
    y el gris del wordmark <span class="taz-mono">#959595</span> (75,3 %).
    Cada muestra indica su contraste real contra el texto que lleva encima.
  </p>
  ${Object.entries(SCALES).map(([name, s]) => `
    <div style="margin-top:34px">
      <div class="taz-row" style="gap:12px;align-items:baseline">
        <h2 class="taz-h3">${name}</h2>
        <span style="font-size:13.5px;color:var(--taz-text-muted)">${s.hint}</span>
      </div>
      <div style="display:grid;grid-template-columns:repeat(10,1fr);gap:6px;margin-top:10px">
        ${s.colors.map((c, i) => swatch(c, STEPS[i], i === s.logoAt)).join('')}
      </div>
    </div>`).join('')}

  <div style="margin-top:40px">
    <h2 class="taz-h3">Semánticos</h2>
    <p style="margin:6px 0 0;font-size:13.5px;color:var(--taz-text-muted);max-width:64ch">
      La advertencia es naranja y no dorada a propósito: si «advertencia» y «marca»
      comparten color, el acento pierde significado.
    </p>
    <div class="taz-grid" style="margin-top:14px">
      ${[
        ['Éxito', '#2e9e6b', '#1f7d52', '#e8f6ef'],
        ['Advertencia', '#d9622b', '#a8471a', '#fdeee5'],
        ['Error', '#c93a38', '#a82f2d', '#fbebeb'],
        ['Información', '#2c8ba8', '#1f6b83', '#e7f3f7'],
      ].map(([n, fill, text, bg]) => `
        <div class="taz-card"><div class="taz-card__body">
          <div style="width:34px;height:34px;border-radius:5px;background:${fill};margin-bottom:12px"></div>
          <h3 class="taz-h3" style="font-size:16px">${n}</h3>
          <div class="taz-mono" style="font-size:12px;color:var(--taz-text-muted);line-height:1.9;margin-top:4px">
            <span style="color:var(--taz-text)">${fill.toUpperCase()}</span> relleno<br>
            <span style="color:var(--taz-text)">${text.toUpperCase()}</span> texto<br>
            <span style="color:var(--taz-text)">${bg.toUpperCase()}</span> fondo suave
          </div>
        </div></div>`).join('')}
    </div>
  </div>

  <div style="margin-top:40px">
    <h2 class="taz-h3">Proporción 60 / 30 / 10</h2>
    <div style="display:flex;height:56px;border-radius:6px;overflow:hidden;border:1px solid var(--taz-border);margin-top:12px">
      <div style="flex:60;background:var(--taz-bg-subtle);color:var(--taz-text-muted);display:flex;align-items:center;justify-content:center;font-family:var(--taz-font-mono);font-size:11px;letter-spacing:.06em">60 · neutro</div>
      <div style="flex:30;background:#4477b7;color:#fff;display:flex;align-items:center;justify-content:center;font-family:var(--taz-font-mono);font-size:11px;letter-spacing:.06em">30 · azul</div>
      <div style="flex:10;background:#e8bb2f;color:#1a1f26;display:flex;align-items:center;justify-content:center;font-family:var(--taz-font-mono);font-size:11px;letter-spacing:.06em">10</div>
    </div>
  </div>

  <div style="margin-top:40px">
    <h2 class="taz-h3">Prohibiciones</h2>
    <ul style="margin:12px 0 0;padding-left:20px;font-size:14.5px;line-height:1.9">
      <li><b>Degradado azul → oro.</b> Interpolado en sRGB pasa por un verde oliva sucio. Si hace falta, usa azul 600 → azul 400.</li>
      <li><b>Texto dorado sobre blanco.</b> <span class="taz-mono">#E8BB2F</span> da 1,8:1. Usa el oro 700.</li>
      <li><b>Texto blanco sobre oro.</b> El dorado siempre lleva tinta oscura encima.</li>
      <li><b>El violeta <span class="taz-mono">#614092</span></b> de la plantilla del sitio. No pertenece a la marca.</li>
      <li><b>El gris <span class="taz-mono">#959595</span> como neutro de interfaz.</b> Queda reservado al wordmark.</li>
    </ul>
  </div>
</div>`,
};
