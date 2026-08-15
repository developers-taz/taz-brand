import { ICON, nodo } from './_app.js';

export default {
  title: 'Componentes/Menús y tooltips',
  parameters: { controls: { disable: true } },
};

const ITEM = (icono, texto, extra = '') => `
  <button class="taz-menu__item${extra.includes('danger') ? ' taz-menu__item--danger' : ''}" type="button" ${extra.includes('disabled') ? 'aria-disabled="true"' : ''}>
    <span class="taz-menu__icon">${icono}</span>${texto}
  </button>`;

export const MenuDesplegable = {
  name: 'Menú desplegable',
  parameters: {
    docs: { description: { story: 'La aplicación alterna .is-open en el menú y aria-expanded en el disparador. El paquete aporta apariencia y posición. Ojo: al ser un hijo posicionado, un ancestro con overflow:hidden lo recorta.' } },
  },
  render: () => {
    const raiz = nodo(`
<div class="taz-stack" style="min-height:280px">
  <div class="taz-row">
    <div class="taz-dropdown">
      <button class="taz-btn taz-btn--ghost" type="button" aria-haspopup="menu" aria-expanded="false" data-trigger>
        Acciones
        <svg width="12" height="12" viewBox="0 0 12 8" fill="none" aria-hidden="true"><path d="M1 1.5 6 6.5 11 1.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
      <div class="taz-menu" role="menu" data-menu>
        <div class="taz-menu__label">Expediente</div>
        ${ITEM(ICON.doc, 'Ver detalle')}
        ${ITEM(ICON.chart, 'Generar informe')}
        <button class="taz-menu__item" type="button">
          <span class="taz-menu__icon">${ICON.folder}</span>Duplicar
          <span class="taz-menu__hint">Ctrl D</span>
        </button>
        <hr class="taz-menu__sep">
        ${ITEM(ICON.users, 'Reasignar liquidador', 'disabled')}
        ${ITEM(ICON.cog, 'Eliminar expediente', 'danger')}
      </div>
    </div>

    <div class="taz-dropdown">
      <button class="taz-btn taz-btn--quiet taz-btn--icon" type="button" aria-haspopup="menu" aria-expanded="false" aria-label="Más opciones" data-trigger>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="12" cy="5" r="1.8"/><circle cx="12" cy="12" r="1.8"/><circle cx="12" cy="19" r="1.8"/></svg>
      </button>
      <div class="taz-menu taz-menu--right" role="menu" data-menu>
        <button class="taz-menu__item is-active" type="button">Ordenar por fecha</button>
        <button class="taz-menu__item" type="button">Ordenar por pasivo</button>
        <button class="taz-menu__item" type="button">Ordenar por deudor</button>
      </div>
    </div>
  </div>

  <p class="taz-muted" style="margin:0;font-size:14.5px;max-width:62ch">
    Variantes de posición: <code class="taz-mono">.taz-menu--right</code> lo alinea al borde
    derecho del disparador y <code class="taz-mono">.taz-menu--up</code> lo abre hacia arriba,
    que es lo que corresponde en las últimas filas de una tabla.
  </p>
</div>`);

    const cerrarTodos = () => raiz.querySelectorAll('[data-menu]').forEach((m) => {
      m.classList.remove('is-open');
      m.previousElementSibling?.setAttribute('aria-expanded', 'false');
    });

    raiz.querySelectorAll('[data-trigger]').forEach((b) =>
      b.addEventListener('click', (e) => {
        e.stopPropagation();
        const menu = b.nextElementSibling;
        const abierto = menu.classList.contains('is-open');
        cerrarTodos();
        if (!abierto) {
          menu.classList.add('is-open');
          b.setAttribute('aria-expanded', 'true');
        }
      }));

    document.addEventListener('click', cerrarTodos);
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') cerrarTodos(); });
    return raiz;
  },
};

export const EnUnaTabla = {
  name: 'Menú dentro de una tabla',
  parameters: {
    docs: { description: { story: 'El caso real: acciones por fila. El contenedor de la tabla lleva overflow visible y las últimas filas abren hacia arriba, o el menú queda recortado.' } },
  },
  render: () => {
    const filas = [
      ['C-1842-2026', 'Comercial Andes Ltda.', '184.320.500', 'success', 'Vigente'],
      ['C-0937-2026', 'Transportes Bío Sur SpA', '61.940.000', 'warning', 'Por vencer'],
      ['C-0455-2026', 'Inversiones Traiguén', '9.870.400', 'danger', 'Rechazado'],
    ];
    const raiz = nodo(`
<div class="taz-stack">
  <div class="taz-table-wrap" style="overflow:visible">
    <table class="taz-table taz-table--hover">
      <thead><tr>
        <th>Expediente</th><th>Deudor</th><th class="taz-num">Pasivo</th><th>Estado</th>
        <th style="width:48px"><span class="taz-sr-only">Acciones</span></th>
      </tr></thead>
      <tbody>
        ${filas.map(([rol, deudor, monto, tono, estado], i) => `
        <tr>
          <td class="taz-mono">${rol}</td>
          <td>${deudor}</td>
          <td class="taz-num">$ ${monto}</td>
          <td><span class="taz-badge taz-badge--${tono}"><i class="taz-dot"></i>${estado}</span></td>
          <td>
            <div class="taz-dropdown">
              <button class="taz-btn taz-btn--quiet taz-btn--icon taz-btn--sm" type="button"
                      aria-haspopup="menu" aria-expanded="false" aria-label="Acciones de ${rol}" data-trigger>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="12" cy="5" r="1.8"/><circle cx="12" cy="12" r="1.8"/><circle cx="12" cy="19" r="1.8"/></svg>
              </button>
              <div class="taz-menu taz-menu--right${i === filas.length - 1 ? ' taz-menu--up' : ''}" role="menu" data-menu>
                <button class="taz-menu__item" type="button">Ver detalle</button>
                <button class="taz-menu__item" type="button">Generar informe</button>
                <hr class="taz-menu__sep">
                <button class="taz-menu__item taz-menu__item--danger" type="button">Eliminar</button>
              </div>
            </div>
          </td>
        </tr>`).join('')}
      </tbody>
    </table>
  </div>
  <p class="taz-muted" style="margin:0;font-size:14px">
    La última fila usa <code class="taz-mono">.taz-menu--up</code>. La columna de acciones
    lleva un <code class="taz-mono">.taz-sr-only</code> en el encabezado: sin él, un lector
    de pantalla anuncia una columna sin nombre.
  </p>
</div>`);

    const cerrarTodos = () => raiz.querySelectorAll('[data-menu]').forEach((m) => {
      m.classList.remove('is-open');
      m.previousElementSibling?.setAttribute('aria-expanded', 'false');
    });
    raiz.querySelectorAll('[data-trigger]').forEach((b) =>
      b.addEventListener('click', (e) => {
        e.stopPropagation();
        const menu = b.nextElementSibling;
        const abierto = menu.classList.contains('is-open');
        cerrarTodos();
        if (!abierto) { menu.classList.add('is-open'); b.setAttribute('aria-expanded', 'true'); }
      }));
    document.addEventListener('click', cerrarTodos);
    return raiz;
  },
};

