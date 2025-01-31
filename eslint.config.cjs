const eslintConfig = [
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: require('@babel/eslint-parser'),
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ['@babel/preset-react'],
        },
      },
    },
    plugins: {
      react: require('eslint-plugin-react'),
      'react-native': require('eslint-plugin-react-native'),
    },
    rules: {
      semi: ['error', 'never'],
      quotes: ['error', 'single'],
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'react-native/no-unused-styles': 'warn',
      'react-native/no-inline-styles': 'warn',
    },
  },
]

module.exports = eslintConfig
