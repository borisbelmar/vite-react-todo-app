module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true
  },
  plugins: [
    'import',
    'react',
    'react-hooks',
    'jsx-a11y'
  ],
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:import/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended'
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    semi: ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    'react/jsx-one-expression-per-line': 'off'
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
          ['@components', './src/components']
        ],
        extensions: ['.js', '.jsx']
      }
    }
  }
}
