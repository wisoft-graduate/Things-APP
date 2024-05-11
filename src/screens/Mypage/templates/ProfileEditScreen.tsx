import React, { useEffect, useState } from 'react'
import { Platform, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import Icons from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'

import { Colors } from '../../../@common/styles/colors'
import TextInputComp from '../../../@common/components/TextInputComp'

function ProfileEditScreen() {
  const { goBack, setOptions } = useNavigation()
  const [value, setValue] = useState('')

  useEffect(() => {
    setOptions({
      headerRight: () => {
        return (
          <TouchableOpacity onPress={() => goBack()}>
            <Text style={{ fontSize: 16, color: '#767676', fontWeight: '400' }}>완료</Text>
          </TouchableOpacity>
        )
      },
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <TouchableOpacity style={{ alignItems: 'center', marginTop: 40 }}>
        <View style={{ width: 100, height: 100, borderRadius: 100, backgroundColor: 'gray' }} />
        <View
          style={{
            width: 30,
            height: 30,
            borderRadius: 100,
            backgroundColor: Colors.green,
            zIndex: 10,
            marginTop: -30,
            marginRight: -70,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icons name="camera" color={'black'} size={16} />
        </View>
      </TouchableOpacity>
      <View style={{ paddingHorizontal: 48, marginTop: 40, gap: 4 }}>
        <TextInputComp placeholder="닉네임을 입력해주세요." value={value} setValue={setValue} />
        <Text style={{ fontSize: 12, fontWeight: '300', color: '#797979', marginLeft: 20 }}>
          영어(대문자,소문자), 한글, 숫자만 가능
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default ProfileEditScreen
