import React from 'react';
import styled from 'styled-components/native';
import { Card } from 'react-native-paper';
import { DefaultTheme } from 'styled-components/native';

interface Restaurant {
  name: string;
  photos: string[];
  address: string;
  isOpenNow: boolean;
  rating: number;
  isClosedTemporarily?: boolean;
  icon?: string;
}

// Styled components
const RestaurantCard = styled(Card).attrs({
  elevation: 5,
})<{ theme: DefaultTheme }>`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)<{ theme: DefaultTheme }>`
  padding: ${(props) => props.theme.space[0]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Title = styled.Text`
  padding: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.ui.primary};
`;

export const RestaurantInfoCard: React.FC<{ restaurant?: Restaurant }> = ({
  restaurant = {
    name: 'Some Restaurant',
    icon: 'https://example.com/default-icon.png',
    photos: [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    ],
    address: '100 some random street',
    isOpenNow: true,
    rating: 4,
    isClosedTemporarily: false,
  },
}) => {
  return (
    <RestaurantCard>
      <RestaurantCardCover
        key={restaurant.name}
        source={{ uri: restaurant.photos[0] }}
      />
      <Title>{restaurant.name}</Title>
    </RestaurantCard>
  );
};
