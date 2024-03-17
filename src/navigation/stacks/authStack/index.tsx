import React from 'react'
import { useTheme } from '@emotion/react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { AuthStackParamList } from 'navigators/types'
import LoginScreen from '@screens/User/LoginAndProfile/Login'
import SignupTermsScreen from '@screens/User/LoginAndProfile/Signup'
import TermsDetailScreen from '@screens/User/LoginAndProfile/Signup/templates/TermsDetailScreen'
import EnterInfoScreen from '@screens/User/LoginAndProfile/Signup/templates/EnterInfoScreen'

const AuthStack = createNativeStackNavigator<AuthStackParamList>()

function AuthNavigator() {
  const theme = useTheme()

  return (
    <AuthStack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.bgDefault },
        headerShown: false,
      }}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="SignupTerms" component={SignupTermsScreen} />
      <AuthStack.Screen
        name="SignupTermsDetail"
        component={TermsDetailScreen}
        options={{
          presentation: 'modal',
          headerTintColor: theme.colors.ftTitle,
          headerTitleStyle: { fontSize: 16 },
          headerTitleAlign: 'center',
        }}
      />
      <AuthStack.Screen
        name="EnterInfo"
        component={EnterInfoScreen}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTintColor: theme.colors.ftTitle,
          title: '',
          headerBackTitleVisible: false,
        }}
      />
    </AuthStack.Navigator>
  )
}

export default AuthNavigator
