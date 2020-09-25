const PURGE_CSS = require('@fullhuman/postcss-purgecss');

const IN_PRODUCTION = process.env.NODE_ENV === 'production';
const plugins = {};

if (IN_PRODUCTION) {
  plugins.purgecss = PURGE_CSS({
    content: ['./public/**/*.html', './src/**/*.vue'],
    defaultExtractor(content) {
      const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, '');
      return contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || [];
    },
    safelist: [
      /-(leave|enter|appear)(|-(to|from|active))$/,
      /^(?!(|.*?:)cursor-move).+-move$/,
      /^router-link(|-exact)-active$/,
      /data-v-.*/,
      /svg.*/,
      /fa.*/,
      /^d-*/,
    ],
  });
}

plugins.autoprefixer = {};

module.exports = {
  plugins,
};
