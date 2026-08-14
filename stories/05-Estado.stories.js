export default {
  title: 'Componentes/Estado',
  parameters: { controls: { disable: true } },
};

export const Insignias = {
  name: 'Insignias',
  render: () => `
<div class="taz-stack">
  <div>
    <span class="taz-eyebrow">Con punto de estado</span>
    <div class="taz-row" style="margin-top:10px">
      <span class="taz-badge taz-badge--success"><i class="taz-dot"></i>Vigente</span>
      <span class="taz-badge taz-badge--warning"><i class="taz-dot"></i>Por vencer</span>
      <span class="taz-badge taz-badge--danger"><i class="taz-dot"></i>Rechazado</span>
      <span class="taz-badge taz-badge--info"><i class="taz-dot"></i>En revisión</span>
    </div>
  </div>
  <div>
    <span class="taz-eyebrow">Neutra y de marca</span>
    <div class="taz-row" style="margin-top:10px">
      <span class="taz-badge">Borrador</span>
      <span class="taz-badge taz-badge--brand">14 acreedores</span>
      <span class="taz-badge taz-badge--accent">Destacado</span>
    </div>
  </div>
</div>`,
};

export const Alertas = {
  name: 'Alertas',
  render: () => `
<div class="taz-stack" style="max-width:680px">
  <div class="taz-alert taz-alert--info">
    <span class="taz-alert__icon">i</span>
    <div><p class="taz-alert__title">Junta de acreedores agendada</p>Se notificó a 14 acreedores el 12-08-2026.</div>
  </div>
  <div class="taz-alert taz-alert--warning">
    <span class="taz-alert__icon">!</span>
    <div><p class="taz-alert__title">Plazo próximo a vencer</p>Quedan 6 días hábiles para acompañar el inventario.</div>
  </div>
  <div class="taz-alert taz-alert--danger">
    <span class="taz-alert__icon">×</span>
    <div><p class="taz-alert__title">Verificación rechazada</p>El crédito N.º 12 no acreditó título ejecutivo.</div>
  </div>
  <div class="taz-alert taz-alert--success">
    <span class="taz-alert__icon">✓</span>
    <div><p class="taz-alert__title">Informe emitido</p>Se generó el informe final y quedó disponible para descarga.</div>
  </div>
</div>`,
};

export const Pestanas = {
  name: 'Pestañas',
  render: () => `
<div style="max-width:680px">
  <div class="taz-tabs" role="tablist">
    <button class="taz-tab is-active" type="button" role="tab" aria-selected="true">Resumen</button>
    <button class="taz-tab" type="button" role="tab" aria-selected="false">Acreedores</button>
    <button class="taz-tab" type="button" role="tab" aria-selected="false">Bienes</button>
    <button class="taz-tab" type="button" role="tab" aria-selected="false">Juntas</button>
    <button class="taz-tab" type="button" role="tab" aria-selected="false">Documentos</button>
  </div>
  <p style="margin:20px 0 0;font-size:14.5px;color:var(--taz-text-muted);max-width:60ch">
    El indicador dorado de la pestaña activa es donde la marca se hace visible en pantallas
    densas sin invadir el resto de la interfaz. El cambio de pestaña lo maneja el framework;
    el CSS solo aporta la clase <code class="taz-mono">.is-active</code>.
  </p>
</div>`,
};
