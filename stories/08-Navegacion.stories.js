import { ICON, MARCA, nodo, conectar, sidebarHTML, bottomnavHTML, tablaHTML } from './_app.js';

export default {
  title: 'Componentes/Navegación',
  parameters: { controls: { disable: true } },
};

const topbarHTML = ({ collapse = true } = {}) => `
<header class="taz-topbar">
  <button class="taz-btn taz-btn--quiet taz-btn--icon taz-burger" data-burger type="button" aria-label="Abrir menú">${ICON.menu}</button>
  ${collapse ? `<button class="taz-btn taz-btn--quiet taz-btn--icon" data-collapse type="button" aria-label="Reducir menú">${ICON.side}</button>` : ''}
  <span class="taz-topbar__title">Expedientes</span>
  <div class="taz-topbar__search">
    <input class="taz-input" type="search" placeholder="Buscar por rol, RUT o deudor" aria-label="Buscar">
  </div>
  <div class="taz-topbar__actions">
    <button class="taz-btn taz-btn--quiet taz-btn--icon" type="button" aria-label="Avisos">${ICON.bell}</button>
    <button class="taz-btn taz-btn--primary taz-btn--sm" type="button">Nuevo</button>
  </div>
</header>`;

export const Estructura = {
  name: 'Estructura completa',
  parameters: {
    layout: 'fullscreen',
    docs: { description: { story: 'Sobre 900 px el lateral queda anclado y se puede reducir a iconos. Bajo 900 px pasa a cajón con velo y aparece la barra inferior. Cambia el tamaño con el control de viewport de la barra superior.' } },
  },
  render: () => conectar(nodo(`
<div class="taz-shell">
  ${sidebarHTML()}
  ${topbarHTML()}
  <main class="taz-main">
    <div class="taz-main__inner taz-stack">
      <div class="taz-grid" style="grid-template-columns:repeat(auto-fit,minmax(180px,1fr))">
        <div class="taz-card"><div class="taz-card__body">
          <span class="taz-stat__label">Activos</span>
          <div class="taz-stat__value">1.284</div>
          <span class="taz-stat__delta taz-stat__delta--up">▲ 12,4 %</span>
          <div class="taz-meter" style="margin-top:14px"><i style="width:68%"></i></div>
        </div></div>
        <div class="taz-card"><div class="taz-card__body">
          <span class="taz-stat__label">Recuperación</span>
          <div class="taz-stat__value">31,6 %</div>
          <span class="taz-stat__delta taz-muted">promedio del mes</span>
          <div class="taz-meter taz-meter--accent" style="margin-top:14px"><i style="width:31%"></i></div>
        </div></div>
        <div class="taz-card"><div class="taz-card__body">
          <span class="taz-stat__label">Por vencer</span>
          <div class="taz-stat__value">7</div>
          <span class="taz-stat__delta taz-muted">10 días hábiles</span>
          <div class="taz-meter" style="margin-top:14px"><i style="width:22%"></i></div>
        </div></div>
      </div>
      <div class="taz-tabs" role="tablist">
        <button class="taz-tab is-active" type="button">Todos</button>
        <button class="taz-tab" type="button">Vigentes</button>
        <button class="taz-tab" type="button">Por vencer</button>
        <button class="taz-tab" type="button">Cerrados</button>
      </div>
      ${tablaHTML()}
    </div>
  </main>
  ${bottomnavHTML()}
  <div class="taz-overlay"></div>
</div>`)),
};

export const EstructuraMovil = {
  ...Estructura,
  name: 'Estructura en teléfono',
  globals: { viewport: { value: 'movil' } },
  parameters: {
    ...Estructura.parameters,
    docs: { description: { story: 'La misma historia forzada a 390 px: cajón, barra inferior y tabla apilada en fichas.' } },
  },
};

export const MenuLateral = {
  name: 'Menú lateral',
  parameters: { layout: 'fullscreen' },
  render: () => {
    const raiz = conectar(nodo(`
<div class="taz-shell" style="min-height:520px">
  ${sidebarHTML()}
  <header class="taz-topbar">
    <button class="taz-btn taz-btn--quiet taz-btn--icon taz-burger" data-burger type="button" aria-label="Abrir menú">${ICON.menu}</button>
    <button class="taz-btn taz-btn--ghost taz-btn--sm" data-collapse type="button">Reducir a iconos</button>
    <span class="taz-topbar__title" style="margin-left:8px">Menú lateral</span>
  </header>
  <main class="taz-main">
    <div class="taz-main__inner taz-stack">
      <div class="taz-alert taz-alert--info">
        <span class="taz-alert__icon">i</span>
        <div><p class="taz-alert__title">El activo lleva barra dorada</p>
        La misma señal que usa la pestaña activa y el ítem de la barra inferior:
        una sola marca de «estás acá» en los tres ejes de navegación.</div>
      </div>
      <p class="taz-muted" style="margin:0;font-size:14.5px;max-width:60ch">
        Reducido a iconos sobreviven los símbolos y desaparecen las etiquetas y las cifras.
        En móvil la reducción no aplica: el cajón siempre se abre completo, porque un menú
        de solo iconos sobre una pantalla táctil no se entiende.
      </p>
    </div>
  </main>
  <div class="taz-overlay"></div>
</div>`));
    return raiz;
  },
};

export const BarraInferior = {
  name: 'Barra inferior',
  parameters: { layout: 'fullscreen' },
  globals: { viewport: { value: 'movil' } },
  render: () => conectar(nodo(`
<div class="taz-shell" style="min-height:100dvh">
  ${sidebarHTML()}
  <header class="taz-topbar">
    <button class="taz-btn taz-btn--quiet taz-btn--icon taz-burger" data-burger type="button" aria-label="Abrir menú">${ICON.menu}</button>
    <span class="taz-topbar__title">Panel</span>
  </header>
  <main class="taz-main">
    <div class="taz-stack">
      <div class="taz-card"><div class="taz-card__body">
        <span class="taz-stat__label">Expedientes activos</span>
        <div class="taz-stat__value">1.284</div>
        <span class="taz-stat__delta taz-stat__delta--up">▲ 12,4 % vs. julio</span>
      </div></div>
      <p class="taz-muted" style="margin:0;font-size:14px">
        La barra inferior solo existe bajo 900 px. Reserva su alto al final del contenido
        y respeta <code class="taz-mono">env(safe-area-inset-bottom)</code>, así no queda
        bajo la barra gestual del iPhone.
      </p>
    </div>
  </main>
  ${bottomnavHTML()}
  <div class="taz-overlay"></div>
</div>`)),
};

export const BarraSuperior = {
  name: 'Barra superior',
  render: () => nodo(`
<div class="taz-stack">
  <div style="border:1px solid var(--taz-border);border-radius:8px;overflow:hidden">
    ${topbarHTML({ collapse: false })}
  </div>
  <p class="taz-muted" style="margin:0;font-size:14.5px;max-width:64ch">
    El buscador desaparece bajo 900 px: en teléfono el ancho es del título y de la acción
    principal. La búsqueda pasa a la barra inferior o a una pantalla propia, según convenga
    a la aplicación.
  </p>
</div>`),
};
