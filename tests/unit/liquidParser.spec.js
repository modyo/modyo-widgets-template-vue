import liquidParser from '../../src/liquid/liquidParser';

jest.mock('../../src/liquid/local-liquid-variables', () => ({ name: 'modyo' }));
const OLD_ENV = process.env;

beforeEach(() => {
  jest.resetModules(); // Most important - it clears the cache
  process.env = { ...OLD_ENV }; // Make a copy
});

afterAll(() => {
  process.env = OLD_ENV; // Restore old environment
});
describe('LiquidParser', () => {
  test('if no liqiud string is provided throws error', () => {
    const liquidText = '{{test';
    expect(() => { liquidParser.parse(liquidText); }).toThrow(Error);
  });
  test('if no liqiud string is provided throws error on asyncRequest', async () => {
    const liquidText = '{{test';
    expect(liquidParser.parseAsync(liquidText)).rejects.toThrow(Error);
  });
  test('return var on asyncRequest', async () => {
    const liquidText = '{{name}}';
    const liquidResponse = await liquidParser.parseAsync(liquidText);
    expect(liquidResponse).toBe('modyo');
  });
  test('return var on parse', (done) => {
    const liquidText = '{{name}}';
    const liquidResponse = liquidParser.parse(liquidText);
    expect(liquidResponse).toBe('modyo');
    done();
  });
});

describe('test on production', () => {
  test.skip('return string on production', () => {
    const liquidText = '{{name}}';
    const liquidResponse = liquidParser.parse(liquidText);
    expect(liquidResponse).toBe(liquidText);
  });
  test.skip('return string on production on asyncRequest', async (done) => {
    const liquidText = '{{name}}';
    const liquidResponse = await liquidParser.parseAsync(liquidText);
    expect(liquidResponse).toBe(liquidText);
    done();
  });
});
