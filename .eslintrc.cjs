module.exports = {
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  env: {
    browser: true,
    es6: true,
  },
  plugins: [
    'svelte3',
  ],
  rules: {
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
};
