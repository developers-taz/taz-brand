/** @type { import('@storybook/html-vite').StorybookConfig } */
export default {
  stories: ['../stories/**/*.stories.js'],
  addons: ['@storybook/addon-docs'],
  framework: {
    name: '@storybook/html-vite',
    options: {},
  },
  // Las páginas estáticas (identidad y previsualización) se copian junto al
  // Storybook compilado en el workflow de Pages, no desde acá.
};
