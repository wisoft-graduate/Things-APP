import React, { useEffect } from 'react'
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icons from 'react-native-vector-icons/Feather'

import { Colors } from '../../../@common/styles/colors'

function PushScreen() {
  const { goBack, setOptions } = useNavigation()

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

  function PushItemComp({ isNewPush }: { isNewPush?: boolean }) {
    return (
      <View
        style={{
          height: 60,
          width: '100%',
          backgroundColor: isNewPush ? '#cbf14720' : 'white',
          borderWidth: 1,
          borderColor: isNewPush ? Colors.green : '#DDDDDD',
          borderRadius: 50,
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 15,
          flexDirection: 'row',
          paddingHorizontal: 25,
        }}>
        <Text style={{ fontSize: 12, color: '#767676', fontWeight: '400' }}>
          매일 원하는 시간에 새로운 명언을 받아보세요!
        </Text>
        <Text style={{ fontSize: 12, color: '#767676', fontWeight: '400' }}>1시간 전</Text>
        {isNewPush && (
          <View
            style={{
              width: 5,
              height: 5,
              borderRadius: 5,
              backgroundColor: Colors.green,
              position: 'absolute',
              right: 20,
              top: 20,
            }}
          />
        )}
      </View>
    )
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ alignItems: 'center', paddingHorizontal: 28 }}>
        <View
          style={{
            height: 35,
            width: '90%',
            backgroundColor: '#f3f3f3',
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 30,
            marginBottom: 25,
            flexDirection: 'row',
            gap: 6,
          }}>
          <Icons name="info" size={17} color="#767676" />
          <Text style={{ fontSize: 12, color: '#767676', fontWeight: '400' }}>
            매일 원하는 시간에 새로운 명언을 받아보세요!
          </Text>
          <Icons name="chevron-right" size={18} color="#767676" />
        </View>
        <PushItemComp isNewPush />
        <PushItemComp isNewPush />
        <PushItemComp isNewPush />
        <PushItemComp />
        <PushItemComp />
        <PushItemComp />
        <PushItemComp />
      </View>
    </ScrollView>
  )
}

export default PushScreen
