import { theme } from './src/infrastructure/theme/index';

type ThemeType = typeof theme;

declare module 'styled-components' {
  export type DefaultTheme = ThemeType;
}
