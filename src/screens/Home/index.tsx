import React, { useEffect, useState } from 'react'
import { SafeAreaView, StatusBar, Text, View } from 'react-native'
import * as ThingsAPI from '../../api/index'
import DetailScreen from '../../screens/Detail'

function HomeScreen() {
  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <View>
        <Text style={{ fontSize: 40 }}>HomeScreen</Text>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
