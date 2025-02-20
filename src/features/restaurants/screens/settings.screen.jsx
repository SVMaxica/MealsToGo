import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'
import { AccountNavigator } from '../../../infrastructure/navigation/account.navigator'

const SafeArea = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.bg.primary};
`

const SettingsScreen = () => {
  return <AccountNavigator />
}

export default SettingsScreen
