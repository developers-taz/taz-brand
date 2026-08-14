/* Piezas compartidas por las historias de estructura y avisos. */

export const ICON = {
  panel: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',
  folder: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',
  users: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="9" cy="8" r="3.2"/><path d="M3 20a6 6 0 0 1 12 0"/><path d="M16 5.5a3 3 0 0 1 0 5.4M17 20a6 6 0 0 0-2-4.4"/></svg>',
  cal: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>',
  doc: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/></svg>',
  chart: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>',
  cog: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1"/></svg>',
  menu: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  bell: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 15v-4a6 6 0 1 0-12 0v4l-1.6 3h15.2z"/><path d="M10 21h4"/></svg>',
  side: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16"/></svg>',
};

export const MARCA = `
<svg width="24" height="24" viewBox="0 0 100 100" aria-hidden="true">
  <g fill="none" stroke-linecap="round">
    <circle cx="50" cy="50" r="42" stroke="#4477b7" stroke-width="7" pathLength="100" stroke-dasharray="76 24" transform="rotate(-95 50 50)"/>
    <circle cx="50" cy="50" r="29" stroke="#e8bb2f" stroke-width="9" pathLength="100" stroke-dasharray="60 40" transform="rotate(55 50 50)"/>
  </g>
  <circle cx="50" cy="50" r="11" fill="#4477b7"/>
</svg>`;

export const NAV = [
  ['panel', 'Panel', '', true],
  ['folder', 'Expedientes', '37', false],
  ['users', 'Acreedores', '', false],
  ['cal', 'Juntas', '3', false],
  ['doc', 'Documentos', '', false],
  ['chart', 'Informes', '', false],
];

export const FILAS = [
  ['C-1842-2026', 'Comercial Andes Ltda.', '184.320.500', 'success', 'Vigente'],
  ['C-0937-2026', 'Transportes Bío Sur SpA', '61.940.000', 'warning', 'Por vencer'],
  ['C-0455-2026', 'Inversiones Traiguén', '9.870.400', 'danger', 'Rechazado'],
  ['C-2201-2026', 'Agrícola Las Lomas', '402.115.980', 'info', 'En revisión'],
];

/** Convierte una plantilla en un nodo del DOM. */
export function nodo(html) {
  const caja = document.createElement('div');
  caja.innerHTML = html.trim();
  return caja.children.length === 1 ? caja.firstElementChild : caja;
}

export const sidebarHTML = () => `
<aside class="taz-sidebar" data-sidebar>
  <div class="taz-sidebar__brand">${MARCA}<span>Concursa</span></div>
  <div class="taz-sidebar__group">Operación</div>
  ${NAV.map(([ic, label, badge, activo]) => `
    <button class="taz-navitem${activo ? ' is-active' : ''}" type="button" data-nav>
      <span class="taz-navitem__icon">${ICON[ic]}</span>
      <span class="taz-navitem__label">${label}</span>
      ${badge ? `<span class="taz-navitem__badge">${badge}</span>` : ''}
    </button>`).join('')}
  <div class="taz-sidebar__foot">
    <button class="taz-navitem" type="button">
      <span class="taz-navitem__icon">${ICON.cog}</span>
      <span class="taz-navitem__label">Configuración</span>
    </button>
  </div>
</aside>`;

export const bottomnavHTML = () => `
<nav class="taz-bottomnav">
  <button class="taz-bottomnav__item is-active" type="button" data-bottom>
    <span>${ICON.panel}</span><span class="taz-bottomnav__label">Panel</span>
  </button>
  <button class="taz-bottomnav__item" type="button" data-bottom>
    <span>${ICON.folder}</span><span class="taz-bottomnav__label">Expedientes</span>
  </button>
  <button class="taz-bottomnav__item" type="button" data-bottom>
    <span>${ICON.cal}</span><span class="taz-bottomnav__label">Juntas</span>
    <span class="taz-bottomnav__dot"></span>
  </button>
  <button class="taz-bottomnav__item" type="button" data-bottom>
    <span>${ICON.chart}</span><span class="taz-bottomnav__label">Informes</span>
  </button>
</nav>`;

