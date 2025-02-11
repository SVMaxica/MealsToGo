import React from 'react'
import { useTheme } from 'styled-components/native'
import styled from 'styled-components/native'
import { Text as RNText } from 'react-native'

// Standardstilar (Basstilar som används av alla varianter)
const defaultTextStyles = (theme) => `
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`

// Variant-specifika stilar
const variantStyles = {
  body: (theme) => `
    font-size: ${theme.fontSizes.body};
    font-family: ${theme.fonts.body}; 
  `,
  caption: (theme) => `
    font-size: ${theme.fontSizes.caption};
    font-family: ${theme.fonts.body}; 
    color: ${theme.colors.text.secondary};
  `,
  label: (theme) => `
    font-size: ${theme.fontSizes.button};
    font-family: ${theme.fonts.heading}; 
    font-weight: ${theme.fontWeights.medium};
  `,
  error: (theme) => `
    color: ${theme.colors.text.error};
    font-size: ${theme.fontSizes.body};
    font-family: ${theme.fonts.body}; 
    font-weight: ${theme.fontWeights.bold};
  `,
  title: (theme) => `
    font-size: ${theme.fontSizes.body}; 
    font-family: ${theme.fonts.heading};
    font-weight: ${theme.fontWeights.medium};
    margin-top: ${theme.spacing.large};
  `,
}

// Styled-component för Text
const StyledText = styled(RNText)`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ theme, variant = 'body' }) =>
    variantStyles[variant]
      ? variantStyles[variant](theme)
      : variantStyles.body(theme)}
`

// Text-komponenten
export const Text = ({ variant = 'body', children, ...props }) => {
  const theme = useTheme() // Hämta temat

  return (
    <StyledText variant={variant} {...props}>
      {children}
    </StyledText>
  )
}