export const Tooltips = {
  name: 'Tooltips',
  parameters: {
    docs: { description: { story: 'El texto de data-tip es contenido generado por CSS y ningún lector de pantalla lo anuncia: la descripción accesible va aparte en aria-label o aria-describedby. En pantallas táctiles el tooltip se oculta, porque con el dedo no existe el «pasar por encima».' } },
  },
  render: () => nodo(`
<div class="taz-stack" style="padding-top:56px">
  <div class="taz-row" style="gap:16px">
    <button class="taz-btn taz-btn--quiet taz-btn--icon taz-tip" type="button"
            data-tip="Descargar informe final" aria-label="Descargar informe final">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3v12M7 11l5 5 5-5M4 20h16"/></svg>
    </button>
    <button class="taz-btn taz-btn--ghost taz-tip" type="button"
            data-tip="Se notificará a los 14 acreedores verificados"
            aria-describedby="d1">Cerrar expediente</button>
    <span class="taz-sr-only" id="d1">Se notificará a los 14 acreedores verificados</span>
    <button class="taz-btn taz-btn--ghost taz-tip taz-tip--bottom" type="button"
            data-tip="Abre hacia abajo" aria-label="Ejemplo de tooltip inferior">Abajo</button>
    <button class="taz-btn taz-btn--ghost taz-tip taz-tip--instant" type="button"
            data-tip="Sin retardo de aparición" aria-label="Ejemplo de tooltip instantáneo">Instantáneo</button>
  </div>

  <div class="taz-row" style="gap:16px">
    <span class="taz-badge taz-badge--warning taz-tip" data-tip="Vence el 27-08-2026" tabindex="0">
      <i class="taz-dot"></i>Por vencer
    </span>
    <span class="taz-mono taz-tip" data-tip="Rol único de causa" tabindex="0" style="font-size:13px">C-1842-2026</span>
  </div>

  <div class="taz-alert taz-alert--warning" style="max-width:640px">
    <span class="taz-alert__icon">!</span>
    <div><p class="taz-alert__title">Un tooltip nunca lleva información imprescindible</p>
    No existe en táctil, no aparece al imprimir y se recorta si un ancestro tiene
    <code class="taz-mono">overflow: hidden</code>. Sirve para aclarar, no para informar.</div>
  </div>
</div>`),
};

export const MigasDePan = {
  name: 'Migas de pan',
  render: () => nodo(`
<div class="taz-stack">
  <nav class="taz-breadcrumb" aria-label="Ruta de navegación">
    <ol class="taz-breadcrumb__list">
      <li><a href="#">Inicio</a></li>
      <li><a href="#">Expedientes</a></li>
      <li><a href="#">Liquidación voluntaria</a></li>
      <li><span aria-current="page">C-1842-2026</span></li>
    </ol>
  </nav>

  <hr class="taz-divider">

  <nav class="taz-breadcrumb taz-breadcrumb--truncate" aria-label="Ruta abreviada">
    <ol class="taz-breadcrumb__list">
      <li><a href="#">Inicio</a></li>
      <li><a href="#">Expedientes</a></li>
      <li><a href="#">Liquidación voluntaria</a></li>
      <li><a href="#">Comercial Andes Ltda.</a></li>
      <li><span aria-current="page">Junta de acreedores</span></li>
    </ol>
  </nav>

  <p class="taz-muted" style="margin:0;font-size:14.5px;max-width:62ch">
    La segunda usa <code class="taz-mono">.taz-breadcrumb--truncate</code>: bajo 640 px deja
    solo el penúltimo y el actual, que es lo único accionable en un teléfono. El separador va
    en CSS a propósito, para que no se lea como parte del nombre de la página.
  </p>
</div>`),
};

export const MigasEnTelefono = {
  ...MigasDePan,
  name: 'Migas en teléfono',
  globals: { viewport: { value: 'movil' } },
};
