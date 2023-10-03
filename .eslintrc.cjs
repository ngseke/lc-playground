module.exports = {
  env: {
    node: true,
    browser: true,
  },
  extends: 'standard',
  rules: {
    'no-unused-vars': 'warn',
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'only-multiline',
    }],
    'prefer-const': 0,
  },
}
