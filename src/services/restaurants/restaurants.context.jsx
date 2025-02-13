import { useState, useContext, createContext, useEffect, useMemo } from 'react'
import { restaurantsRequest, restaurantsTransform } from './restaurants.service'
import { LocationContext } from '../location/location.context'

export const RestaurantsContext = createContext()

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const { location } = useContext(LocationContext)

  const retrieveRestaurants = (loc) => {
    setIsLoading(true)
    setRestaurants([])

    setTimeout(() => {
      restaurantsRequest(loc)
        .then(restaurantsTransform)
        .then((results) => {
          setIsLoading(false)
          setRestaurants(results)
        })
        .catch((err) => {
          setIsLoading(false)
          setError(err)
        })
    }, 2000)
  }
  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`
      retrieveRestaurants(locationString)
    }
  }, [location])

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  )
}

// export const RestaurantsContext = createContext()

// export const RestaurantsContextProvider = ({ children }) => {
//   const [restaurants, setRestaurants] = useState([])
//   const [isLoading, setIsLoading] = useState(false)
//   const [error, setError] = useState(null)
//   const { location } = useContext(LocationContext)

//   const retrieveRestaurants = () => {
//     setIsLoading(true)

//     setTimeout(() => {
//       restaurantsRequest()
//         .then(restaurantsTransform)
//         .then((results) => {
//           // ✅ Kontrollera om datan faktiskt förändrats innan vi uppdaterar state
//           if (JSON.stringify(restaurants) !== JSON.stringify(results)) {
//             setRestaurants(results)
//           }

//           setIsLoading(false)
//         })
//         .catch((err) => {
//           setError(err)
//           setIsLoading(false)
//         })
//     }, 2000)
//   }

//   useEffect(() => {
//     retrieveRestaurants()
//   }, [])

//   const memoizedRestaurants = useMemo(() => restaurants, [restaurants]) // ✅ Förhindra onödiga om-renderingar

//   return (
//     <RestaurantsContext.Provider
//       value={{ restaurants: memoizedRestaurants, isLoading, error }}
//     >
//       {children}
//     </RestaurantsContext.Provider>
//   )
// }
