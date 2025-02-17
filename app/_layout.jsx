import { ThemeProvider } from 'styled-components/native'
import { theme } from '../src/infrastructure/theme'

import { AppNavigator } from '../src/infrastructure/navigation/app.navigator'
import { RestaurantsContextProvider } from '../src/services/restaurants/restaurants.context'
import { LocationContextProvider } from '../src/services/location/location.context'
import { FavouritesContextProvider } from '../src/services/favourites/favourites.context'

export default function RootLayout() {
  return (
    <ThemeProvider theme={theme}>
      <FavouritesContextProvider>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <AppNavigator />
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </FavouritesContextProvider>
    </ThemeProvider>
  )
}
