module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript',
  verbose: true,
  collectCoverage: true,
  coverageReporters: ['lcov', 'text-summary', 'json'],
  collectCoverageFrom: [
    'src/*.{ts,js,vue}',
    'src/**/*.{ts,js,vue}',
    '!src/main.ts',
    '!src/registerServiceWorker.ts',
    '!src/shims-*',
    '!**/node_modules/**'
  ]
}
