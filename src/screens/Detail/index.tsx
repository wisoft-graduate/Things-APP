import React, { useCallback, useRef } from 'react'
import { ImageBackground, SafeAreaView, StatusBar, Text, View } from 'react-native'

import CloseButton from '../../@common/components/CloseButton'
import QuoteMarkSvg from '../../assets/svgs/QuoteMarkSvg'
import PresentButton from './components/PresentButton'
import ActionButtons from './components/ActionButtons'
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import CommentsScreen from './templates/CommentsScreen'
import { useNavigation } from '@react-navigation/native'

function DetailScreen() {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null)

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present()
  }, [])

  return (
    <BottomSheetModalProvider>
      <View>
        <StatusBar barStyle="light-content" />
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
                <Text style={{ fontSize: 16, color: 'white', lineHeight: 24, fontWeight: '500' }}>
                  {'밤이 어두울수록 더 많은 것을 본다.\nThe darker it is at night See more.'}
                </Text>
              </View>
              <View style={{ marginHorizontal: 40, marginTop: 7, alignSelf: 'flex-end' }}>
                <Text style={{ fontSize: 12, color: 'white', lineHeight: 20, fontWeight: '400' }}>- 에디슨 -</Text>
              </View>
              <View style={{ position: 'absolute', bottom: 35, right: 20, marginLeft: 20 }}>
                <ActionButtons handlePresentModalPress={handlePresentModalPress} />
              </View>
              <View style={{ position: 'absolute', bottom: 20, marginLeft: 20 }}>
                <PresentButton />
              </View>
            </View>
          </SafeAreaView>
        </ImageBackground>
      </View>
      <CommentsScreen bottomSheetModalRef={bottomSheetModalRef} />
    </BottomSheetModalProvider>
  )
}

export default DetailScreen
