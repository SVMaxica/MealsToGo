import { Stack } from 'expo-router'
import { ThemeProvider } from 'styled-components/native'
import { theme } from '../src/infrastructure/theme'

export default function RootLayout() {
  return (
    <ThemeProvider theme={theme}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="restaurants" />
      </Stack>
    </ThemeProvider>
  )
}
