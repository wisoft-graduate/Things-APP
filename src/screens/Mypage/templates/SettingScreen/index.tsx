import React, { useState } from 'react'
import { Alert, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Icons from 'react-native-vector-icons/Ionicons'

import SwitchComp from '../../../../@common/components/SwitchComp'
import { useNavigation } from '@react-navigation/native'
import { userInfoStore } from '../../../../zustand/User'
import { accessTokenStorage, refreshTokenStorage, userIdStorage } from '../../../../storage/secure'

function SettingScreen() {
  const navigation = useNavigation()
  const { data, remove } = userInfoStore()

  const [isCommentSwitchOn, setIsCommentSwitchOn] = useState(false)
  const [isPushSwitchOn, setIsPushSwitchOn] = useState(false)

  async function userLogout() {
    Alert.alert('로그아웃 하시겠어요?', '', [
      {
        text: '취소',
      },
      {
        text: '로그아웃',
        onPress: async () => {
          remove()
          await accessTokenStorage.remove()
          await refreshTokenStorage.remove()
          await userIdStorage.remove()
          navigation.navigate('Detail')
        },
      },
    ])
  }

  return (
    <ScrollView style={{ backgroundColor: 'white', flex: 1 }}>
      <View style={{ paddingHorizontal: 42, paddingVertical: 34 }}>
        <Text style={{ fontSize: 12, fontWeight: '300', color: '#767676', marginBottom: 14 }}>내정보</Text>
        <Text style={{ fontSize: 14, fontWeight: '400', color: '#000000', marginBottom: 10 }}>로그인 아이디</Text>
        <Text style={{ fontSize: 12, fontWeight: '300', color: '#767676' }}>{data?.id}</Text>
      </View>
      <View style={{ backgroundColor: '#ddd', height: 1 }} />
      <View style={{ paddingHorizontal: 42, paddingVertical: 34 }}>
        <Text style={{ fontSize: 12, fontWeight: '300', color: '#767676', marginBottom: 14 }}>알림 설정</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ fontSize: 14, fontWeight: '400', color: '#000000', marginBottom: 20 }}>답글 알림</Text>
          <SwitchComp isSwitch={isCommentSwitchOn} setIsSwitch={setIsCommentSwitchOn} scaleX={0.85} scaleY={0.8} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ fontSize: 14, fontWeight: '400', color: '#000000', marginBottom: 24 }}>푸시 알림</Text>
          <SwitchComp isSwitch={isPushSwitchOn} setIsSwitch={setIsPushSwitchOn} scaleX={0.85} scaleY={0.8} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingRight: 8,
            marginBottom: 28,
          }}>
          <Text style={{ fontSize: 14, fontWeight: '400', color: '#000000' }}>알림 1</Text>
          <Text style={{ fontSize: 12, fontWeight: '300', color: '#767676' }}>09:00</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingRight: 8,
            marginBottom: 28,
          }}>
          <Text style={{ fontSize: 14, fontWeight: '400', color: '#000000' }}>알림 2</Text>
          <Text style={{ fontSize: 12, fontWeight: '300', color: '#767676' }}>12:52</Text>
        </View>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 8,
          }}>
          <Icons name="add-circle-outline" size={18} color={'#767676'} />
          <Text style={{ fontSize: 14, fontWeight: '400', color: '#767676' }}>알림추가</Text>
        </TouchableOpacity>
      </View>
      <View style={{ backgroundColor: '#ddd', height: 1 }} />
      <View style={{ paddingHorizontal: 42, paddingVertical: 34 }}>
        <Text style={{ fontSize: 12, fontWeight: '300', color: '#767676', marginBottom: 14 }}>정보 수정</Text>
        <TouchableOpacity onPress={() => navigation.push('PasswordChange')}>
          <Text style={{ fontSize: 14, fontWeight: '400', color: '#000000', marginBottom: 28 }}>패스워드 변경</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => userLogout()}>
          <Text style={{ fontSize: 14, fontWeight: '400', color: '#000000', marginBottom: 28 }}>로그아웃</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push('Withdrawal')}>
          <Text style={{ fontSize: 14, fontWeight: '400', color: '#000000' }}>회원 탈퇴</Text>
        </TouchableOpacity>
      </View>
      <View style={{ backgroundColor: '#ddd', height: 1 }} />
      <View style={{ paddingHorizontal: 42, paddingVertical: 34 }}>
        <Text style={{ fontSize: 14, fontWeight: '400', color: '#000000', marginBottom: 14 }}>버전 정보</Text>
        <Text style={{ fontSize: 12, fontWeight: '300', color: '#767676', marginBottom: 14 }}>1.0.0</Text>
      </View>
    </ScrollView>
  )
}

export default SettingScreen
