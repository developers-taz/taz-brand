const FILAS = [
  ['C-1842-2026', 'Comercial Andes Ltda.', '1.º Civil Temuco', '184.320.500', 'success', 'Vigente', '12-09-2026'],
  ['C-0937-2026', 'Transportes Bío Sur SpA', '2.º Civil Concepción', '61.940.000', 'warning', 'Por vencer', '27-08-2026'],
  ['C-0455-2026', 'Inversiones Traiguén', 'Letras Traiguén', '9.870.400', 'danger', 'Rechazado', '03-08-2026'],
  ['C-2201-2026', 'Agrícola Las Lomas', '1.º Civil Angol', '402.115.980', 'info', 'En revisión', '30-11-2026'],
  ['C-1130-2026', 'Frigorífico Cautín S.A.', '1.º Civil Temuco', '77.402.150', 'success', 'Vigente', '18-10-2026'],
  ['C-0712-2026', 'Maderas del Sur Ltda.', '2.º Civil Valdivia', '128.550.900', 'success', 'Vigente', '05-12-2026'],
];

const cuerpo = (filas, conCasilla) => filas.map(([rol, deudor, trib, monto, tono, estado, vence], i) => `
  <tr${i === 0 && conCasilla ? ' class="is-selected"' : ''}>
    ${conCasilla ? `<td><label class="taz-check"><input type="checkbox"${i === 0 ? ' checked' : ''} aria-label="Seleccionar ${rol}"></label></td>` : ''}
    <td class="taz-mono">${rol}</td>
    <td>${deudor}</td>
    <td>${trib}</td>
    <td class="taz-num">$ ${monto}</td>
    <td><span class="taz-badge taz-badge--${tono}"><i class="taz-dot"></i>${estado}</span></td>
    <td class="taz-num taz-muted">${vence}</td>
  </tr>`).join('');

export default {
  title: 'Componentes/Tablas',
  argTypes: {
    striped: { name: 'Filas alternas', control: 'boolean' },
    hover: { name: 'Resaltar al pasar', control: 'boolean' },
    compact: { name: 'Densidad alta', control: 'boolean' },
    sticky: { name: 'Encabezado fijo', control: 'boolean' },
    casillas: { name: 'Columna de selección', control: 'boolean' },
  },
  args: { striped: false, hover: true, compact: false, sticky: false, casillas: true },
  render: ({ striped, hover, compact, sticky, casillas }) => {
    const mods = [
      striped && 'taz-table--striped',
      hover && 'taz-table--hover',
      compact && 'taz-table--compact',
      sticky && 'taz-table--sticky',
    ].filter(Boolean).join(' ');
    return `
<div class="taz-table-wrap"${sticky ? ' style="max-height:260px;overflow-y:auto"' : ''}>
  <table class="taz-table ${mods}">
    <thead>
      <tr>
        ${casillas ? '<th style="width:36px"></th>' : ''}
        <th>Expediente</th><th>Deudor</th><th>Tribunal</th>
        <th class="taz-num">Pasivo</th><th>Estado</th><th class="taz-num">Vence</th>
      </tr>
    </thead>
    <tbody>${cuerpo(FILAS, casillas)}</tbody>
    <tfoot>
      <tr>
        <td colspan="${casillas ? 5 : 4}">Pasivo total</td>
        <td class="taz-num" colspan="2">$ 864.199.930</td>
      </tr>
    </tfoot>
  </table>
</div>`;
  },
};

export const Interactiva = { name: 'Probar' };

export const ConPaginacion = {
  name: 'Con paginación',
  parameters: { controls: { disable: true } },
  render: () => `
<div class="taz-stack taz-stack--sm">
  <div class="taz-table-wrap">
    <table class="taz-table taz-table--hover">
      <thead><tr><th>Expediente</th><th>Deudor</th><th class="taz-num">Pasivo</th><th>Estado</th></tr></thead>
      <tbody>
        ${FILAS.slice(0, 4).map(([rol, deudor, , monto, tono, estado]) => `
        <tr>
          <td class="taz-mono">${rol}</td><td>${deudor}</td>
          <td class="taz-num">$ ${monto}</td>
          <td><span class="taz-badge taz-badge--${tono}">${estado}</span></td>
        </tr>`).join('')}
      </tbody>
    </table>
  </div>
  <div class="taz-pagination">
    <span class="taz-pagination__info">Mostrando 1–4 de 37 expedientes</span>
    <button class="taz-page" type="button" disabled aria-label="Anterior">‹</button>
    <button class="taz-page is-active" type="button">1</button>
    <button class="taz-page" type="button">2</button>
    <button class="taz-page" type="button">3</button>
    <span class="taz-page" aria-hidden="true">…</span>
    <button class="taz-page" type="button">10</button>
    <button class="taz-page" type="button" aria-label="Siguiente">›</button>
  </div>
</div>`,
};

export const SinResultados = {
  name: 'Sin resultados',
  parameters: { controls: { disable: true } },
  render: () => `
<div class="taz-table-wrap">
  <table class="taz-table">
    <thead><tr><th>Expediente</th><th>Deudor</th><th class="taz-num">Pasivo</th></tr></thead>
  </table>
  <div class="taz-table__empty">
    <svg width="26" height="26" viewBox="0 0 100 100" style="opacity:.35;margin-bottom:8px" aria-hidden="true">
      <g fill="none" stroke="currentColor" stroke-linecap="round">
        <circle cx="50" cy="50" r="42" stroke-width="7" pathLength="100" stroke-dasharray="76 24" transform="rotate(-95 50 50)"/>
        <circle cx="50" cy="50" r="29" stroke-width="9" pathLength="100" stroke-dasharray="60 40" transform="rotate(55 50 50)"/>
      </g>
    </svg>
    <div>Ningún expediente coincide con los filtros aplicados.</div>
  </div>
</div>`,
};

export const Densa = {
  name: 'Densidad alta',
  parameters: { controls: { disable: true } },
  render: () => `
<div class="taz-table-wrap">
  <table class="taz-table taz-table--striped taz-table--compact">
    <thead><tr><th>Partida</th><th class="taz-num">Cantidad</th><th class="taz-num">Unitario</th><th class="taz-num">Total</th></tr></thead>
    <tbody>
      <tr><td>Honorarios de liquidación</td><td class="taz-num">1</td><td class="taz-num">2.400.000</td><td class="taz-num">2.400.000</td></tr>
      <tr><td>Publicaciones Diario Oficial</td><td class="taz-num">3</td><td class="taz-num">86.500</td><td class="taz-num">259.500</td></tr>
      <tr><td>Certificados Conservador</td><td class="taz-num">12</td><td class="taz-num">7.200</td><td class="taz-num">86.400</td></tr>
      <tr><td>Tasación de bienes</td><td class="taz-num">1</td><td class="taz-num">640.000</td><td class="taz-num">640.000</td></tr>
      <tr><td>Bodegaje</td><td class="taz-num">4</td><td class="taz-num">180.000</td><td class="taz-num">720.000</td></tr>
    </tbody>
    <tfoot><tr><td colspan="3">Total gastos de administración</td><td class="taz-num">4.105.900</td></tr></tfoot>
  </table>
</div>`,
};
