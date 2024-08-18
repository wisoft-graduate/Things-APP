import React, { useEffect, useLayoutEffect, useState } from 'react'
import { FlatList, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import SearchTextInputComp from '../Search/components/SearchTextInputComp'
import CardComp from './components/CardComp'
import AddCardComp from './components/AddCardComp'
import useGetBookmark from '../../screens/Detail/hooks/useGetBookmark'
import { userInfoStore } from '../../zustand/User'

function ListScreen() {
  const [selectedTab, setSelectedTab] = useState<string>('좋아요 순')
  const { data, refetch } = useGetBookmark()
  const bookmarkList = data?.data

  const navigation = useNavigation()
  const { data: userData } = userInfoStore()

  useEffect(() => {
    if (userData.id === '') {
      navigation.reset({ routes: [{ name: 'Home' }] })
      navigation.navigate('SignHome')
    }
  }, [data])

  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <View style={{ paddingHorizontal: 20 }}>
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
              <CardComp item={item} refetch={refetch} />
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default ListScreen
