import camelize from 'camelize'
import { mocks, mockImages } from '../../../utils/mock/index'

export const restaurantsRequest = (location = '51.219448,4.402464') => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location]
    if (!mock) {
      reject('Not found')
    }
    resolve(mock)
  })
}

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      photos: restaurant.photos?.map(() => {
        return mockImages[Math.floor(Math.random() * mockImages.length)]
      }),
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours?.open_now ?? false,
      isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY',
    }
  })

  return camelize(mappedResults)
}
