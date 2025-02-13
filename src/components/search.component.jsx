import React, { useContext, useState, useEffect } from 'react'

import { LocationContext } from '../services/location/location.context'
import styled from 'styled-components/native'
import { Searchbar } from 'react-native-paper'

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  //background-color: ${({ theme }) => theme.colors.bg.primary};
`

export const Search = () => {
  const { keyword, search } = useContext(LocationContext)
  const [searchKeyword, setSearchKeyword] = useState(keyword)

  useEffect(() => {
    search(searchKeyword)
  }, [])

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword)
        }}
        onChangeText={(text) => {
          setSearchKeyword(text)
        }}
      />
    </SearchContainer>
  )
}

//import { TextInput, View } from 'react-native'
// const SearchBar = () => {
//   const [searchQuery, setSearchQuery] = useState('')
//   const { search } = useContext(LocationContext)

//   const handleSearch = () => {
//     search(searchQuery)
//   }

//   return (
//     <View style={{ padding: 16 }}>
//       <TextInput
//         placeholder="Search for a location"
//         value={searchQuery}
//         onChangeText={(text) => setSearchQuery(text)}
//         onSubmitEditing={handleSearch}
//         style={{
//           backgroundColor: '#fff',
//           padding: 10,
//           borderWidth: 1,
//           borderColor: '#ccc',
//           borderRadius: 5,
//           shadowColor: '#000',
//           shadowOffset: { width: 0, height: 2 },
//           shadowOpacity: 0.1,
//           shadowRadius: 4,
//           elevation: 3,
//         }}
//       />
//     </View>
//   )
// }

// export default SearchBar
