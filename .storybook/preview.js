import '../dist/tokens.css';
import '../dist/taz-ui.css';

/** @type { import('@storybook/html-vite').Preview } */
export default {
  parameters: {
    // Los fondos los pone el tema, no el addon: así lo que se ve en el canvas
    // es exactamente lo que rinde en un proyecto real.
    backgrounds: { disable: true },
    controls: { expanded: true },
    options: {
      storySort: {
        order: [
          'Inicio',
          'Fundamentos',
          ['Color', 'Tipografía'],
          'Componentes',
          ['Botones', 'Formularios', 'Tablas', 'Estado', 'Tarjetas', 'Spinner'],
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
      doc.body.style.padding = '20px';
      return story();
    },
  ],
};
