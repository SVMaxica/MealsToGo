import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { RestaurantsNavigator } from './restaurants.navigator'
import { MapScreen } from '../../features/map/screens/map.screen'
import SettingsScreen from '../../features/restaurants/screens/settings.screen'

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

export const AppNavigator = () => (
  <Tab.Navigator screenOptions={screenOptions}>
    <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
    <Tab.Screen name="Map" component={MapScreen} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
  </Tab.Navigator>
)
