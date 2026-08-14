import '../dist/tokens.css';
import '../dist/taz-ui.css';
import '../dist/taz-shell.css';

/** @type { import('@storybook/html-vite').Preview } */
export default {
  parameters: {
    // Los fondos los pone el tema, no el addon: así lo que se ve en el canvas
    // es exactamente lo que rinde en un proyecto real.
    backgrounds: { disable: true },
    controls: { expanded: true },
    viewport: {
      options: {
        movil: { name: 'Teléfono · 390', styles: { width: '390px', height: '760px' } },
        movilAncho: { name: 'Teléfono ancho · 430', styles: { width: '430px', height: '820px' } },
        tablet: { name: 'Tablet · 820', styles: { width: '820px', height: '1024px' } },
        escritorio: { name: 'Escritorio · 1280', styles: { width: '1280px', height: '800px' } },
      },
    },
    options: {
      storySort: {
        order: [
          'Inicio',
          'Fundamentos',
          ['Color', 'Adaptación a pantalla'],
          'Componentes',
          ['Botones', 'Formularios', 'Tablas', 'Navegación', 'Avisos', 'Estado', 'Tarjetas', 'Spinner'],
        ],
      },
    },
  },

  globalTypes: {
    theme: {
      description: 'Tema claro u oscuro',
      toolbar: {
        title: 'Tema',
        icon: 'contrast',
        items: [
          { value: 'light', title: 'Claro' },
          { value: 'dark', title: 'Oscuro' },
        ],
        dynamicTitle: true,
      },
    },
  },

  initialGlobals: {
    theme: 'light',
  },

  decorators: [
    (story, context) => {
      const doc = document;
      doc.documentElement.dataset.theme = context.globals.theme;
      doc.body.style.background = 'var(--taz-bg)';
      doc.body.style.color = 'var(--taz-text)';
      doc.body.style.fontFamily = 'var(--taz-font-body)';
      // Las historias de estructura ocupan el lienzo completo; el resto respira.
      doc.body.style.padding = context.parameters.layout === 'fullscreen' ? '0' : '20px';
      return story();
    },
  ],
};
