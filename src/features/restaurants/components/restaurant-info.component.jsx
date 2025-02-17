import React from 'react'
import { Text } from '../../../components/typography/text.component'
import { Spacer } from '../../../components/spacer/spacer.component'
import { SvgXml } from 'react-native-svg'
import star from '../../../../assets/star'
import open from '../../../../assets/open'
import { View } from 'react-native'
import { Favourite } from '../../../components/favourites/favourites.component'

import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  SectionEnd,
  Rating,
  Icon,
  Address,
} from './restaurant-info-card.styles'

export const RestaurantInfo = ({ restaurant }) => {
  const {
    name = 'Some restaurant',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = [],
    address = 'Adress saknas',
    rating = 4,
    isOpenNow = false,
    isClosedTemporarily = false,
    placeId,
  } = restaurant

  const ratingArray = Array.from({ length: Math.floor(rating) })

  return (
    <RestaurantCard elevation={5}>
      <View>
        <Favourite restaurant={restaurant} />
        <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      </View>
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, i) => (
              <SvgXml
                key={`star-${placeId}-${i}`}
                xml={star}
                width={20}
                height={20}
              />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  )
}
