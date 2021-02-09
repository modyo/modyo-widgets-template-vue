import LiquidParser from './liquidParser';

export default {
  install(Vue, options) {
    // eslint-disable-next-line no-param-reassign
    Vue.prototype.$liquid = new LiquidParser(options);
  },
};
