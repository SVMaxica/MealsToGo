import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { RestaurantsScreen } from '@/src/features/restaurants/screens/restaurant.screen';

export default function Index(): JSX.Element {
  return (
    <>
      <RestaurantsScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
