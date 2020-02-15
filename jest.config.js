module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript',
  verbose: true,
  collectCoverage: true,
  forceCoverageMatch: ['/.ts', '/.js'],
  coverageReporters: ['lcov', 'text-summary', 'json']
}
