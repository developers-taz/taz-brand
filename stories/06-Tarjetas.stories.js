export default {
  title: 'Componentes/Tarjetas',
  parameters: { controls: { disable: true } },
};

export const Metricas = {
  name: 'Métricas',
  render: () => `
<div class="taz-grid" style="grid-template-columns:repeat(auto-fit,minmax(240px,1fr))">
  <div class="taz-card"><div class="taz-card__body">
    <span class="taz-stat__label">Expedientes activos</span>
    <div class="taz-stat__value">1.284</div>
    <span class="taz-stat__delta taz-stat__delta--up">▲ 12,4 % vs. julio</span>
    <div class="taz-meter" style="margin-top:16px"><i style="width:68%"></i></div>
  </div></div>
  <div class="taz-card"><div class="taz-card__body">
    <span class="taz-stat__label">Recuperación promedio</span>
    <div class="taz-stat__value">31,6 %</div>
    <span class="taz-stat__delta taz-stat__delta--down">▼ 2,1 % vs. julio</span>
    <div class="taz-meter taz-meter--accent" style="margin-top:16px"><i style="width:31%"></i></div>
  </div></div>
  <div class="taz-card"><div class="taz-card__body">
    <span class="taz-stat__label">Plazos por vencer</span>
    <div class="taz-stat__value">7</div>
    <span class="taz-stat__delta">en los próximos 10 días hábiles</span>
    <div class="taz-meter" style="margin-top:16px"><i style="width:22%"></i></div>
  </div></div>
</div>`,
};

export const ConCabeceraYPie = {
  name: 'Con cabecera y pie',
  render: () => `
<div class="taz-card" style="max-width:480px">
  <div class="taz-card__head">
    <h3 class="taz-h3">Junta ordinaria</h3>
    <span class="taz-badge taz-badge--brand">14 acreedores</span>
  </div>
  <div class="taz-card__body" style="font-size:14.5px">
    Citación notificada el 12-08-2026. El acta debe subirse dentro de los tres días hábiles
    siguientes a la celebración.
  </div>
  <div class="taz-card__foot">
    <button class="taz-btn taz-btn--ghost taz-btn--sm" type="button">Ver citación</button>
    <button class="taz-btn taz-btn--primary taz-btn--sm" type="button">Subir acta</button>
  </div>
</div>`,
};

export const Tipografia = {
  name: 'Tipografía',
  render: () => `
<div style="max-width:640px">
  <span class="taz-eyebrow">Eyebrow · mono 11px · tracking .14em</span>
  <h1 class="taz-h1" style="margin-top:8px">Título de página</h1>
  <hr class="taz-rule-accent">
  <h2 class="taz-h2" style="margin-top:28px">Título de sección</h2>
  <h3 class="taz-h3" style="margin-top:20px">Título de bloque</h3>
  <p style="margin:14px 0 0;font-size:15px">
    Texto corrido a 15 px con interlineado 1,6. La medida se mantiene cerca de los 65
    caracteres para que la lectura no se canse. <a class="taz-link" href="#">Así se ve un enlace</a>
    dentro del párrafo, y <span class="taz-mono">así el monoespaciado</span> para datos.
  </p>
  <p class="taz-muted" style="margin:12px 0 0;font-size:14px">
    Texto secundario para acotaciones y ayudas.
  </p>
  <div class="taz-card" style="margin-top:24px"><div class="taz-card__body">
    <p style="margin:0;font-size:14.5px">Las tres familias son pilas del sistema: cargan al instante
    y no dependen de un CDN. Si un proyecto incorpora una fuente propia, basta redefinir
    <code class="taz-mono">--taz-font-display</code>, <code class="taz-mono">--taz-font-body</code>
    y <code class="taz-mono">--taz-font-mono</code>: todo el sistema la adopta.</p>
  </div></div>
</div>`,
};
