export default {
  title: 'Componentes/Formularios',
  parameters: { controls: { disable: true } },
};

export const CamposDeTexto = {
  name: 'Campos de texto',
  parameters: { controls: { disable: false } },
  argTypes: {
    label: { name: 'Etiqueta', control: 'text' },
    value: { name: 'Valor', control: 'text' },
    placeholder: { name: 'Marcador', control: 'text' },
    hint: { name: 'Ayuda', control: 'text' },
    estado: { name: 'Estado', control: 'inline-radio', options: ['normal', 'error', 'solo lectura', 'deshabilitado'] },
    mono: { name: 'Monoespaciado', control: 'boolean' },
    requerido: { name: 'Requerido', control: 'boolean' },
  },
  args: {
    label: 'RUT del deudor',
    value: '76.421.880-K',
    placeholder: '',
    hint: 'Con puntos y guion.',
    estado: 'normal',
    mono: true,
    requerido: true,
  },
  render: ({ label, value, placeholder, hint, estado, mono, requerido }) => `
    <div class="taz-field" style="max-width:340px">
      <label class="taz-label" for="demo">
        ${label}
        ${requerido ? '<span class="taz-req">*</span>' : '<span class="taz-optional">opcional</span>'}
      </label>
      <input id="demo" type="text"
             class="taz-input${mono ? ' taz-input--mono' : ''}${estado === 'error' ? ' is-invalid' : ''}"
             value="${value}" placeholder="${placeholder}"
             ${estado === 'solo lectura' ? 'readonly' : ''}
             ${estado === 'deshabilitado' ? 'disabled' : ''}
             ${estado === 'error' ? 'aria-invalid="true"' : ''}>
      ${estado === 'error'
        ? '<span class="taz-error">El RUT ingresado no supera el dígito verificador.</span>'
        : hint ? `<span class="taz-hint">${hint}</span>` : ''}
    </div>`,
};

export const Combobox = {
  name: 'Combobox',
  render: () => `
<div class="taz-stack" style="max-width:760px">
  <div class="taz-alert taz-alert--info">
    <span class="taz-alert__icon">i</span>
    <div><p class="taz-alert__title">Es un <code class="taz-mono">&lt;select&gt;</code> nativo, a propósito</p>
    Un combobox hecho a mano se ve más prolijo y pierde teclado, lectores de pantalla y el
    selector nativo de Android e iOS. La flecha va como imagen de fondo porque un
    <code class="taz-mono">&lt;select&gt;</code> no admite pseudo-elementos, y cambia de trazo con el tema.</div>
  </div>

  <div class="taz-grid">
    <div class="taz-field">
      <label class="taz-label" for="c1">Tribunal</label>
      <select class="taz-select" id="c1">
        <option>1.º Juzgado Civil de Temuco</option>
        <option>2.º Juzgado Civil de Concepción</option>
        <option>Juzgado de Letras de Traiguén</option>
        <option>1.º Juzgado Civil de Angol</option>
      </select>
    </div>
    <div class="taz-field">
      <label class="taz-label" for="c2">Estado del procedimiento</label>
      <select class="taz-select" id="c2">
        <option value="">Todos los estados</option>
        <option selected>Liquidación voluntaria</option>
        <option>Liquidación forzosa</option>
        <option>Reorganización</option>
      </select>
      <span class="taz-hint">Filtra el listado de expedientes.</span>
    </div>
    <div class="taz-field">
      <label class="taz-label" for="c3">Con error</label>
      <select class="taz-select is-invalid" id="c3" aria-invalid="true">
        <option value="">Seleccione una opción</option>
        <option>Bienes raíces</option>
      </select>
      <span class="taz-error">Debe seleccionar una categoría.</span>
    </div>
    <div class="taz-field">
      <label class="taz-label" for="c4">Deshabilitado</label>
      <select class="taz-select" id="c4" disabled><option>Peso chileno (CLP)</option></select>
    </div>
    <div class="taz-field">
      <label class="taz-label" for="c5">Tamaño pequeño</label>
      <select class="taz-select taz-select--sm" id="c5">
        <option>10 por página</option><option>25 por página</option><option>50 por página</option>
      </select>
    </div>
    <div class="taz-field">
      <label class="taz-label" for="c6">Selección múltiple</label>
      <select class="taz-select" id="c6" multiple size="4">
        <option selected>Bienes raíces</option>
        <option>Vehículos</option>
        <option selected>Maquinaria</option>
        <option>Créditos por cobrar</option>
      </select>
    </div>
  </div>
</div>`,
};

