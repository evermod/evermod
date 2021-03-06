module.exports = {
  extends: [
    'plugin:react/recommended'
  ],
  rules: {
    'react/react-in-jsx-scope': 'off'
  },
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        'react/prop-types': 'off'
      }
    }
  ]
}
