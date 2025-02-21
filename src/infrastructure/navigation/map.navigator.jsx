import React from 'react'
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack'
import { MapScreen } from '../../features/map/screens/map.screen'
import { RestaurantDetailScreen } from '../../features/restaurants/screens/restaurant-detail.screen'

const MapStack = createStackNavigator()

export const MapNavigator = () => (
  <MapStack.Navigator
    screenOptions={{
      headerShown: false,
      ...TransitionPresets.ModalPresentationIOS, // 👈 Gör att skärmen kommer upp som en modal
    }}
  >
    <MapStack.Screen name="MapScreen" component={MapScreen} />
    <MapStack.Screen
      name="RestaurantDetail"
      component={RestaurantDetailScreen}
    />
  </MapStack.Navigator>
)
