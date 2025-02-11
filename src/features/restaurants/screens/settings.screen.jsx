import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'

const SafeArea = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.bg.primary};
`

const SettingsScreen = () => {
  return (
    <SafeArea>
      <Text>Settings Screen</Text>
    </SafeArea>
  )
}

export default SettingsScreen
