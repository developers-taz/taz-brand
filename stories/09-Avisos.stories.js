import { nodo, avisar } from './_app.js';

export default {
  title: 'Componentes/Avisos',
  parameters: { controls: { disable: true } },
};

export const MensajesEmergentes = {
  name: 'Mensajes emergentes',
  parameters: {
    docs: { description: { story: 'Abajo a la derecha en escritorio; arriba y a lo ancho bajo 900 px, lejos del pulgar y sin taparse con la barra inferior. El paquete aporta las clases: el montaje, el orden y el tiempo de vida los decide la aplicación.' } },
  },
  render: () => {
    const raiz = nodo(`
<div class="taz-stack">
  <div class="taz-row">
    <button class="taz-btn taz-btn--primary" data-t="success" type="button">Éxito</button>
    <button class="taz-btn taz-btn--ghost" data-t="warning" type="button">Advertencia</button>
    <button class="taz-btn taz-btn--ghost" data-t="danger" type="button">Error</button>
    <button class="taz-btn taz-btn--ghost" data-t="info" type="button">Información</button>
    <button class="taz-btn taz-btn--quiet" data-varios type="button">Tres a la vez</button>
  </div>
  <p class="taz-muted" style="margin:0;font-size:14.5px;max-width:64ch">
    El de error se anuncia como <code class="taz-mono">role="alert"</code> y el resto como
    <code class="taz-mono">role="status"</code>: un lector de pantalla interrumpe por un error
    y espera su turno para lo demás.
  </p>
  <div class="taz-toaster" data-toaster></div>
</div>`);

    const toaster = raiz.querySelector('[data-toaster]');
    raiz.querySelectorAll('[data-t]').forEach((b) =>
      b.addEventListener('click', () => avisar(toaster, b.dataset.t)));
    raiz.querySelector('[data-varios]').addEventListener('click', () => {
      ['info', 'warning', 'success'].forEach((t, i) =>
        setTimeout(() => avisar(toaster, t), i * 260));
    });
    return raiz;
  },
};

export const MensajesEnTelefono = {
  ...MensajesEmergentes,
  name: 'Mensajes en teléfono',
  globals: { viewport: { value: 'movil' } },
  parameters: {
    docs: { description: { story: 'A 390 px los avisos suben al borde superior y ocupan el ancho.' } },
  },
};

export const Dialogo = {
  name: 'Diálogo',
  parameters: {
    docs: { description: { story: 'Sobre <dialog> nativo: el foco atrapado, el cierre con Escape y el fondo inerte los da el navegador. Bajo 640 px baja al borde inferior y se vuelve hoja, al alcance del pulgar.' } },
  },
  render: () => {
    const raiz = nodo(`
<div class="taz-stack">
  <div class="taz-row">
    <button class="taz-btn taz-btn--accent" data-abrir type="button">Abrir diálogo</button>
    <button class="taz-btn taz-btn--ghost" data-abrir-confirm type="button">Confirmación destructiva</button>
  </div>
  <p class="taz-muted" style="margin:0;font-size:14.5px;max-width:64ch">
    Cierra con Escape o con clic fuera. Prueba a recorrerlo con Tab: el foco no se escapa
    del diálogo, y eso no lo programa nadie — lo hace <code class="taz-mono">showModal()</code>.
  </p>

  <dialog class="taz-modal" data-modal>
    <div class="taz-modal__head">
      <h3 class="taz-h3">Cerrar expediente</h3>
      <span class="taz-badge taz-badge--brand">C-1842-2026</span>
    </div>
    <div class="taz-modal__body taz-stack">
      <p style="margin:0">Al cerrar el expediente se emite el informe final y se notifica a los
      14 acreedores verificados. La acción queda registrada en el Boletín Concursal.</p>
      <div class="taz-field">
        <label class="taz-label" for="motivo">Motivo del cierre</label>
        <select class="taz-select" id="motivo">
          <option>Pago íntegro del pasivo</option>
          <option>Término del procedimiento</option>
          <option>Resolución judicial</option>
        </select>
      </div>
      <label class="taz-check"><input type="checkbox" checked><span>Notificar a los acreedores</span></label>
    </div>
    <div class="taz-modal__foot">
      <button class="taz-btn taz-btn--ghost" data-cerrar type="button">Cancelar</button>
      <button class="taz-btn taz-btn--primary" data-confirmar type="button">Cerrar expediente</button>
    </div>
  </dialog>

  <dialog class="taz-modal" data-modal-confirm style="max-width:420px">
    <div class="taz-modal__head"><h3 class="taz-h3">Eliminar expediente</h3></div>
    <div class="taz-modal__body">
      Se eliminarán también los 14 créditos verificados y los documentos adjuntos.
      Esta acción no se puede deshacer.
    </div>
    <div class="taz-modal__foot">
      <button class="taz-btn taz-btn--ghost" data-cerrar type="button">Cancelar</button>
      <button class="taz-btn taz-btn--danger" data-cerrar type="button">Eliminar</button>
    </div>
  </dialog>

  <div class="taz-toaster" data-toaster></div>
</div>`);

    const modal = raiz.querySelector('[data-modal]');
    const confirm = raiz.querySelector('[data-modal-confirm]');
    const toaster = raiz.querySelector('[data-toaster]');
    raiz.querySelector('[data-abrir]').addEventListener('click', () => modal.showModal());
    raiz.querySelector('[data-abrir-confirm]').addEventListener('click', () => confirm.showModal());
    raiz.querySelectorAll('[data-cerrar]').forEach((b) =>
      b.addEventListener('click', () => b.closest('dialog').close()));
    raiz.querySelector('[data-confirmar]').addEventListener('click', () => {
      modal.close();
      avisar(toaster, 'success');
    });
    return raiz;
  },
};
