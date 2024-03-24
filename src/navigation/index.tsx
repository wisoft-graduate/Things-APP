import React from 'react'
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import BottomTabNavigator from './bottomTabs'
import { RootStackParamList } from './types'
import SignHomeScreen from '../screens/SignIn'
import SignUpScreen from '../screens/SignIn/templates/SignUpScreen'

const navigationRef = createNavigationContainerRef()

function RootNavigator() {
  const Root = createNativeStackNavigator<RootStackParamList>()

  return (
    <Root.Navigator
      screenOptions={{
        headerShown: false,
        headerShadowVisible: false,
      }}
      initialRouteName={'SignHome'}>
      <Root.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      {/* <Root.Screen name="Error" component={ErrorScreen} /> */}
      <Root.Screen name="SignHome" component={SignHomeScreen} />
      <Root.Screen name="SignUp" component={SignUpScreen} />
    </Root.Navigator>
  )
}

function Navigator() {
  return (
    <NavigationContainer
      ref={navigationRef}
      // theme={{
      //   dark: isDark,
      //   colors: {
      //     background: theme.colors?.bgDefault,
      //     primary: theme.colors?.green,
      //     card: theme.colors?.bgMuted,
      //     text: theme.colors?.ftDefault,
      //     border: theme.colors?.bgMuted,
      //     notification: theme.colors?.bgDefault,
      //   },
      // }}
      onReady={() => {
        // BootSplash.hide();
      }}>
      <RootNavigator />
    </NavigationContainer>
  )
}

export default Navigator
