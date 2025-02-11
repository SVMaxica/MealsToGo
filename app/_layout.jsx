import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { ThemeProvider } from 'styled-components/native'
import { theme } from '../src/infrastructure/theme'
import RestaurantScreen from '../src/features/restaurants/screens/restaurant.screen'
import MapScreen from '../src/features/restaurants/screens/map.screen'
import SettingsScreen from '../src/features/restaurants/screens/settings.screen'
import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

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

export default function RootLayout() {
  return (
    <ThemeProvider theme={theme}>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Restaurants" component={RestaurantScreen} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </ThemeProvider>
  )
}

// import { Stack } from 'expo-router'
// import { ThemeProvider } from 'styled-components/native'
// import { theme } from '../src/infrastructure/theme'

// export default function RootLayout() {
//   return (
//     <ThemeProvider theme={theme}>
//       <Stack screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="index" />
//         <Stack.Screen name="restaurants" />
//       </Stack>
//     </ThemeProvider>
//   )
// }
