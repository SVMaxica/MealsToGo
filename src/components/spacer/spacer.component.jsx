import styled from 'styled-components/native'

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
}

const positionVariant = {
  top: 'marginTop',
  left: 'marginLeft',
  right: 'marginRight',
  bottom: 'marginBottom',
}

const getVariant = (position, size, theme) => {
  const sizeIndex = sizeVariant[size]
  const property = positionVariant[position]
  const value = theme.space[sizeIndex]

  return `${property}:${value}`
}

export const Spacer = styled.View`
  ${({ position, size, theme }) => getVariant(position, size, theme)}
`

Spacer.defaultProps = {
  position: 'top',
  size: 'small',
}

// import React from 'react'
// import styled, { useTheme } from 'styled-components/native'
// import { View } from 'react-native'

// // Positioneringsvarianter
// const positionVariant = {
//   top: 'margin-top',
//   left: 'margin-left',
//   right: 'margin-right',
//   bottom: 'margin-bottom',
// }

// // Generera rätt style
// const getVariant = (position, size, theme) => {
//   const property = positionVariant[position] || 'margin'
//   const value = theme.spacing[size] || '0px'

//   return `${property}: ${value}`
// }

// //  Styled Spacer-komponent för spacer
// const SpacerView = styled(View)`
//   ${({ position, size, theme }) => getVariant(position, size, theme)};
// `

// export const Spacer = ({ position = 'top', size = 'small', children }) => {
//   const theme = useTheme() // ✅ Hämtar temat

//   return (
//     <SpacerView position={position} size={size} theme={theme}>
//       {children}
//     </SpacerView>
//   )
// }
