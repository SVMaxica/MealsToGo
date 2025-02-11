import React, { useState } from 'react'
import { FlatList } from 'react-native'
import { Searchbar } from 'react-native-paper'
import styled from 'styled-components/native'
import { RestaurantInfo } from '../components/restaurant-info.component'
import { Spacer } from '../../../components/spacer/spacer.component'
import { restaurantsData } from '../../../utils/mock/restaurantsData'

const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
`

const SearchContainer = styled.View`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.spacing[3] || '16px'};
  border-radius: 5px;
`

const StyledSearchbar = styled(Searchbar)`
  background-color: #f0f0f0;
  border-radius: 0px;
  elevation: 3; /* Skugga på Android */
  /* Skugga på iOS */
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.2;
  shadow-radius: 4px;
`

const RestaurantScreen = () => {
  const [searchQuery, setSearchQuery] = useState('') // Hantera söksträngen
  const [filteredData, setFilteredData] = useState(restaurantsData) // Hantera filtrerad data

  const onSearchChange = (query) => {
    setSearchQuery(query)

    // Filtrera restauranger baserat på söksträngen
    const filtered = restaurantsData.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(query.toLowerCase())
    )
    setFilteredData(filtered)
  }

  return (
    <SafeArea>
      {/* Sökbar högst upp */}
      <SearchContainer>
        <StyledSearchbar
          placeholder="Search for restaurants"
          value={searchQuery}
          onChangeText={onSearchChange}
        />
      </SearchContainer>

      {/* Lista med restauranger */}
      <FlatList
        data={filteredData} // Använd den filtrerade datan
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <Spacer position="bottom" size="large">
            <RestaurantInfo restaurant={item} />
          </Spacer>
        )}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      />
    </SafeArea>
  )
}
export default RestaurantScreen

// import { FlatList } from 'react-native'
// import { RestaurantInfo } from '../components/restaurant-info.component'
// import { Spacer } from '../../../components/spacer/spacer.component'
// import { restaurantsData } from '../../../utils/mock/restaurantsData'

// export const RestaurantScreen = () => {
//   return (
//     <FlatList
//       data={restaurantsData}
//       keyExtractor={(item) => item.name}
//       renderItem={({ item }) => <RestaurantInfo restaurant={item} />}
//     />
//   )
// }
