import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import MyScreen from '../../../screens/Mypage'
import SettingScreen from '../../../screens/Mypage/templates/SettingScreen'
import ProfileEditScreen from '../../../screens/Mypage/templates/ProfileEditScreen'
import PushScreen from '../../../screens/Mypage/templates/PushScreen'
import PasswordChangeScreen from '../../../screens/Mypage/templates/PasswordChangeScreen'
import WithdrawalScreen from '../../../screens/Mypage/templates/WithdrawalScreen'

const UserStack = createNativeStackNavigator()

function UserNavigator() {
  return (
    <UserStack.Navigator
      initialRouteName="User"
      screenOptions={{
        headerShown: false,
      }}>
      <UserStack.Screen name="User" component={MyScreen} />
      <UserStack.Group
        screenOptions={{
          headerShown: true,
          headerShadowVisible: true,
          headerTintColor: 'black',
          headerTitleStyle: { fontSize: 16 },
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,
        }}>
        <UserStack.Screen name="Setting" component={SettingScreen} options={{ headerTitle: '설정' }} />
        <UserStack.Screen name="ProfileEdit" component={ProfileEditScreen} options={{ headerTitle: '프로필 수정' }} />
        <UserStack.Screen name="Push" component={PushScreen} options={{ headerTitle: '알림' }} />
        <UserStack.Screen name="PasswordChange" component={PasswordChangeScreen} options={{ headerTitle: '' }} />
        <UserStack.Screen name="Withdrawal" component={WithdrawalScreen} options={{ headerTitle: '회원탈퇴' }} />
      </UserStack.Group>
    </UserStack.Navigator>
  )
}

export default UserNavigator
