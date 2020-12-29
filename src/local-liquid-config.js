let engine;
let Liquid;
if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  Liquid = require('liquidjs');
  engine = new Liquid.Liquid();
}
class LiquidParser {
  /** context of liquid drops in local */
  library= {};

  /**
   * Create a Client.
   * @param library object containing all local liquid context
   * @returns function with all Liquid instance
   */
  constructor(library) {
    this.library = library;
  }

  /**
   * Parse a liquid string
   * @param liquidString Target Content Space UID
   * @returns a usable object or string
   */
  parseLiquid(liquidString) {
    try {
      return engine.parseAndRender(liquidString, this.library);
    } catch (error) {
      return error;
    }
  }

  parse(liquidString) {
    if (process.env.NODE_ENV !== 'production') {
      return this.parseLiquid(liquidString);
    }
    return liquidString;
  }
}
const LiquidParserInstance = new LiquidParser({
  site: {
    name: ' TEST',
  },
});

export default {
  install(Vue) {
    // eslint-disable-next-line no-param-reassign
    Vue.prototype.$liquid = LiquidParserInstance;
  },
};
