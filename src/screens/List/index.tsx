import React from 'react'
import { SafeAreaView, StatusBar, Text, View } from 'react-native'

function ListScreen() {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />

      <View>
        <Text style={{ fontSize: 40 }}>ListScreen</Text>
      </View>
    </SafeAreaView>
  )
}

export default ListScreen
