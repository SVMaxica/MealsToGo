import { FlatList } from 'react-native'
import { RestaurantInfo } from '../components/restaurant-info.component'
import { Spacer } from '../../../components/spacer/spacer.component'
import { restaurantsData } from '../../../utils/mock/restaurantsData'

export const RestaurantScreen = () => {
  return (
    <FlatList
      data={restaurantsData}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => <RestaurantInfo restaurant={item} />}
    />
  )
}
