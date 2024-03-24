import React, { useState } from 'react'
import { SafeAreaView, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Icons from 'react-native-vector-icons/Octicons'
import IonIcons from 'react-native-vector-icons/Ionicons'
import CardComp from './components/CardComp'

const tabList = ['조회 순', '좋아요 순', '공유 순']

function SearchScreen() {
  const [selectedTab, setSelectedTab] = useState<string>('조회 순')

  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <View style={{ paddingHorizontal: 20 }}>
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            backgroundColor: '#DDDDDD',
            height: 35,
            borderRadius: 10,
            paddingHorizontal: 20,
            alignItems: 'center',
            gap: 4,
          }}>
          <Icons name="search" size={16} color={'#8E8E93'} />
          <TextInput style={{ width: '100%' }} placeholder="저자, 명언으로 검색.." placeholderTextColor={'#767676'} />
        </View>
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
