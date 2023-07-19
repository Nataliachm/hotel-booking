module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'arrow-body-style': ['error', 'always'],
    'arrow-parens': ['error', 'always'],
    'no-confusing-arrow': ['error', { allowParens: true }],
    'react/jsx-pascal-case': ['off'],
    'react/function-component-definition': 'off',
  },
};
