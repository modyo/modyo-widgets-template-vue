import { Liquid } from 'liquidjs';
import localLiquidVariables from './local-liquid-variables';

export default class LiquidParserJs {
  /** context of liquid drops in local */
  library= {};

  engine;

  /**
   * Create a Client.
   * @param library object containing all local liquid context
   * @returns function with all Liquid instance
   */
  constructor() {
    this.engine = new Liquid({
      strictFilters: true,
      strictVariables: true,
    });
    this.engine.registerFilter('asset_url_by_uuid', (a) => localLiquidVariables.assets.find((el) => el.id === a).url);
    this.engine.registerFilter('asset_url', (asset, type) => `${localLiquidVariables.assets.find((el) => el.id === asset).base}.${type}`);
    this.engine.registerFilter('asset_image', (a) => {
      const asset = localLiquidVariables.assets.find((el) => el.id === a);
      return `<img src='${asset.url}'' alt='${asset.alt_text}' />`;
    });
  }

  /**
   * Parse a liquid string
   * @param liquidString Target Content Space UID
   * @returns a usable object or string
   */
  async parseLiquidAsync(liquidString) {
    return this.engine.parseAndRender(liquidString, localLiquidVariables);
  }

  /**
   * Parse a liquid string
   * @param liquidString Target Content Space UID
   * @returns a usable object or string
   */
  parseLiquid(liquidString) {
    return this.engine.parseAndRenderSync(liquidString, localLiquidVariables);
  }

  parse(liquidString) {
    return this.parseLiquid(liquidString);
  }

  parseAsync(liquidString) {
    return this.parseLiquidAsync(liquidString);
  }
}