export const Grupos = {
  name: 'Grupos con prefijo y sufijo',
  render: () => `
<div class="taz-grid" style="max-width:760px">
  <div class="taz-field">
    <label class="taz-label" for="g1">Pasivo declarado</label>
    <div class="taz-input-group">
      <span class="taz-affix">$</span>
      <input class="taz-input taz-input--mono" id="g1" type="text" value="184.320.500">
      <span class="taz-affix">CLP</span>
    </div>
  </div>
  <div class="taz-field">
    <label class="taz-label" for="g2">Buscar expediente</label>
    <div class="taz-input-group">
      <input class="taz-input" id="g2" type="search" placeholder="Rol, RUT o razón social">
      <button class="taz-btn taz-btn--primary" type="button">Buscar</button>
    </div>
  </div>
  <div class="taz-field">
    <label class="taz-label" for="g3">Porcentaje de recuperación</label>
    <div class="taz-input-group">
      <input class="taz-input taz-input--mono" id="g3" type="text" value="31,6">
      <span class="taz-affix">%</span>
    </div>
  </div>
  <div class="taz-field">
    <label class="taz-label" for="g4">Filtro combinado</label>
    <div class="taz-input-group">
      <select class="taz-select" id="g4" style="max-width:130px">
        <option>Rol</option><option>RUT</option><option>Deudor</option>
      </select>
      <input class="taz-input" type="text" placeholder="Valor a buscar" aria-label="Valor a buscar">
    </div>
  </div>
</div>`,
};

export const Selecciones = {
  name: 'Casillas, radios e interruptor',
  render: () => `
<div class="taz-stack" style="max-width:640px">
  <div>
    <span class="taz-eyebrow">Casillas</span>
    <div class="taz-stack taz-stack--sm" style="margin-top:10px">
      <label class="taz-check"><input type="checkbox" checked><span>Notificar por correo</span></label>
      <label class="taz-check"><input type="checkbox"><span>Adjuntar respaldos</span></label>
      <label class="taz-check"><input type="checkbox" disabled><span>Firma electrónica avanzada</span></label>
    </div>
  </div>
  <div>
    <span class="taz-eyebrow">Radios</span>
    <div class="taz-stack taz-stack--sm" style="margin-top:10px">
      <label class="taz-check"><input type="radio" name="tipo" checked><span>Liquidación voluntaria</span></label>
      <label class="taz-check"><input type="radio" name="tipo"><span>Liquidación forzosa</span></label>
      <label class="taz-check"><input type="radio" name="tipo"><span>Reorganización</span></label>
    </div>
  </div>
  <div>
    <span class="taz-eyebrow">Interruptores</span>
    <div class="taz-stack taz-stack--sm" style="margin-top:10px">
      <label class="taz-switch"><input type="checkbox" checked><span>Publicar en el Boletín Concursal</span></label>
      <label class="taz-switch"><input type="checkbox"><span>Recordatorio de plazos</span></label>
    </div>
  </div>
</div>`,
};

export const FormularioCompleto = {
  name: 'Formulario completo',
  render: () => `
<form class="taz-card" style="max-width:620px" onsubmit="return false">
  <div class="taz-card__head">
    <h3 class="taz-h3">Nuevo expediente</h3>
    <span class="taz-badge taz-badge--brand">Borrador</span>
  </div>
  <div class="taz-card__body taz-stack">
    <div class="taz-field">
      <label class="taz-label" for="n1">RUT del deudor <span class="taz-req">*</span></label>
      <input class="taz-input taz-input--mono" id="n1" type="text" placeholder="76.421.880-K">
    </div>
    <div class="taz-field">
      <label class="taz-label" for="n2">Razón social <span class="taz-req">*</span></label>
      <input class="taz-input" id="n2" type="text" placeholder="Comercial Andes Ltda.">
    </div>
    <div class="taz-grid" style="grid-template-columns:1fr 1fr">
      <div class="taz-field">
        <label class="taz-label" for="n3">Tribunal</label>
        <select class="taz-select" id="n3">
          <option>1.º Juzgado Civil de Temuco</option>
          <option>Juzgado de Letras de Traiguén</option>
        </select>
      </div>
      <div class="taz-field">
        <label class="taz-label" for="n4">Pasivo estimado</label>
        <div class="taz-input-group">
          <span class="taz-affix">$</span>
          <input class="taz-input taz-input--mono" id="n4" type="text" placeholder="0">
        </div>
      </div>
    </div>
    <div class="taz-field">
      <label class="taz-label" for="n5">Observaciones <span class="taz-optional">opcional</span></label>
      <textarea class="taz-textarea" id="n5" placeholder="Antecedentes relevantes…"></textarea>
      <span class="taz-hint">Se incorpora al acta. Máximo 2.000 caracteres.</span>
    </div>
    <label class="taz-check"><input type="checkbox" checked><span>Notificar al deudor al crear el expediente</span></label>
  </div>
  <div class="taz-card__foot">
    <button class="taz-btn taz-btn--ghost" type="button">Cancelar</button>
    <button class="taz-btn taz-btn--primary" type="submit">Crear expediente</button>
  </div>
</form>`,
};
