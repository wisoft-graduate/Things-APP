import React, { useCallback, useEffect, useRef, useState } from 'react'
import {
  ActivityIndicatorComponent,
  Animated,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native'
import PagerView from 'react-native-pager-view'

import CloseButton from '../../@common/components/CloseButton'
import QuoteMarkSvg from '../../assets/svgs/QuoteMarkSvg'
import PresentButton from './components/PresentButton'
import ActionButtons from './components/ActionButtons'
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import CommentsScreen from './templates/CommentsScreen'
import { useNavigation } from '@react-navigation/native'
import * as ThingsAPI from '../../api/index'

function DetailScreen() {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null)

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present()
  }, [])

  const [data, setData] = useState([])
  const [isNext, setIsNext] = useState(true)

  async function fetchQuotation() {
    try {
      const res = await ThingsAPI.getQuotation()
      if (res) {
        setData(res?.data?.quotationList)
        setIsNext(false)
        // push('BottomTabNavigator', { screen: 'Home' })
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchQuotation()
  }, [])

  function QuotationComp({ item }) {
    return (
      <ImageBackground
        style={{ width: '100%', height: '100%' }}
        source={require('../../assets/images/bg.png')}
        resizeMode="cover">
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ paddingHorizontal: 20, flex: 1 }}>
            <CloseButton />
            <View style={{ marginTop: '40%', marginLeft: 10 }}>
              <QuoteMarkSvg />
            </View>
            <View style={{ marginHorizontal: 40, marginTop: 15 }}>
              <Text numberOfLines={7} style={{ fontSize: 16, color: 'white', lineHeight: 24, fontWeight: '500' }}>
                {item?.content}
              </Text>
            </View>
            <View style={{ marginHorizontal: 40, marginTop: 7, alignSelf: 'flex-end' }}>
              <Text style={{ fontSize: 12, color: 'white', lineHeight: 20, fontWeight: '400' }}>- 에디슨 -</Text>
            </View>
            <View style={{ position: 'absolute', bottom: 35, right: 20, marginLeft: 20 }}>
              <ActionButtons handlePresentModalPress={handlePresentModalPress} item={item} />
            </View>
            <View style={{ position: 'absolute', bottom: 20, marginLeft: 20 }}>
              <PresentButton />
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    )
  }

  return (
    <BottomSheetModalProvider>
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
        <PagerView initialPage={0} orientation="vertical" style={{ flex: 1 }} useNext={isNext}>
          {data?.map((item, index) => {
            return <QuotationComp key={index} item={item} />
          })}
        </PagerView>
      </View>
      <CommentsScreen bottomSheetModalRef={bottomSheetModalRef} />
    </BottomSheetModalProvider>
  )
}

export default DetailScreen
