import { ThemeProvider } from 'styled-components/native'
import { theme } from '../src/infrastructure/theme'

import { AppNavigator } from '../src/infrastructure/navigation/app.navigator'
import { RestaurantsContextProvider } from '../src/services/restaurants/restaurants.context'
import { LocationContextProvider } from '../src/services/location/location.context'

export default function RootLayout() {
  return (
    <ThemeProvider theme={theme}>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <AppNavigator />
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </ThemeProvider>
  )
}
