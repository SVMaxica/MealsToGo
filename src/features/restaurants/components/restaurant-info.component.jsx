import React from 'react'
//import { View } from 'react-native'
//import { Card } from '../../../components/card/card.component'
import { Text } from '../../../components/typography/text.component'
import { Spacer } from '../../../components/spacer/spacer.component'
//import { StarIcon } from '../../../components/star.component'
import { SvgXml } from 'react-native-svg'
import star from '../../../../assets/star'
import open from '../../../../assets/open'
//import defaultImage from '../../../../assets/images/restaurant-placeholder.jpg'
//import styled from 'styled-components/native'

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

// // ✅ Använd `styled.Image`
// const RestaurantImage = styled.Image`
//   width: 100%;
//   height: 200px;
//   border-radius: 10px;
// `

// // ✅ Öppet/stängt status
// const StatusBadge = styled.View`
//   background-color: ${(props) => (props.isOpenNow ? 'green' : 'red')};
//   padding: 5px 10px;
//   border-radius: 5px;
// `

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
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
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
//   return (
//     <Card>
//       <View style={{ position: 'relative' }}>
//         <RestaurantImage
//           source={{ uri: photos.length ? photos[0] : defaultImage }}
//         />
//       </View>

//       <Spacer variant="large" />
//       <Text variant="title">{name}</Text>

//       <Spacer variant="small" />

//       {/* ⭐ Stjärnor + Open/Closed status */}
//       <View
//         style={{
//           flexDirection: 'row',
//           alignItems: 'center',
//           justifyContent: 'space-between',
//         }}
//       >
//         <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//           {ratingArray.map((_, i) => (
//             // <StarIcon key={index} width={20} height={20} />
//             <SvgXml
//               key={`star-${placeId}-${i}`}
//               xml={star}
//               width={20}
//               height={20}
//             />
//           ))}
//         </View>
//         {isClosedTemporarily && <Text variant="error">CLOSED TEMPORARILY</Text>}
//         {/* 🛑 Färgkodad öppet/stängt-status */}
//         <StatusBadge isOpenNow={isOpenNow}>
//           <Text
//             variant="caption"
//             style={{ color: 'white', fontWeight: 'bold' }}
//           >
//             {isOpenNow ? 'Open' : 'Closed'}
//           </Text>
//         </StatusBadge>
//       </View>

//       <Spacer variant="small" />
//       <Text variant="caption">{address}</Text>
//     </Card>
//   )
// }
