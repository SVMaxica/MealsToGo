import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
// import { RestaurantsScreen } from '@/src/features/restaurants/screens/restaurant.screen';
import { RestaurantsScreen } from '../src/features/restaurants/screens/restaurant.screen';

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { View, Text } from 'react-native';

export default function Index(): JSX.Element {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Laddar typsnitt...</Text>
      </View>
    );
  }

  return (
    <>
      <RestaurantsScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
