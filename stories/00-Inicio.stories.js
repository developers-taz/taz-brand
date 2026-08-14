import { spiral } from './_spiral.js';

export default {
  title: 'Inicio/Bienvenida',
  parameters: {
    layout: 'fullscreen',
    options: { showPanel: false },
  },
};

export const Bienvenida = {
  name: 'Empezar acá',
  render: () => `
<div style="max-width:820px;margin:0 auto;padding:32px 8px 64px">

  <div class="taz-row" style="gap:18px">
    ${spiral(56, { spin: true })}
    <div>
      <span class="taz-eyebrow">Sistema de diseño · v1.0.0</span>
      <h1 class="taz-h1" style="margin-top:4px">Taz UI</h1>
    </div>
  </div>
  <hr class="taz-rule-accent">

  <p style="margin:20px 0 0;max-width:62ch;color:var(--taz-text-muted)">
    Tokens de color derivados del logotipo y una capa de componentes en CSS plano.
    Sin dependencias y sin build: son clases, así que Angular, React y las plantillas
    Jinja consumen exactamente el mismo archivo.
  </p>

  <h2 class="taz-h2" style="margin-top:40px">Instalación</h2>

  <p style="margin:16px 0 8px;font-size:14.5px"><b>Angular, React o cualquier proyecto con npm</b></p>
  <pre style="margin:0;background:var(--taz-surface-sunk);border:1px solid var(--taz-border);border-radius:8px;padding:16px 18px;overflow-x:auto;font-family:var(--taz-font-mono);font-size:13px;line-height:1.7">npm i github:developers-taz/taz-brand#v1.0.0

<span style="color:var(--taz-text-muted)">// src/styles.css</span>
@import "@tazcorp/brand";</pre>

  <p style="margin:22px 0 8px;font-size:14.5px"><b>FastAPI + Jinja, Bootstrap o HTML suelto</b></p>
  <pre style="margin:0;background:var(--taz-surface-sunk);border:1px solid var(--taz-border);border-radius:8px;padding:16px 18px;overflow-x:auto;font-family:var(--taz-font-mono);font-size:13px;line-height:1.7">&lt;link rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/developers-taz/taz-brand@v1.0.0/dist/taz.css"&gt;</pre>

  <p style="margin:22px 0 8px;font-size:14.5px"><b>Proyecto con Tailwind 4</b></p>
  <pre style="margin:0;background:var(--taz-surface-sunk);border:1px solid var(--taz-border);border-radius:8px;padding:16px 18px;overflow-x:auto;font-family:var(--taz-font-mono);font-size:13px;line-height:1.7">@import "tailwindcss";
@import "@tazcorp/brand";
@import "@tazcorp/brand/theme.css";  <span style="color:var(--taz-text-muted)">/* habilita bg-primary, text-brand-gold-700… */</span></pre>

  <h2 class="taz-h2" style="margin-top:40px">Las tres reglas</h2>
  <div class="taz-stack" style="margin-top:16px">
    <div class="taz-alert taz-alert--info">
      <span class="taz-alert__icon">1</span>
      <div><p class="taz-alert__title">Ningún proyecto escribe hexadecimales</p>
      Todo sale de las variables. Si hace falta un color que no existe, se agrega acá, no allá.</div>
    </div>
    <div class="taz-alert taz-alert--warning">
      <span class="taz-alert__icon">2</span>
      <div><p class="taz-alert__title">El dorado es escaso</p>
      Una acción destacada por pantalla y el indicador de pestaña activa. Si se ve en todas partes, deja de leerse como marca y empieza a leerse como advertencia.</div>
    </div>
    <div class="taz-alert taz-alert--success">
      <span class="taz-alert__icon">3</span>
      <div><p class="taz-alert__title">Proporción 60 / 30 / 10</p>
      Neutro para sostener, azul para la acción, dorado para el acento.</div>
    </div>
  </div>

  <h2 class="taz-h2" style="margin-top:40px">Tema oscuro</h2>
  <p style="margin:12px 0 0;max-width:62ch;color:var(--taz-text-muted)">
    Funciona solo: los tokens responden a <code class="taz-mono">prefers-color-scheme</code>.
    Para forzarlo, estampa <code class="taz-mono">data-theme="dark"</code> o
    <code class="taz-mono">data-theme="light"</code> en el elemento raíz. Usa el control
    <b>Tema</b> de la barra superior para revisar cualquier componente en ambos.
  </p>

  <hr class="taz-divider" style="margin:40px 0 20px">
  <p class="taz-mono taz-muted" style="font-size:12.5px">
    developers@tazcorp.cl · github.com/developers-taz/taz-brand
  </p>
</div>`,
};
