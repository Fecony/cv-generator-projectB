module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript',
  verbose: true,
  collectCoverage: true,
  testMatch: ['**/*.test.ts', '**/*.test.js', '**/*.spec.ts', '**/*.spec.js'],
  forceCoverageMatch: ['/.ts', '/.js'],
  coverageReporters: ['lcov', 'text-summary', 'json']
}
