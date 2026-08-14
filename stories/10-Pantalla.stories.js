import { nodo, conectar, tablaHTML } from './_app.js';

export default {
  title: 'Fundamentos/Adaptación a pantalla',
  parameters: { controls: { disable: true } },
};

export const Reglas = {
  name: 'Reglas',
  parameters: { layout: 'fullscreen' },
  render: () => nodo(`
<div style="max-width:860px;margin:0 auto;padding:24px 20px 56px">
  <span class="taz-eyebrow">Fundamentos</span>
  <h1 class="taz-h1" style="margin-top:6px">Adaptación a pantalla</h1>
  <hr class="taz-rule-accent">
  <p style="margin:18px 0 0;color:var(--taz-text-muted);max-width:64ch">
    Un solo quiebre real, en <b>900 px</b>. Un único punto de corte se puede sostener en el
    tiempo; tres o cuatro terminan contradiciéndose entre sí a los seis meses. Bajo 640 px
    hay un ajuste menor para tipografía de campos y tablas apiladas.
  </p>

  <div class="taz-table-wrap" style="margin-top:26px">
    <table class="taz-table">
      <thead><tr><th>Ancho</th><th>Menú lateral</th><th>Barra inferior</th><th>Tablas</th><th>Diálogo</th></tr></thead>
      <tbody>
        <tr>
          <td class="taz-mono">≥ 900</td><td>Anclado, reducible a iconos</td>
          <td class="taz-muted">no aparece</td><td>Columnas</td><td>Centrado</td>
        </tr>
        <tr>
          <td class="taz-mono">640–899</td><td>Cajón con velo</td>
          <td>Fija abajo</td><td>Columnas con desborde</td><td>Centrado</td>
        </tr>
        <tr>
          <td class="taz-mono">&lt; 640</td><td>Cajón con velo</td>
          <td>Fija abajo</td><td>Fichas apiladas</td><td>Hoja inferior</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2 class="taz-h2" style="margin-top:38px">Cuatro correcciones que no son cosméticas</h2>
  <div class="taz-stack" style="margin-top:16px">
    <div class="taz-alert taz-alert--warning">
      <span class="taz-alert__icon">1</span>
      <div><p class="taz-alert__title">Los campos suben a 16 px bajo 640 px</p>
      Safari en iOS hace zoom sobre cualquier campo con texto menor a 16 px y después no
      vuelve al tamaño original. Es la causa más común de que un formulario «se descuadre»
      en iPhone.</div>
    </div>
    <div class="taz-alert taz-alert--warning">
      <span class="taz-alert__icon">2</span>
      <div><p class="taz-alert__title"><code class="taz-mono">100dvh</code> y no <code class="taz-mono">100vh</code></p>
      En móvil la barra de direcciones cambia de alto al hacer scroll. Con <code class="taz-mono">vh</code>
      la pantalla salta varios píxeles en cada gesto.</div>
    </div>
    <div class="taz-alert taz-alert--info">
      <span class="taz-alert__icon">3</span>
      <div><p class="taz-alert__title">Objetivos de 44 px solo al tacto</p>
      Los controles crecen bajo <code class="taz-mono">@media (pointer: coarse)</code>, así que
      la interfaz de escritorio no engorda por culpa del celular.</div>
    </div>
    <div class="taz-alert taz-alert--info">
      <span class="taz-alert__icon">4</span>
      <div><p class="taz-alert__title">Zonas seguras</p>
      La barra inferior y el pie del diálogo suman <code class="taz-mono">env(safe-area-inset-bottom)</code>,
      para no quedar bajo la barra gestual del iPhone.</div>
    </div>
  </div>
</div>`),
};

export const TablaApilada = {
  name: 'Tabla apilada',
  globals: { viewport: { value: 'movil' } },
  parameters: {
    docs: { description: { story: 'Con .taz-table--stack cada fila pasa a ficha bajo 640 px y el encabezado se traslada a cada celda vía data-label. Comprimir seis columnas en 390 px no se lee.' } },
  },
  render: () => conectar(nodo(`
<div class="taz-stack">
  ${tablaHTML()}
  <p class="taz-muted" style="margin:0;font-size:14px">
    Requiere marcar cada celda:<br>
    <code class="taz-mono" style="font-size:12.5px">&lt;td data-label="Pasivo" class="taz-num"&gt;$ 184.320.500&lt;/td&gt;</code>
  </p>
</div>`)),
};

export const TablaEnEscritorio = {
  ...TablaApilada,
  name: 'La misma tabla en escritorio',
  globals: { viewport: { value: 'escritorio' } },
  parameters: {
    docs: { description: { story: 'Idéntico marcado sobre 640 px: los data-label quedan inertes y la tabla vuelve a ser una tabla.' } },
  },
};
