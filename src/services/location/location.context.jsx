import React, { useState, useEffect } from 'react'

import { locationRequest, locationTransform } from './location.service'

export const LocationContext = React.createContext()

export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState('San Francisco')
  const [location, setLocation] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const onSearch = (searchKeyword) => {
    setIsLoading(true)
    setKeyword(searchKeyword)
  }

  useEffect(() => {
    if (!keyword.length) {
      // don't do anything
      return
    }
    locationRequest(keyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false)
        setLocation(result)
        console.log(result)
      })
      .catch((err) => {
        setIsLoading(false)
        setError(err)
      })
  }, [keyword])

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        search: onSearch,
        keyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  )
}

// import React, { createContext, useState, useEffect } from 'react'
// import { locationRequest, locationTransform } from './location.service'

// export const LocationContext = createContext()

// export const LocationContextProvider = ({ children }) => {
//   const [keyword, setKeyword] = useState('San Francisco')
//   const [location, setLocation] = useState(null)
//   const [isLoading, setIsLoading] = useState(false)
//   const [error, setError] = useState(null)

//   const onSearch = (searchKeyword) => {
//     setIsLoading(true)
//     setKeyword(searchKeyword)
//     if (!searchKeyword.length) {
//       // // Om inget sökord är angivet, avbryt operationen för att undvika onödig belastning
//       // setIsLoading(false)
//       return
//     }
//     locationRequest(searchKeyword.toLowerCase())
//       .then(locationTransform)
//       .then((result) => {
//         setIsLoading(false)
//         setLocation(result)
//         console.log(result)
//       })
//       .catch((err) => {
//         setIsLoading(false)
//         setError(err)
//         console.error('Error fetching location:', err)
//       })
//   }

//   // useEffect(() => {
//   //   onSearch(keyword) // Initial sökning när komponenten laddas
//   // }, [])

//   return (
//     <LocationContext.Provider
//       value={{
//         isLoading,
//         error,
//         location,
//         search: onSearch,
//         keyword,
//       }}
//     >
//       {children}
//     </LocationContext.Provider>
//   )
// }
