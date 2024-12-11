// // https://docs.expo.dev/guides/using-eslint/
// module.exports = {
//   extends: ['expo', 'plugin:@typescript-eslint/recommended'],
//   ignorePatterns: ['/dist/*'],
//   parserOptions: {
//     ecmaVersion: 2021,
//     sourceType: 'module',
//   },
//   rules: {
//     '@typescript-eslint/no-unused-vars': ['error'],
//     '@typescript-eslint/no-explicit-any': 'warn',
//     '@typescript-eslint/no-empty-interface': 'off',
//   },
// };
module.exports = {
  parser: '@typescript-eslint/parser', // Definierar TS-parsern
  extends: [
    'expo', // Baslinje för Expo-appar
    'plugin:react/recommended', // Använder rekommenderade regler från 'eslint-plugin-react'
    'plugin:@typescript-eslint/recommended', // Använder rekommenderade regler från '@typescript-eslint/eslint-plugin'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Tillåter parsing av JSX
    },
    ecmaVersion: 2021, // Tillåter modern ECMAScript-funktionalitet
    sourceType: 'module', // Stöder modul-syntaxen
  },
  settings: {
    react: {
      version: 'detect', // Automatiskt upptäcker React-versionen
    },
  },
  ignorePatterns: ['**/*.js', '**/*.jsx'], // Ignorerar JS-filer om du endast arbetar med TypeScript
  rules: {
    // Lägg till eller modifiera ESLint-regler här
    'react/react-in-jsx-scope': 'off', // Inte nödvändig i React 17+
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Stänger av kravet på att exportera funktioner och klasser att ha explicita returtyper
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // Markerar oanvända variabler som ett fel
    '@typescript-eslint/no-explicit-any': 'warn', // Varnar för användning av 'any' typen
    'no-console': 'warn', // Varnar för användning av console.log
    'react/prop-types': 'off', // Inaktiverar prop-types regler, eftersom TypeScript hanterar detta
    'react/display-name': 'off', // Stänger av varningar för komponenter utan display-namn
    'jsx-quotes': ['error', 'prefer-double'],
  },
};
