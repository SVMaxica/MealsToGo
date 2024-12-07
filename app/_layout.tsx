import { Stack } from 'expo-router';
import { ThemeProvider } from 'styled-components/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from '../src/infrastructure/theme/index';

export default function RootLayout(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <PaperProvider>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </PaperProvider>
    </ThemeProvider>
  );
}
