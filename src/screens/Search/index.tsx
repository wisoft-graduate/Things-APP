import React, { useState } from 'react'
import { SafeAreaView, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native'

import CardComp from './components/CardComp'
import SearchTextInputComp from '../../@common/components/SearchTextInputComp'

const tabList = ['조회 순', '좋아요 순', '공유 순']

function SearchScreen() {
  const [selectedTab, setSelectedTab] = useState<string>('조회 순')

  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <View style={{ paddingHorizontal: 20 }}>
        <SearchTextInputComp />
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginTop: 26 }}>
          {tabList.map(item => {
            return (
              <TouchableOpacity
                onPress={() => setSelectedTab(item)}
                style={{ borderBottomWidth: selectedTab === item ? 2 : 0, paddingBottom: 5 }}>
                <Text style={{ fontSize: 14 }}>{item}</Text>
              </TouchableOpacity>
            )
          })}
        </View>
        <ScrollView style={{}}>
          <View style={{ flexDirection: 'row', marginTop: 15, gap: 10, flexWrap: 'wrap', marginBottom: 130 }}>
            <CardComp />
            <CardComp />
            <CardComp />
            <CardComp />
            <CardComp />
            <CardComp />
            <CardComp />
            <CardComp />
            <CardComp />
            <CardComp />
            <CardComp />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default SearchScreen
