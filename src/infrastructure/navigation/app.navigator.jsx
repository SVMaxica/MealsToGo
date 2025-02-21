import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { RestaurantsNavigator } from './restaurants.navigator'
//import { CheckoutNavigator } from "./checkout.navigator";
//import { CartContextProvider } from "../../services/cart/cart.context";
import { MapScreen } from '../../features/map/screens/map.screen'
import { MapNavigator } from './map.navigator'
import { SettingsNavigator } from './settings.navigator'
import { RestaurantsContextProvider } from '../../services/restaurants/restaurants.context'
import { LocationContextProvider } from '../../services/location/location.context'
import { FavouritesContextProvider } from '../../services/favourites/favourites.context'

//import { colors } from "../../infrastructure/theme/colors"

const Tab = createBottomTabNavigator()
//const Stack = createStackNavigator()

// Funktion för att sätta ikoner
const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName

    if (route.name === 'Restaurants') {
      iconName = focused ? 'restaurant' : 'restaurant-outline'
    } else if (route.name === 'Map') {
      iconName = focused ? 'map' : 'map-outline'
    } else if (route.name === 'Settings') {
      iconName = focused ? 'settings' : 'settings-outline'
    }

    return <Ionicons name={iconName} size={size} color={color} />
  },
  tabBarActiveTintColor: 'red',
  tabBarInactiveTintColor: 'gray',
  headerShown: false,
})

export const AppNavigator = () => (
  <FavouritesContextProvider>
    <LocationContextProvider>
      <RestaurantsContextProvider>
        <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
          <Tab.Screen name="Map" component={MapNavigator} />
          <Tab.Screen name="Settings" component={SettingsNavigator} />
        </Tab.Navigator>
      </RestaurantsContextProvider>
    </LocationContextProvider>
  </FavouritesContextProvider>
)
