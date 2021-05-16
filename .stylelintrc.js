module.exports = {
  extends: 'stylelint-config-standard',
  plugins: [],
  ignoreFiles: [
    'node_modules/**/*.scss',
    '**/*.md',
    '**/*.ts',
    '**/*.tsx',
    '**/*.js',
      'src/components/calendar/index.module.less',
    'src/zarm.module.less'
  ],
  rules: {
    indentation: 4,
    'color-hex-case': null,
    'block-no-empty':null,
    'color-hex-length':null,
    'rule-empty-line-before':null,
    'no-missing-end-of-source-newline': null,
    'at-rule-no-unknown': null,
    'value-list-comma-newline-after':null,
    'declaration-colon-newline-after':null,
    'declaration-empty-line-before':null,
    'declaration-block-no-duplicate-properties':null,
    'selector-pseudo-element-colon-notation': null,
    "no-descending-specificity":null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'local']
      }
    ],
  }
}
