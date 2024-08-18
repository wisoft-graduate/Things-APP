import React, { useEffect, useRef, useState } from 'react'
import { ActivityIndicator, FlatList, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from 'react-native'

import CardComp from './components/CardComp'
import SearchTextInputComp from './components/SearchTextInputComp'
import * as ThingsAPI from '../../api/index'

const tabList = ['좋아요 순', '공유 순']

function SearchScreen() {
  const [selectedTab, setSelectedTab] = useState<string>('좋아요 순')
  const [data, setData] = useState([])
  const [isShowSearchList, setIsShowSearchList] = useState(false)
  const [page, setPage] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  const flatListRef = useRef<FlatList>(null)

  const upScroll = () => {
    flatListRef.current?.scrollToOffset({ animated: false, offset: 0 })
  }

  async function fetchQuotation() {
    setIsLoading(true)
    const isLike = selectedTab === '좋아요 순'

    const res = await ThingsAPI.getQuotationRank(isLike, page)
    if (res) {
      setData([...data, ...res?.data?.quotationRanks])
    }
    setIsLoading(false)
  }

  useEffect(() => {
    if (!isShowSearchList) {
      fetchQuotation()
    }
  }, [isShowSearchList, selectedTab, page])

  useEffect(() => {
    upScroll()
    setPage(0)
    setData([])
  }, [selectedTab])

  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <View style={{ paddingHorizontal: 20 }}>
        <SearchTextInputComp setData={setData} setIsShowSearchList={setIsShowSearchList} />
        {!isShowSearchList && (
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginTop: 26 }}>
            {tabList.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => setSelectedTab(item)}
                  style={{ borderBottomWidth: selectedTab === item ? 2 : 0, paddingBottom: 5 }}>
                  <Text style={{ color: 'black', fontSize: 14, fontWeight: '400' }}>{item}</Text>
                </TouchableOpacity>
              )
            })}
          </View>
        )}
        {isLoading ? (
          <ActivityIndicator style={{ marginTop: 100 }} />
        ) : (
          <FlatList
            ref={flatListRef}
            contentContainerStyle={{
              marginTop: 15,
              justifyContent: 'space-between',
              marginRight: 10,
            }}
            numColumns={2}
            data={data}
            ListEmptyComponent={
              <View style={{ marginTop: 40 }}>
                <Text style={{ fontSize: 16, color: 'gray', fontWeight: '400' }}>결과가 없습니다.</Text>
              </View>
            }
            renderItem={({ item, index }) => <CardComp item={item} index={index} />}
            onEndReached={() => setPage(page + 1)}
            onEndReachedThreshold={0.6}
            ListFooterComponent={() => <View style={{ height: 150 }} />}
          />
        )}
      </View>
    </SafeAreaView>
  )
}

export default SearchScreen
