import { nodo } from './_app.js';

export default {
  title: 'Componentes/Fechas y archivos',
  parameters: { controls: { disable: true } },
};

const ICONO_DOC = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/></svg>';
const ICONO_SUBIR = '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 16V4M7 9l5-5 5 5"/><path d="M4 16v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3"/></svg>';
const ICONO_X = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6L6 18"/></svg>';

export const Fechas = {
  name: 'Campos de fecha',
  parameters: {
    docs: { description: { story: 'Sobre <input type="date"> nativo. El calendario lo pinta el navegador; lo que sí se controla es que salga en el tema correcto, y eso lo resuelve color-scheme en tokens.css. A cambio vienen gratis el teclado, el formato local y el selector nativo del teléfono. Cambia a oscuro con el control Tema y abre el calendario para comprobarlo.' } },
  },
  render: () => nodo(`
<div class="taz-stack" style="max-width:720px">
  <div class="taz-grid">
    <div class="taz-field">
      <label class="taz-label" for="f-1">Fecha de la junta <span class="taz-req">*</span></label>
      <input class="taz-input taz-date" id="f-1" type="date" value="2026-09-12">
    </div>
    <div class="taz-field">
      <label class="taz-label" for="f-2">Vencimiento <span class="taz-optional">vacío</span></label>
      <input class="taz-input taz-date" id="f-2" type="date">
      <span class="taz-hint">Se calcula solo si se deja vacío.</span>
    </div>
    <div class="taz-field">
      <label class="taz-label" for="f-3">Con error</label>
      <input class="taz-input taz-date is-invalid" id="f-3" type="date" value="2026-07-01" aria-invalid="true">
      <span class="taz-error">La fecha no puede ser anterior a la apertura del procedimiento.</span>
    </div>
    <div class="taz-field">
      <label class="taz-label" for="f-4">Fecha y hora</label>
      <input class="taz-input taz-date" id="f-4" type="datetime-local" value="2026-09-12T10:30">
    </div>
  </div>

  <div class="taz-field">
    <label class="taz-label" for="f-5">Rango de consulta</label>
    <div class="taz-daterange" style="max-width:420px">
      <input class="taz-input taz-date" id="f-5" type="date" value="2026-01-01" aria-label="Desde">
      <span class="taz-daterange__sep">→</span>
      <input class="taz-input taz-date" type="date" value="2026-08-15" aria-label="Hasta">
    </div>
    <span class="taz-hint">Ambos extremos incluidos.</span>
  </div>

  <div class="taz-alert taz-alert--info">
    <span class="taz-alert__icon">i</span>
    <div><p class="taz-alert__title">Guardar siempre en ISO</p>
    El campo muestra el formato local del usuario, pero su valor siempre es
    <code class="taz-mono">AAAA-MM-DD</code>. Nunca parsear lo que se ve en pantalla.</div>
  </div>
</div>`),
};

const MESES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio',
  'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
const DOW = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
const iso = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

/**
 * Dibuja la retícula de un mes. Es la referencia mínima del contrato de
 * marcado: en un proyecto real esto lo genera el framework, o lo produce el
 * datepicker que ya se use, y el paquete solo aporta las clases.
 */
function pintarMes(grid, { año, mes, seleccionado, eventos = [] }) {
  const hoy = iso(new Date());
  const primero = new Date(año, mes, 1);
  // getDay() devuelve 0 para domingo; acá la semana parte en lunes.
  const desplazamiento = (primero.getDay() + 6) % 7;
  const diasMes = new Date(año, mes + 1, 0).getDate();
  const diasPrevios = new Date(año, mes, 0).getDate();

  const celdas = [];
  for (let i = desplazamiento - 1; i >= 0; i--) celdas.push({ n: diasPrevios - i, fuera: true, d: new Date(año, mes - 1, diasPrevios - i) });
  for (let n = 1; n <= diasMes; n++) celdas.push({ n, fuera: false, d: new Date(año, mes, n) });
  while (celdas.length % 7) { const n = celdas.length - desplazamiento - diasMes + 1; celdas.push({ n, fuera: true, d: new Date(año, mes + 1, n) }); }

  grid.innerHTML =
    DOW.map((d) => `<span class="taz-calendar__dow" aria-hidden="true">${d}</span>`).join('') +
    celdas.map(({ n, fuera, d }) => {
      const f = iso(d);
      const clases = [
        'taz-calendar__day',
        fuera ? 'is-outside' : '',
        f === hoy ? 'is-today' : '',
        f === seleccionado ? 'is-selected' : '',
        eventos.includes(f) ? 'has-event' : '',
      ].filter(Boolean).join(' ');
      return `<button type="button" class="${clases}" data-fecha="${f}"
        aria-pressed="${f === seleccionado}"
        aria-label="${n} de ${MESES[d.getMonth()]} de ${d.getFullYear()}">${n}</button>`;
    }).join('');
}

