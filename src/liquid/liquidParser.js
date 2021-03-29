import localLiquidVariables from './local-liquid-variables';

let engine;

const Liquid = process.env.NODE_ENV !== 'production' ? require('liquidjs') : null;

if (Liquid) {
  engine = new Liquid.Liquid({
    strictFilters: true,
    strictVariables: true,
  });
}

class LiquidParserClass {
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
  async parseLiquidAsync(liquidString) {
    try {
      const parsed = await engine.parseAndRender(liquidString, this.library);
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
  parseLiquid(liquidString) {
    try {
      const parsed = engine.parseAndRenderSync(liquidString, this.library);
      return parsed;
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

  parseAsync(liquidString) {
    if (process.env.NODE_ENV !== 'production') {
      return this.parseLiquidAsync(liquidString);
    }
    return liquidString;
  }
}
const liquidParser = new LiquidParserClass(localLiquidVariables);

export default liquidParser;
