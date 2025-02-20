import { ThemeProvider } from 'styled-components/native'
import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import { theme } from '../src/infrastructure/theme'
import { Navigation } from '../src/infrastructure/navigation/index'
import { AuthenticationContextProvider } from '../src/services/authentication/authentication.context'
import { useContext } from 'react'
import { initializeApp } from 'firebase/app'

import { app } from '../firebaseConfig'

export default function RootLayout() {
  console.log('🔥 Firebase är initierat:', app.name)

  return (
    <ThemeProvider theme={theme}>
      <AuthenticationContextProvider>
        <Navigation />
      </AuthenticationContextProvider>
    </ThemeProvider>
    // <ExpoStatusBar style="auto" />
  )
}
