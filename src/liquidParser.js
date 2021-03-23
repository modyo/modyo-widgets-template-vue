let engine;
let Liquid;
if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  Liquid = require('liquidjs');
  engine = new Liquid.Liquid({
    strictFilters: true,
    strictVariables: true,
  });
  engine.registerFilter('limit', async (initial, args) => { const resp = await initial.getTop(args); return resp; });
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
      const parsed = engine.parseAndRender(liquidString, this.library);
      return parsed;
    } catch (error) {
      return error;
    }
  }

  /**
   * Parse a liquid string
   * @param liquidString Target Content Space UID
   * @returns a usable object or string
   */
  parseLiquidSync(liquidString) {
    try {
      const parsed = engine.parseAndRenderSync(liquidString, this.library);
      return parsed;
    } catch (error) {
      return error;
    }
  }

  parse(liquidString) {
    if (process.env.NODE_ENV !== 'production') {
      return this.parseLiquidSync(liquidString);
    }
    return liquidString;
  }

  parseAsync(liquidString) {
    if (process.env.NODE_ENV !== 'production') {
      return this.parseLiquid(liquidString);
    }
    return liquidString;
  }
}
export default LiquidParser;
