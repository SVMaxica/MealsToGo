import camelize from 'camelize'
import { mocks, mockImages } from '../location/index'

export const restaurantsRequest = (location = '37.7749295,-122.4194155') => {
  

  const cleanedLocation = location.replace(/['"]+/g, '').trim() // Tar bort citattecken
  

  const mock = mocks[cleanedLocation]

  return new Promise((resolve, reject) => {
    if (!mock) {
      
      reject(new Error('Not found'))
    }
    resolve(mock)
  })
}

export const restaurantsTransform = ({ results = [] }) => {
  if (!results || !Array.isArray(results)) {
    
    throw new Error('Not found')
  }

  

  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      photos: restaurant.photos?.map(() => {
        return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))] // Random bild
      }) ?? [mockImages[0]], // Default bild om ingen finns
      isOpenNow: restaurant.opening_hours?.open_now ?? false,
      isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY',
      address: restaurant.vicinity ?? 'Adress saknas',
    }
  })

  return camelize(mappedResults)
}

