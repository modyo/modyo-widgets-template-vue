module.exports =  {
    root: true,
    env: {
      node: true
    },
    extends: [
      "plugin:vue/essential",
      "eslint:recommended"
    ],
    globals:{
        sessionManager: true
    },
    parserOptions: {
      parser: "@babel/eslint-parser"
    },
    rules: {},
    overrides: [
      {
        files: [
          '**/__tests__/*.{j,t}s?(x)',
          '**/tests/unit/**/*.spec.{j,t}s?(x)'
        ],
        env: {
          jest: true
        }
      },
      {
        files: [
          '**/__tests__/*.{j,t}s?(x)',
          '**/tests/unit/**/*.spec.{j,t}s?(x)'
        ],
        env: {
          jest: true
        }
      }
    ],
  }
