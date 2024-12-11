import { theme } from './src/infrastructure/theme/index';

type ThemeType = typeof theme;

declare module 'styled-components' {
  // Lägg till ett fält för att undvika tom interface-varning
  export interface DefaultTheme extends ThemeType {
    _dummyField?: never; // Tomt fält som inte påverkar logiken
  }
}

// import 'styled-components';
// import { theme } from './src/infrastructure/theme/index';

// type ThemeType = typeof theme;

// declare module 'styled-components' {
//   export interface DefaultTheme extends ThemeType {}
// }
