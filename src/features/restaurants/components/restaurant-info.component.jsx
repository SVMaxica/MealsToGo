import { View, Image } from 'react-native'
import { Card } from '../../../components/card/card.component'
import { Text } from '../../../components/text/text.component'
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
  } = restaurant

  const imageSource = photos.length > 0 ? photos[0] : defaultImage
  const ratingArray = Array.from({ length: Math.floor(rating) })

  return (
    <Card>
      <Image
        source={imageSource}
        style={{ width: '100%', height: 150, borderRadius: 10 }}
      />

      <Spacer variant="medium" />
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

// import { View, Image } from 'react-native'
// import { SvgXml } from 'react-native-svg'
// import { Card } from '../../../components/card/card.component'
// import { Text } from '../../../components/text/text.component'
// import { Spacer } from '../../../components/spacer/spacer.component'
// import { StarIcon } from '../../../components/star.component'
// import defaultImage from '../../../../assets/images/restaurant-placeholder.jpg'

// export const RestaurantInfo = ({ restaurant }) => {
//   console.log('Restaurant data:', restaurant)

//   const {
//     name = 'Namn saknas',
//     photos = [],
//     address = 'Adress saknas',
//     rating = 4, // 🛠 Fix: Säkerställ att `rating` alltid har ett numeriskt värde
//     isOpenNow = true,
//   } = restaurant

//   const imageSource = photos && photos.length > 0 ? photos[0] : defaultImage

//   // 🛠 Säkerställ att ratingArray alltid skapas korrekt
//   const ratingArray = rating
//     ? Array.from({ length: Math.floor(rating) }, (_, i) => i)
//     : []

//   console.log('Rating array:', ratingArray) // 🛠 Debugga arrayen

//   return (
//     <Card>
//       <Image
//         source={imageSource}
//         style={{ width: '100%', height: 150, borderRadius: 10 }}
//       />

//       <Spacer variant="medium" />
//       <Text variant="title">{name}</Text>
//       <Spacer variant="small" />
//       <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//         {ratingArray.map((_, index) => (
//           <StarIcon key={index} width={20} height={20} />
//         ))}
//       </View>
//       {/* Stjärnor & Open/Closed Status */}
//       <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//         {ratingArray.length > 0 ? (
//           ratingArray.map((index) => (
//             <SvgXml key={index} xml={StarIcon} width={20} height={20} />
//           ))
//         ) : (
//           <Text variant="caption">No Ratings</Text> // 🛠 Om ingen rating finns
//         )}

//         <View
//           style={{
//             backgroundColor: isOpenNow ? 'green' : 'red',
//             paddingHorizontal: 10,
//             paddingVertical: 5,
//             borderRadius: 5,
//             marginLeft: 10,
//           }}
//         >
//           <Text
//             variant="caption"
//             style={{ color: 'white', fontWeight: 'bold' }}
//           >
//             {isOpenNow ? 'Open' : 'Closed'}
//           </Text>
//         </View>
//       </View>

//       <Spacer variant="small" />
//       <Text variant="caption">{address}</Text>
//     </Card>
//   )
// }
