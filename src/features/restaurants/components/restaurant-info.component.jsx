import React from 'react'
import { View } from 'react-native'
import { Card } from '../../../components/card/card.component'
import { Text } from '../../../components/typography/text.component'
import { Spacer } from '../../../components/spacer/spacer.component'
import { StarIcon } from '../../../components/star.component'
import defaultImage from '../../../../assets/images/restaurant-placeholder.jpg'
import styled from 'styled-components/native'

// ✅ Använd `styled.Image`
const RestaurantImage = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 10px;
`

// ✅ Öppet/stängt status
const StatusBadge = styled.View`
  background-color: ${(props) => (props.isOpenNow ? 'green' : 'red')};
  padding: 5px 10px;
  border-radius: 5px;
`

export const RestaurantInfo = ({ restaurant }) => {
  const {
    name = 'Namn saknas',
    photos = [],
    address = 'Adress saknas',
    rating = 4,
    isOpenNow = false,
    isClosedTemporarily = false,
  } = restaurant

  const ratingArray = Array.from({ length: Math.floor(rating) })

  return (
    <Card>
      <View style={{ position: 'relative' }}>
        <RestaurantImage
          source={{ uri: photos.length ? photos[0] : defaultImage }}
        />
      </View>

      <Spacer variant="large" />
      <Text variant="title">{name}</Text>

      <Spacer variant="small" />

      {/* ⭐ Stjärnor + Open/Closed status */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {ratingArray.map((_, index) => (
            <StarIcon key={index} width={20} height={20} />
          ))}
        </View>
        {isClosedTemporarily && <Text variant="error">CLOSED TEMPORARILY</Text>}
        {/* 🛑 Färgkodad öppet/stängt-status */}
        <StatusBadge isOpenNow={isOpenNow}>
          <Text
            variant="caption"
            style={{ color: 'white', fontWeight: 'bold' }}
          >
            {isOpenNow ? 'Open' : 'Closed'}
          </Text>
        </StatusBadge>
      </View>

      <Spacer variant="small" />
      <Text variant="caption">{address}</Text>
    </Card>
  )
}
