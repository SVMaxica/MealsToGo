import styled from 'styled-components/native'

const sizeVariant = {
  small: '4px',
  medium: '8px',
  large: '16px',
}

const getVariant = (variant) => sizeVariant[variant] || '0px'

export const Spacer = styled.View`
  margin: ${({ variant }) => getVariant(variant)};
`
