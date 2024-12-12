import React from 'react';
import { Text, Image } from 'react-native';
import styled from 'styled-components/native';
import { Card } from 'react-native-paper';
import { DefaultTheme } from 'styled-components/native';
import { SvgXml } from 'react-native-svg';
import { Spacer } from '../../../components/spacer/spacer.component';
import star from '../../../../assets/images/star';
import open from '../../../../assets/images/open';

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

const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

// const Open = styled(SvgXml)`
//   flex-direction: row;
// `;

export const RestaurantInfoCard: React.FC<{ restaurant?: Restaurant }> = ({
  restaurant = {
    name: 'Some Restaurant',
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos: [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    ],
    address: '100 some random street',
    isOpenNow: true,
    rating: 4,
    isClosedTemporarily: false,
  },
}) => {
  const ratingArray = Array.from(new Array(Math.floor(restaurant.rating)));

  return (
    <RestaurantCard>
      <RestaurantCardCover
        key={restaurant.name}
        source={{ uri: restaurant.photos[0] }}
      />
      <Info>
        <Title>{restaurant.name}</Title>
        <Section>
          <Rating>
            {ratingArray.map((_, index) => (
              <SvgXml key={`star-${index}`} xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {restaurant.isClosedTemporarily && (
              <Text style={{ color: 'red' }}>CLOSED TEMPORARILY</Text>
            )}

            {restaurant.isOpenNow && (
              <SvgXml xml={open} width={20} height={20} />
            )}
            <Spacer margin={20}>
              <Text>Innehåll</Text>
            </Spacer>

            <Image
              style={{ width: 15, height: 15 }}
              source={{ uri: restaurant.icon }}
            />
          </SectionEnd>
        </Section>
        <Address>{restaurant.address}</Address>
      </Info>
    </RestaurantCard>
  );
};
