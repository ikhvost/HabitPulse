module.exports = {
  extends: ['expo', 'standard', 'eslint:recommended'],
  rules: {
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always'
    }]
  }
}
