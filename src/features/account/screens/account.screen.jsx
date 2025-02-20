import React, { useRef, useEffect } from 'react'
import LottieView from 'lottie-react-native'
import { Spacer } from '../../../components/spacer/spacer.component'
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  Title,
  AnimationWrapper,
} from '../components/account.styles'

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <AnimationWrapper>
        <LottieView
          autoPlay
          loop
          source={require('../../../../assets/watermelon.json')}
          style={{
            flex: 1,
            width: '100%',
            height: '100%',
          }}
        />
      </AnimationWrapper>
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate('Login')}
        >
          Login
        </AuthButton>
        <Spacer size="large">
          <AuthButton
            icon="email"
            mode="contained"
            onPress={() => navigation.navigate('Register')}
          >
            Register
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  )
}
