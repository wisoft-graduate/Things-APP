import React, { useCallback, useRef } from 'react'
import { ImageBackground, SafeAreaView, StatusBar, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet'

import ButtonComp from '../../@common/components/ButtonComp'
import { Colors } from '../../@common/styles/colors'
import SignInScreen from './templates/SignInScreen'

function SignHomeScreen() {
  const navigation = useNavigation()
  const bottomSheetModalRef = useRef<BottomSheetModal>(null)

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present()
  }, [])

  return (
    <BottomSheetModalProvider>
      <ImageBackground
        style={{ width: '100%', height: '100%' }}
        source={require('../../assets/images/bg.png')}
        resizeMode="cover">
        {/* <SafeAreaView style={{ flex: 1, backgroundColor: '#3B3B3B' }}> */}
        <StatusBar barStyle="light-content" />

        <View
          style={{
            zIndex: 10,
            flex: 1,
            paddingHorizontal: 40,
            paddingVertical: 20,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View />
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 18, color: Colors.white }}>안녕하세요!</Text>
            <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
              <Text
                style={{
                  fontSize: 42,
                  color: Colors.white,
                }}>
                Things
              </Text>
              <Text style={{ fontSize: 18, color: Colors.white }}>입니다.</Text>
            </View>
          </View>
          <View style={{ width: '100%', gap: 20, marginBottom: 40 }}>
            <ButtonComp isHomeButton text="로그인" func={handlePresentModalPress} />
            <ButtonComp
              isHomeButton
              text="이메일로 회원가입"
              // @ts-ignore
              func={() => navigation.push('SignUp')}
            />
          </View>
        </View>
        <SignInScreen bottomSheetModalRef={bottomSheetModalRef} />
        {/* </SafeAreaView> */}
      </ImageBackground>
    </BottomSheetModalProvider>
  )
}

export default SignHomeScreen
