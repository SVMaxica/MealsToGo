import { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';
import { StatusBar } from 'react-native';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';

// Styled components
const SafeArea = styled.SafeAreaView`
  flex: 1;
  margin-top: ${StatusBar.currentHeight || 0}px;
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const ListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

export const RestaurantsScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </SearchContainer>
      <ListContainer>
        <RestaurantInfoCard />
      </ListContainer>
    </SafeArea>
  );
};
