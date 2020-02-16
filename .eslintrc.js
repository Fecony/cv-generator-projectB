module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  extends: [
    'prettier',
    'plugin:vue/essential',
    '@vue/prettier',
    '@vue/typescript',
    'plugin:vue/recommended',
    'eslint:recommended',
    'prettier/vue',
    'plugin:prettier/recommended'
  ],
  rules: {
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prettier/prettier': 'error'
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
        '*.ts',
        '*.tsx'
      ],
      rules: {
        '@typescript-eslint/no-unused-vars': [2, { args: 'none' }]
      },
      env: {
        jest: true
      }
    }
  ]
}
