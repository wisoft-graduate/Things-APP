import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import MyScreen from '../../../screens/Mypage'
import SettingScreen from '../../../screens/Mypage/templates/SettingScreen'
import ProfileEditScreen from '../../../screens/Mypage/templates/ProfileEditScreen'
import PushScreen from '../../../screens/Mypage/templates/PushScreen'

const UserStack = createNativeStackNavigator()

function UserNavigator() {
  return (
    <UserStack.Navigator
      initialRouteName="User"
      screenOptions={{
        headerShown: false,
      }}>
      <UserStack.Screen name="User" component={MyScreen} />
      <UserStack.Screen name="Setting" component={SettingScreen} />
      <UserStack.Screen name="ProfileEdit" component={ProfileEditScreen} />
      <UserStack.Screen name="Push" component={PushScreen} />
    </UserStack.Navigator>
  )
}

export default UserNavigator
