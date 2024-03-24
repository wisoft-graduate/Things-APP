import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icons from 'react-native-vector-icons/Octicons'

import { BottomTabParamList } from 'navigation/types'
import { Colors } from '../../@common/styles/colors'
import ListScreen from '../../screens/List'
import MyScreen from '../../screens/Mypage'
import HomeNavigator from '../../navigation/stacks/homeStack'
import SearchNavigator from '../../navigation/stacks/searchStack'

function BottomTabNavigator() {
  const BottomTab = createBottomTabNavigator<BottomTabParamList>()

  return (
    <BottomTab.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        tabBarLabelStyle: { color: 'white', marginTop: -6, marginBottom: 4 },
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: '#1F1F25',
          //   borderTopColor: theme.colors.bgMuted,
        },
      }}>
      <BottomTab.Screen
        name={'Home'}
        component={HomeNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => <Icons size={20} name="home" color={focused ? Colors.green : Colors.white} />,
        }}
      />
      <BottomTab.Screen
        name={'Search'}
        component={SearchNavigator}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ focused }) => <Icons size={20} name="search" color={focused ? Colors.green : Colors.white} />,
        }}
      />
      <BottomTab.Screen
        name={'List'}
        component={ListScreen}
        options={{
          tabBarLabel: 'List',
          tabBarIcon: ({ focused }) => (
            <Icons size={20} name="bookmark" color={focused ? Colors.green : Colors.white} />
          ),
        }}
      />
      <BottomTab.Screen
        name={'My'}
        component={MyScreen}
        options={{
          tabBarLabel: 'My',
          tabBarIcon: ({ focused }) => <Icons size={20} name="person" color={focused ? Colors.green : Colors.white} />,
        }}
      />
    </BottomTab.Navigator>
  )
}
export default BottomTabNavigator
