import { View, Image } from 'react-native'
import { Card } from '../../../components/card/card.component'
import { Text } from '../../../components/typography/text.component'
import { Spacer } from '../../../components/spacer/spacer.component'
import { StarIcon } from '../../../components/star.component'
import defaultImage from '../../../../assets/images/restaurant-placeholder.jpg'

export const RestaurantInfo = ({ restaurant }) => {
  const {
    name = 'Namn saknas',
    photos = [],
    address = 'Adress saknas',
    rating = 4,
    isOpenNow = true,
    isClosedTemporarily = false,
  } = restaurant

  const imageSource = photos.length > 0 ? photos[0] : defaultImage
  const ratingArray = Array.from({ length: Math.floor(rating) })

  return (
    <Card>
      <Image
        source={imageSource}
        style={{ width: '100%', height: 150, borderRadius: 10 }}
      />

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
        {/* Temporärt stängd text */}
        {isClosedTemporarily && <Text variant="error">CLOSED TEMPORARILY</Text>}

        <View
          style={{
            backgroundColor: isOpenNow ? 'green' : 'red',
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderRadius: 5,
          }}
        >
          <Text
            variant="caption"
            style={{ color: 'white', fontWeight: 'bold' }}
          >
            {isOpenNow ? 'Open' : 'Closed'}
          </Text>
        </View>
      </View>

      <Spacer variant="small" />
      <Text variant="caption">{address}</Text>
    </Card>
  )
}
