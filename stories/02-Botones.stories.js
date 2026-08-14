export default {
  title: 'Componentes/Botones',
  argTypes: {
    label: { name: 'Texto', control: 'text' },
    variant: {
      name: 'Variante',
      control: 'select',
      options: ['primary', 'accent', 'ghost', 'subtle', 'danger', 'quiet'],
    },
    size: { name: 'Tamaño', control: 'inline-radio', options: ['sm', '', 'lg'] },
    block: { name: 'Ancho completo', control: 'boolean' },
    disabled: { name: 'Deshabilitado', control: 'boolean' },
  },
  args: { label: 'Guardar cambios', variant: 'primary', size: '', block: false, disabled: false },
  render: ({ label, variant, size, block, disabled }) => `
    <button type="button"
            class="taz-btn taz-btn--${variant}${size ? ` taz-btn--${size}` : ''}${block ? ' taz-btn--block' : ''}"
            ${disabled ? 'disabled' : ''}>${label}</button>`,
};

export const Interactivo = { name: 'Probar' };

export const Variantes = {
  name: 'Variantes',
  parameters: { controls: { disable: true } },
  render: () => `
<div class="taz-stack">
  <div>
    <span class="taz-eyebrow">Las seis variantes</span>
    <div class="taz-row" style="margin-top:10px">
      <button class="taz-btn taz-btn--primary" type="button">Guardar cambios</button>
      <button class="taz-btn taz-btn--accent" type="button">Emitir informe</button>
      <button class="taz-btn taz-btn--ghost" type="button">Cancelar</button>
      <button class="taz-btn taz-btn--subtle" type="button">Ver historial</button>
      <button class="taz-btn taz-btn--danger" type="button">Eliminar</button>
      <button class="taz-btn taz-btn--quiet" type="button">Omitir</button>
    </div>
  </div>
  <div class="taz-alert taz-alert--warning" style="max-width:640px">
    <span class="taz-alert__icon">!</span>
    <div><p class="taz-alert__title">Una sola acción dorada por pantalla</p>
    <code class="taz-mono">taz-btn--accent</code> marca la acción destacada de la vista.
    Dos botones dorados a la vez anulan el efecto.</div>
  </div>
</div>`,
};

export const Tamanos = {
  name: 'Tamaños y grupos',
  parameters: { controls: { disable: true } },
  render: () => `
<div class="taz-stack">
  <div>
    <span class="taz-eyebrow">Tamaños</span>
    <div class="taz-row" style="margin-top:10px">
      <button class="taz-btn taz-btn--primary taz-btn--sm" type="button">Pequeño</button>
      <button class="taz-btn taz-btn--primary" type="button">Normal</button>
      <button class="taz-btn taz-btn--primary taz-btn--lg" type="button">Grande</button>
    </div>
  </div>
  <div>
    <span class="taz-eyebrow">Grupo segmentado</span>
    <div class="taz-row" style="margin-top:10px">
      <span class="taz-btn-group">
        <button class="taz-btn taz-btn--ghost" type="button">Día</button>
        <button class="taz-btn taz-btn--ghost" type="button">Mes</button>
        <button class="taz-btn taz-btn--ghost" type="button">Año</button>
      </span>
    </div>
  </div>
  <div>
    <span class="taz-eyebrow">Estados</span>
    <div class="taz-row" style="margin-top:10px">
      <button class="taz-btn taz-btn--primary" type="button" disabled>Deshabilitado</button>
      <button class="taz-btn taz-btn--primary" type="button" disabled>
        <svg class="taz-spinner" width="15" height="15" viewBox="0 0 100 100" aria-hidden="true">
          <circle class="taz-spinner__outer" cx="50" cy="50" r="42" fill="none" stroke="currentColor"
                  stroke-width="12" stroke-linecap="round" pathLength="100"
                  stroke-dasharray="55 45" transform="rotate(-95 50 50)"/>
        </svg>
        Procesando
      </button>
    </div>
  </div>
  <div style="max-width:320px">
    <span class="taz-eyebrow">Ancho completo</span>
    <div style="margin-top:10px">
      <button class="taz-btn taz-btn--primary taz-btn--block" type="button">Confirmar liquidación</button>
    </div>
  </div>
</div>`,
};
