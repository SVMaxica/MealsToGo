import styled from 'styled-components/native'
import { View, StyleSheet } from 'react-native'

const CardContainer = styled(View)`
  background-color: ${({ theme }) => theme.colors.bg.primary};
  border-radius: 10px;
  padding: 16px;
  margin: 8px;
`

const shadowStyles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3, // Android-skuggor
  },
})

export const Card = ({ children, style }) => {
  return (
    <CardContainer style={[shadowStyles.shadow, style]}>
      {children}
    </CardContainer>
  )
}