export const CalendarioPropio = {
  name: 'Calendario propio',
  parameters: {
    docs: { description: { story: 'El calendario de <input type="date"> lo dibuja el navegador FUERA del DOM: ningún CSS lo alcanza. Para controlar su aspecto hay que dibujarlo. Este se muestra con puntero fino; con el dedo se oculta y gana el selector nativo del sistema, que es mejor que cualquier cosa que hagamos. Hoy va con anillo dorado: es el único acento del componente.' } },
  },
  render: () => {
    const hoy = new Date();
    const estado = { año: hoy.getFullYear(), mes: hoy.getMonth(), seleccionado: iso(hoy) };
    const eventos = [];
    for (const dia of [3, 12, 18, 27]) eventos.push(iso(new Date(estado.año, estado.mes, dia)));

    const raiz = nodo(`
<div class="taz-stack" style="max-width:620px;min-height:430px">
  <div class="taz-field taz-datefield" style="max-width:280px">
    <label class="taz-label" for="cal">Fecha de la junta</label>
    <input class="taz-input taz-date" id="cal" type="date" value="${estado.seleccionado}" data-input>
    <div class="taz-calendar is-open" role="dialog" aria-label="Elegir fecha" data-cal>
      <div class="taz-calendar__head">
        <button class="taz-calendar__nav" type="button" aria-label="Mes anterior" data-prev>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 5l-7 7 7 7"/></svg>
        </button>
        <button class="taz-calendar__title" type="button" aria-live="polite" data-titulo></button>
        <button class="taz-calendar__nav" type="button" aria-label="Mes siguiente" data-next>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 5l7 7-7 7"/></svg>
        </button>
      </div>
      <div class="taz-calendar__grid" role="grid" data-grid></div>
      <div class="taz-calendar__foot">
        <button class="taz-btn taz-btn--quiet taz-btn--sm" type="button" data-hoy>Hoy</button>
        <button class="taz-btn taz-btn--quiet taz-btn--sm" type="button" data-limpiar>Limpiar</button>
      </div>
    </div>
  </div>

  <div class="taz-alert taz-alert--info" style="margin-top:380px">
    <span class="taz-alert__icon">i</span>
    <div><p class="taz-alert__title">Los puntos marcan días con junta o plazo</p>
    <code class="taz-mono">.has-event</code> pone el punto; <code class="taz-mono">.is-today</code>
    el anillo dorado; <code class="taz-mono">.is-in-range</code>,
    <code class="taz-mono">.is-range-start</code> y <code class="taz-mono">.is-range-end</code>
    pintan un rango continuo.</div>
  </div>
</div>`);

    const grid = raiz.querySelector('[data-grid]');
    const titulo = raiz.querySelector('[data-titulo]');
    const input = raiz.querySelector('[data-input]');

    const refrescar = () => {
      titulo.textContent = `${MESES[estado.mes]} ${estado.año}`;
      pintarMes(grid, { ...estado, eventos });
    };
    refrescar();

    raiz.querySelector('[data-prev]').addEventListener('click', () => {
      if (--estado.mes < 0) { estado.mes = 11; estado.año--; }
      refrescar();
    });
    raiz.querySelector('[data-next]').addEventListener('click', () => {
      if (++estado.mes > 11) { estado.mes = 0; estado.año++; }
      refrescar();
    });
    raiz.querySelector('[data-hoy]').addEventListener('click', () => {
      const h = new Date();
      Object.assign(estado, { año: h.getFullYear(), mes: h.getMonth(), seleccionado: iso(h) });
      input.value = estado.seleccionado;
      refrescar();
    });
    raiz.querySelector('[data-limpiar]').addEventListener('click', () => {
      estado.seleccionado = null;
      input.value = '';
      refrescar();
    });
    grid.addEventListener('click', (e) => {
      const dia = e.target.closest('[data-fecha]');
      if (!dia) return;
      estado.seleccionado = dia.dataset.fecha;
      input.value = estado.seleccionado;
      refrescar();
    });
    return raiz;
  },
};

