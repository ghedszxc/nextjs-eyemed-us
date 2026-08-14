module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-case': [0],
    'scope-empty': [2, 'never'],
  },
}
