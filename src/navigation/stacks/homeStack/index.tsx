import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DetailScreen from '../../../screens/Detail'
import HomeScreen from '../../../screens/Home'

const UserStack = createNativeStackNavigator()

function HomeNavigator() {
  return (
    <UserStack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerShown: false,
      }}>
      <UserStack.Screen name="Main" component={HomeScreen} />
      <UserStack.Screen name="Detail" component={DetailScreen} />
    </UserStack.Navigator>
  )
}

export default HomeNavigator
