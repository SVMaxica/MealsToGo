import { useState, useEffect } from 'react'
import { Text } from 'react-native'
import { ThemeProvider } from 'styled-components/native'
import { theme } from '../src/infrastructure/theme'
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebaseConfig'
import { AppNavigator } from '../src/infrastructure/navigation/app.navigator'
import { RestaurantsContextProvider } from '../src/services/restaurants/restaurants.context'
import { LocationContextProvider } from '../src/services/location/location.context'
import { FavouritesContextProvider } from '../src/services/favourites/favourites.context'
import { AuthenticationContextProvider } from '../src/services/authentication/authentication.context'

export default function RootLayout() {
  // const [isAuthenticated, setIsAuthenticated] = useState(null)

  // useEffect(() => {
  //   // ✅ Lyssnar på ändringar i autentisering
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       console.log(`✅ Användare inloggad: ${user.email}`)
  //     } else {
  //       console.log('❌ Ingen användare är inloggad.')
  //     }
  //     setIsAuthenticated(!!user) // Konverterar user till true/false
  //   })

  //   return () => unsubscribe()
  // }, [])

  // if (isAuthenticated === null) {
  //   return <Text>Laddar autentisering...</Text> // ✅ Väntar på Firebase
  // }

  // if (!isAuthenticated) {
  //   signInWithEmailAndPassword(auth, 'skalsta416@telia.com', 'test123')
  //     .then((userCredential) => {
  //       console.log(`✅ Inloggning lyckades: ${userCredential.user.email}`)
  //       setIsAuthenticated(true)
  //     })
  //     .catch((error) =>
  //       console.log(`❌ Inloggning misslyckades: ${error.message}`)
  //     )

  //   return <Text>Loggar in...</Text> // ✅ Visar att inloggning försöker ske
  // }

  return (
    <ThemeProvider theme={theme}>
      <AuthenticationContextProvider>
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <AppNavigator />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      </AuthenticationContextProvider>
    </ThemeProvider>
  )
}

// useEffect(() => {
//   setTimeout(() => {
//     signInWithEmailAndPassword(auth, 'skalsta416@telia.com', 'test123')
//       .then(() => {
//         setIsAuthenticated(true)
//       })
//       .catch((error) => {
//         console.log('Login failed:', error.message)
//       })
//   }, 2000)
// }, [])

//if (!isAuthenticated) return null
