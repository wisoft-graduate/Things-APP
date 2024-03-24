import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DetailScreen from '../../../screens/Detail'
import SearchScreen from '../../../screens/Search'

const SearchStack = createNativeStackNavigator()

function SearchNavigator() {
  return (
    <SearchStack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerShown: false,
      }}>
      <SearchStack.Screen name="Main" component={SearchScreen} />
      <SearchStack.Screen name="Detail" component={DetailScreen} />
    </SearchStack.Navigator>
  )
}

export default SearchNavigator
