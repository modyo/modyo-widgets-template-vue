module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-clean-order',
    'stylelint-config-recommended-vue/scss',
  ],
  plugins: ['stylelint-order'],

  rules: {
    'selector-max-id': 1,
    'selector-max-type': 1,
    'at-rule-no-unknown': [true, { ignoreAtRules: ['use'] }],
    indentation: 2,
    'function-parentheses-newline-inside': 'never-multi-line',
    'value-keyword-case': ['lower', {
      ignoreKeywords: [
        'BlinkMacSystemFont',
        'Roboto',
        ' SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        'Arial',
        'SFMono-Regular',
      ],
    }],
  },
};
