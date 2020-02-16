module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript',
  verbose: true,
  collectCoverage: true,
  coverageReporters: [
    'lcov',
    'text-summary',
    'json',
    'text',
    'text-summary',
    'html'
  ],
  collectCoverageFrom: [
    'src/*.{ts,js,vue}',
    'src/**/*.{ts,js,vue}',
    '!src/main.ts',
    '!src/registerServiceWorker.ts',
    '!src/shims-*',
    '!**/node_modules/**'
  ]
}

// .env variables for testing and branches coverage
process.env = Object.assign(process.env, {
  VUE_APP_BASE_URL: ''
})
