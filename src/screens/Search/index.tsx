import React, { useEffect, useState } from 'react'
import { FlatList, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from 'react-native'

import CardComp from './components/CardComp'
import SearchTextInputComp from '../../@common/components/SearchTextInputComp'
import * as ThingsAPI from '../../api/index'

const tabList = ['조회 순', '좋아요 순', '공유 순']

function SearchScreen() {
  const [selectedTab, setSelectedTab] = useState<string>('조회 순')
  const [data, setData] = useState([])

  async function fetchQuotation() {
    const res = await ThingsAPI.getQuotationRank()
    if (res) {
      setData(res?.data?.quotationRanks)
      // push('BottomTabNavigator', { screen: 'Home' })
    }
  }

  useEffect(() => {
    fetchQuotation()
  }, [])

  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <View style={{ paddingHorizontal: 20 }}>
        <SearchTextInputComp />
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginTop: 26 }}>
          {tabList.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => setSelectedTab(item)}
                style={{ borderBottomWidth: selectedTab === item ? 2 : 0, paddingBottom: 5 }}>
                <Text style={{ fontSize: 14 }}>{item}</Text>
              </TouchableOpacity>
            )
          })}
        </View>
        <FlatList
          contentContainerStyle={{
            flexDirection: 'row',
            marginTop: 15,
            gap: 10,
            flexWrap: 'wrap',
          }}
          data={data}
          renderItem={item => <CardComp item={item?.item} />}
          ListFooterComponent={() => <View style={{ height: 150 }} />}
        />
      </View>
    </SafeAreaView>
  )
}

export default SearchScreen
