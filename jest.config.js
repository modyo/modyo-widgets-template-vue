module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  coverageReporters: [
    'html',
    'json',
    'text-summary',
    'lcov',
  ],
  testResultsProcessor: 'jest-sonar-reporter',
  collectCoverage: true,
};
