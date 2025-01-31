import styled from 'styled-components/native'
import { Text as RNText } from 'react-native'

const defaultTextStyles = (theme) => `
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
`

const variantStyles = {
  body: (theme) => `
    font-size: ${theme.fontSizes.body};
  `,
  caption: (theme) => `
    font-size: ${theme.fontSizes.caption};
    color: ${theme.colors.text.secondary};
  `,
  label: (theme) => `
    font-size: ${theme.fontSizes.button};
    font-weight: ${theme.fontWeights.medium};
  `,
}

// ✅ Logga ut värden för felsökning
console.log('Default variant:', 'body')
console.log('variantStyles:', variantStyles)
console.log('variantStyles.body:', variantStyles.body)

export const Text = styled(RNText)`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ theme, variant = 'body' }) =>
    variantStyles[variant]
      ? variantStyles[variant](theme)
      : variantStyles.body(theme)}
`

Text.defaultProps = {
  variant: 'body',
}
