import React from 'react'
import { SafeAreaView, StatusBar, Text, View } from 'react-native'

function MyScreen() {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />

      <View>
        <Text style={{ fontSize: 40 }}>MyScreen</Text>
      </View>
    </SafeAreaView>
  )
}

export default MyScreen