export const Horas = {
  name: 'Horas',
  parameters: {
    docs: { description: { story: 'El reloj de <input type="time"> tiene el mismo problema que el calendario: lo pinta el navegador. Para agendar conviene más una rejilla de horarios, que además comunica qué está tomado. Los ocupados se muestran tachados en vez de esconderse, para que se entienda que el horario existe pero no está libre.' } },
  },
  render: () => {
    const raiz = nodo(`
<div class="taz-stack" style="max-width:620px">
  <div class="taz-grid">
    <div class="taz-field">
      <label class="taz-label" for="h1">Hora de inicio</label>
      <input class="taz-input taz-date taz-time" id="h1" type="time" value="10:30">
    </div>
    <div class="taz-field">
      <label class="taz-label" for="h2">Hora de término</label>
      <input class="taz-input taz-date taz-time" id="h2" type="time" value="12:00">
    </div>
  </div>

  <div class="taz-field">
    <label class="taz-label" for="h3">Fecha y hora de la junta</label>
    <div class="taz-datetime" style="max-width:360px">
      <input class="taz-input taz-date" id="h3" type="date" value="2026-09-12" aria-label="Fecha">
      <input class="taz-input taz-date taz-time taz-time--full" type="time" value="10:30" aria-label="Hora">
    </div>
    <span class="taz-hint">Se guarda en la zona horaria del tribunal.</span>
  </div>

  <hr class="taz-divider">

  <div class="taz-field">
    <label class="taz-label" id="lbl-slots">Horarios disponibles · 12-09-2026</label>
    <div class="taz-timegrid" role="group" aria-labelledby="lbl-slots" data-slots></div>
    <span class="taz-hint">Los tachados ya están tomados por otra junta.</span>
  </div>
</div>`);

    const HORAS = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
      '12:00', '12:30', '15:00', '15:30', '16:00', '16:30'];
    const OCUPADAS = ['09:30', '11:00', '15:30'];
    const cont = raiz.querySelector('[data-slots]');
    cont.innerHTML = HORAS.map((h) => `
      <button type="button" class="taz-timeslot${h === '10:30' ? ' is-selected' : ''}"
              ${OCUPADAS.includes(h) ? 'disabled aria-label="' + h + ', ocupado"' : ''}
              aria-pressed="${h === '10:30'}">${h}</button>`).join('');
    cont.addEventListener('click', (e) => {
      const b = e.target.closest('.taz-timeslot');
      if (!b || b.disabled) return;
      cont.querySelectorAll('.taz-timeslot').forEach((x) => {
        x.classList.toggle('is-selected', x === b);
        x.setAttribute('aria-pressed', String(x === b));
      });
    });
    return raiz;
  },
};

