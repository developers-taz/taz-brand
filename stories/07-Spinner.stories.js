import { spiral } from './_spiral.js';

export default {
  title: 'Componentes/Spinner',
  parameters: { controls: { disable: true } },
};

export const Espiral = {
  name: 'La espiral',
  render: () => `
<div style="max-width:680px">
  <span class="taz-eyebrow">Marca en movimiento</span>
  <h2 class="taz-h2" style="margin-top:6px">Spinner</h2>
  <p style="margin:12px 0 0;color:var(--taz-text-muted);max-width:62ch">
    Los dos arcos giran en sentidos opuestos. Es la pieza más reconocible del sistema:
    donde aparezca, se lee Taz antes de leer el logotipo. Respeta
    <code class="taz-mono">prefers-reduced-motion</code>, así que en un sistema con animación
    reducida los arcos quedan quietos.
  </p>

  <div class="taz-row" style="gap:34px;margin-top:28px;align-items:center">
    ${spiral(24, { spin: true })}
    ${spiral(40, { spin: true })}
    ${spiral(64, { spin: true })}
    ${spiral(96, { spin: true })}
  </div>

  <div style="margin-top:34px">
    <span class="taz-eyebrow">Monocromo · hereda currentColor</span>
    <div class="taz-row" style="gap:28px;margin-top:12px;align-items:center">
      <span style="color:var(--taz-primary-text)">${spiral(40, { spin: true, mono: true })}</span>
      <span style="color:var(--taz-accent-text)">${spiral(40, { spin: true, mono: true })}</span>
      <span style="color:var(--taz-text-muted)">${spiral(40, { spin: true, mono: true })}</span>
    </div>
  </div>

  <div style="margin-top:34px">
    <span class="taz-eyebrow">En contexto</span>
    <div class="taz-row" style="margin-top:12px">
      <button class="taz-btn taz-btn--primary" type="button" disabled>
        <svg class="taz-spinner" width="15" height="15" viewBox="0 0 100 100" aria-hidden="true">
          <circle class="taz-spinner__outer" cx="50" cy="50" r="42" fill="none" stroke="currentColor"
                  stroke-width="12" stroke-linecap="round" pathLength="100"
                  stroke-dasharray="55 45" transform="rotate(-95 50 50)"/>
        </svg>
        Procesando
      </button>
      <div class="taz-card" style="min-width:260px"><div class="taz-card__body taz-row" style="justify-content:center;gap:12px">
        ${spiral(28, { spin: true })}
        <span class="taz-muted" style="font-size:14px">Cargando expedientes…</span>
      </div></div>
    </div>
  </div>

  <div class="taz-alert taz-alert--info" style="margin-top:30px">
    <span class="taz-alert__icon">i</span>
    <div><p class="taz-alert__title">Es una abstracción, no el logotipo</p>
    Sirve para interfaz — spinner, marca de agua, favicon. En material de marca va el
    logotipo oficial: <code class="taz-mono">TAZ_LOGO.png</code> sobre fondos claros y
    <code class="taz-mono">TAZ_LOGO_BLANCO.png</code> sobre azul 700 o más oscuro.</div>
  </div>
</div>`,
};