export const tablaHTML = () => `
<div class="taz-table-wrap">
  <table class="taz-table taz-table--hover taz-table--stack">
    <thead><tr>
      <th style="width:36px"></th><th>Expediente</th><th>Deudor</th>
      <th class="taz-num">Pasivo</th><th>Estado</th>
    </tr></thead>
    <tbody>
      ${FILAS.map(([rol, deudor, monto, tono, estado], i) => `
      <tr${i === 0 ? ' class="is-selected"' : ''}>
        <td data-label="Sel."><label class="taz-check"><input type="checkbox"${i === 0 ? ' checked' : ''} aria-label="Seleccionar ${rol}"></label></td>
        <td data-label="Expediente" class="taz-mono">${rol}</td>
        <td data-label="Deudor">${deudor}</td>
        <td data-label="Pasivo" class="taz-num">$ ${monto}</td>
        <td data-label="Estado"><span class="taz-badge taz-badge--${tono}"><i class="taz-dot"></i>${estado}</span></td>
      </tr>`).join('')}
    </tbody>
    <tfoot><tr>
      <td colspan="3">Pasivo total</td><td class="taz-num" colspan="2">$ 658.246.880</td>
    </tr></tfoot>
  </table>
</div>`;

const TONOS = {
  success: ['✓', 'Informe emitido', 'El informe final quedó disponible para descarga.'],
  warning: ['!', 'Plazo próximo a vencer', 'Quedan 6 días hábiles para acompañar el inventario.'],
  danger: ['×', 'Verificación rechazada', 'El crédito N.º 12 no acreditó título ejecutivo.'],
  info: ['i', 'Junta agendada', 'Se notificó a 14 acreedores el 12-08-2026.'],
};

/**
 * Levanta un mensaje emergente dentro del contenedor indicado.
 * El montaje y el desmontaje los decide la aplicación; el paquete solo aporta
 * las clases. Esto es la demostración mínima de ese contrato.
 */
export function avisar(contenedor, tono, ms = 5000) {
  const [icono, titulo, cuerpo] = TONOS[tono];
  const el = nodo(`
    <div class="taz-toast taz-toast--${tono}" role="${tono === 'danger' ? 'alert' : 'status'}">
      <span class="taz-toast__icon">${icono}</span>
      <div>
        <p class="taz-toast__title">${titulo}</p>
        <div class="taz-toast__body">${cuerpo}</div>
      </div>
      <button class="taz-toast__close" type="button" aria-label="Cerrar">×</button>
    </div>`);
  const quitar = () => {
    el.classList.add('is-leaving');
    el.addEventListener('animationend', () => el.remove(), { once: true });
    setTimeout(() => el.remove(), 400);
  };
  el.querySelector('.taz-toast__close').addEventListener('click', quitar);
  contenedor.appendChild(el);
  if (ms) setTimeout(quitar, ms);
  return el;
}

/** Conecta el comportamiento común: cajón, reducción, activos y selección. */
export function conectar(raiz) {
  const shell = raiz.querySelector('.taz-shell') || raiz;
  const sidebar = raiz.querySelector('[data-sidebar]');
  const overlay = raiz.querySelector('.taz-overlay');
  const burger = raiz.querySelector('[data-burger]');
  const collapse = raiz.querySelector('[data-collapse]');

  const cajon = (v) => {
    sidebar?.classList.toggle('is-open', v);
    overlay?.classList.toggle('is-open', v);
  };
  burger?.addEventListener('click', () => cajon(!sidebar.classList.contains('is-open')));
  overlay?.addEventListener('click', () => cajon(false));
  collapse?.addEventListener('click', () => shell.classList.toggle('taz-shell--collapsed'));

  const grupo = (sel, activa) => raiz.querySelectorAll(sel).forEach((b) =>
    b.addEventListener('click', () => {
      raiz.querySelectorAll(sel).forEach((x) => x.classList.remove('is-active'));
      b.classList.add('is-active');
      if (activa) activa();
    }));
  grupo('[data-nav]', () => cajon(false));
  grupo('[data-bottom]');
  grupo('.taz-tab');

  raiz.querySelectorAll('.taz-table tbody input[type="checkbox"]').forEach((box) =>
    box.addEventListener('change', () =>
      box.closest('tr').classList.toggle('is-selected', box.checked)));

  return raiz;
}