export const SubidaDeArchivos = {
  name: 'Subida de archivos',
  parameters: {
    docs: { description: { story: 'El <input type="file"> nativo no se puede estilar, así que se oculta sin sacarlo del flujo de accesibilidad y la etiqueta hace de control. El foco del teclado cae en el input invisible y se pinta en la etiqueta. Arrastra un archivo sobre la zona para ver el estado is-dragover.' } },
  },
  render: () => {
    const raiz = nodo(`
<div class="taz-stack" style="max-width:640px">
  <div class="taz-field">
    <label class="taz-label" for="up">Documentos del expediente</label>
    <label class="taz-file" style="display:block">
      <input type="file" id="up" multiple>
      <span class="taz-dropzone" data-zone>
        <span class="taz-dropzone__icon">${ICONO_SUBIR}</span>
        <span class="taz-dropzone__title">Arrastra los archivos o <em>búscalos en tu equipo</em></span>
        <span class="taz-dropzone__hint">PDF, DOCX o JPG · hasta 20 MB por archivo</span>
      </span>
    </label>
    <span class="taz-hint">Se adjuntan al acta de la junta.</span>
  </div>

  <ul class="taz-filelist">
    <li class="taz-fileitem taz-fileitem--done">
      <span class="taz-fileitem__icon">${ICONO_DOC}</span>
      <span>
        <span class="taz-fileitem__name">Acta junta ordinaria 12-08-2026.pdf</span><br>
        <span class="taz-fileitem__meta">1,8 MB · subido</span>
      </span>
      <button class="taz-btn taz-btn--quiet taz-btn--icon taz-btn--sm" type="button" aria-label="Quitar Acta junta ordinaria">${ICONO_X}</button>
    </li>
    <li class="taz-fileitem">
      <span class="taz-fileitem__icon">${ICONO_DOC}</span>
      <span>
        <span class="taz-fileitem__name">Inventario de bienes — Comercial Andes Ltda.docx</span><br>
        <span class="taz-fileitem__meta">4,2 MB · 63 %</span>
      </span>
      <button class="taz-btn taz-btn--quiet taz-btn--icon taz-btn--sm" type="button" aria-label="Cancelar subida del inventario">${ICONO_X}</button>
      <div class="taz-meter"><i style="width:63%"></i></div>
    </li>
    <li class="taz-fileitem taz-fileitem--error">
      <span class="taz-fileitem__icon">${ICONO_DOC}</span>
      <span>
        <span class="taz-fileitem__name">Tasación maquinaria.tiff</span><br>
        <span class="taz-fileitem__meta">28,4 MB · supera el máximo de 20 MB</span>
      </span>
      <button class="taz-btn taz-btn--quiet taz-btn--icon taz-btn--sm" type="button" aria-label="Quitar Tasación maquinaria">${ICONO_X}</button>
    </li>
  </ul>

  <div class="taz-row">
    <label class="taz-file">
      <input type="file" id="up2">
      <span class="taz-btn taz-btn--ghost taz-file__label">Adjuntar otro documento</span>
    </label>
    <span class="taz-hint">Variante compacta, sin zona de arrastre.</span>
  </div>

  <div class="taz-alert taz-alert--warning">
    <span class="taz-alert__icon">!</span>
    <div><p class="taz-alert__title">El mensaje de error dice qué pasó y qué hacer</p>
    «Supera el máximo de 20 MB» sirve; «archivo inválido» obliga a adivinar.</div>
  </div>
</div>`);

    // Demostración del estado de arrastre. En una aplicación real esto lo
    // maneja el framework junto con la carga.
    const zona = raiz.querySelector('[data-zone]');
    ['dragenter', 'dragover'].forEach((ev) =>
      zona.addEventListener(ev, (e) => { e.preventDefault(); zona.classList.add('is-dragover'); }));
    ['dragleave', 'drop'].forEach((ev) =>
      zona.addEventListener(ev, () => zona.classList.remove('is-dragover')));
    return raiz;
  },
};

export const ZonaCompacta = {
  name: 'Zona compacta',
  render: () => nodo(`
<div class="taz-stack" style="max-width:520px">
  <label class="taz-file" style="display:block">
    <input type="file" id="up3">
    <span class="taz-dropzone taz-dropzone--sm">
      <span class="taz-dropzone__icon">${ICONO_SUBIR}</span>
      <span>
        <span class="taz-dropzone__title">Adjuntar respaldo</span><br>
        <span class="taz-dropzone__hint">Un archivo, hasta 20 MB</span>
      </span>
    </span>
  </label>
  <label class="taz-file" style="display:block">
    <input type="file" id="up4">
    <span class="taz-dropzone taz-dropzone--sm is-invalid">
      <span class="taz-dropzone__icon">${ICONO_SUBIR}</span>
      <span>
        <span class="taz-dropzone__title">Adjuntar respaldo</span><br>
        <span class="taz-dropzone__hint">Formato no admitido: solo PDF, DOCX o JPG</span>
      </span>
    </span>
  </label>
</div>`),
};
