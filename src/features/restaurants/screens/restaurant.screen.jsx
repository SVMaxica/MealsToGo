import React, { useContext, useState } from 'react'
import { FlatList, ActivityIndicator, TouchableOpacity } from 'react-native'
import { Search } from '../components/search.component'
import styled from 'styled-components/native'
import { RestaurantDetailScreen } from '../screens/restaurant-detail.screen'
import { Spacer } from '../../../components/spacer/spacer.component'
import { SafeArea } from '../../../components/utility/safe-area.component'
import { FavouritesBar } from '../../../components/favourites/favourites-bar.component'
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context'
import { RestaurantInfo } from '../components/restaurant-info.component'
import { FavouritesContext } from '../../../services/favourites/favourites.context'

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`

export const RestaurantScreen = ({ navigation }) => {
  const { restaurants, isLoading } = useContext(RestaurantsContext) // ✅ Hämta restauranger från context
  const { favourites } = useContext(FavouritesContext)
  const [isToggled, setIsToggled] = useState(false)

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color="#0152a8" />
        </LoadingContainer>
      )}
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}

      {/* Lista med restauranger */}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('RestaurantDetail', {
                  restaurant: item,
                })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfo restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          )
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  )
}
export default RestaurantScreen
