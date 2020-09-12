module.exports = {
  extends: [
    'plugin:react/recommended'
  ],
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        'react/prop-types': 'off'
      }
    }
  ]
}
