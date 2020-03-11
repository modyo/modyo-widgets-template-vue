const postCss = require('@fullhuman/postcss-purgecss');

const IN_PRODUCTION = process.env.NODE_ENV === 'production';
const plugins = {};
if (IN_PRODUCTION) {
  plugins.postCss = postCss({
    content: ['./public/**/*.html', './src/**/*.vue'],
    defaultExtractor(content) {
      const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, '');
      return contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || [];
    },
    whitelist: [],
    whitelistPatterns: [
      /-(leave|enter|appear)(|-(to|from|active))$/,
      /^(?!(|.*?:)cursor-move).+-move$/,
      /^router-link(|-exact)-active$/,
    ],
  });
}
plugins.autoprefixer = {};

module.exports = {
  plugins,
};
