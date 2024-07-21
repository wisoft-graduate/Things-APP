import React, { useEffect, useLayoutEffect, useState } from 'react'
import { FlatList, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'

import SearchTextInputComp from '../../@common/components/SearchTextInputComp'
import CardComp from './components/CardComp'
import AddCardComp from './components/AddCardComp'
import useGetBookmark from '../../screens/Detail/hooks/useGetBookmark'

function ListScreen() {
  const [selectedTab, setSelectedTab] = useState<string>('좋아요 순')
  const { data } = useGetBookmark()
  const bookmarkList = data?.data

  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <View style={{ paddingHorizontal: 20 }}>
        <SearchTextInputComp />
        <ScrollView>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 15,
              gap: 15,
              flexWrap: 'wrap',
              marginBottom: 130,
              justifyContent: 'center',
            }}>
            <AddCardComp />
            {bookmarkList?.map(item => (
              <CardComp item={item} />
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default ListScreen
