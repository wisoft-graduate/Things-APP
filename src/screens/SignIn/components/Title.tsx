import React from 'react'
import { Text, View } from 'react-native'

import { Colors } from '../../../@common/styles/colors'
import CloseButton from '../../../@common/components/CloseButton'

function TitleComp() {
  return (
    <View style={{ marginBottom: 10 }}>
      <View style={{ alignSelf: 'flex-end', marginBottom: 10 }}>
        <CloseButton />
      </View>
      <View
        style={{
          backgroundColor: Colors.green,
          width: 103,
          height: 20,
          position: 'absolute',
          top: 30,
          left: -4,
        }}
      />
      <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
        <Text style={{ fontSize: 28 }}>회원가입</Text>
        <Text style={{ fontSize: 14 }}>을 환영합니다!</Text>
      </View>
      <Text style={{ fontSize: 14, marginTop: 6 }}>Things에서 사용할 정보를 입력해 주세요.</Text>
    </View>
  )
}

export default TitleComp
