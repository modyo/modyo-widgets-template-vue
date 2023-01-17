const LiquidClass = process.env.NODE_ENV !== 'production' ? require('./LiquidParserJs').default : require('./PlatformParser').default;

const liquidParser = new LiquidClass();

export default liquidParser;
