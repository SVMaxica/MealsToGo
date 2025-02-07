const defaultImage = require('../../../assets/images/restaurant-placeholder.jpg')

export const restaurantsData = [
  {
    name: 'Fancy Restaurant',
    address: '123 Street, City',
    photos: [{ uri: 'https://media.gettyimages.com/id/1316145932/sv/foto/bordsvy-av-kryddig-mat.jpg?s=2048x2048&w=gi&k=20&c=FVjWjypY1GSdHuuUP2wvZtj_evYBSKocjUzayIUByFA=' }], 
    rating: 4.5,
    isOpenNow: true,
    isClosedTemporarily: true,
  },
  {
    name: 'Tasty Bites',
    address: '456 Avenue, Town',
    photos: [{ uri: 'https://media.gettyimages.com/id/1316145932/sv/foto/bordsvy-av-kryddig-mat.jpg?s=2048x2048&w=gi&k=20&c=FVjWjypY1GSdHuuUP2wvZtj_evYBSKocjUzayIUByFA=' }], // Använd `{ uri: 'URL' }`
    rating: 3.8,
    isOpenNow: false,
    isClosedTemporarily: false,
  },
  {
    name: 'Local Diner',
    address: '789 Road, Village',
    photos: [], // Om tomt, fallback används i `RestaurantInfo.jsx`
    rating: 4,
    isOpenNow: true,
    isClosedTemporarily: false,
  },
]

