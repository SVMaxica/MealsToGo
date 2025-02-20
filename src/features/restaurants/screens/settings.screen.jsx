import React, { useContext } from 'react'
import { Text, Button } from 'react-native'
import { AuthenticationContext } from '../../../services/authentication/authentication.context'
import { SafeArea } from '../../../components/utility/safe-area.component'

const SettingsScreen = () => {
  const { onLogout } = useContext(AuthenticationContext)
  return (
    <SafeArea>
      <Text>Settings</Text>
      <Button title="logout" onPress={() => onLogout()} />
    </SafeArea>
  )
}
export default SettingsScreen
