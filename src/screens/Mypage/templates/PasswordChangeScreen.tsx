import React from 'react'
import { Text, View } from 'react-native'

import { Colors } from '../../../@common/styles/colors'
import PasswordQuestionComp from '../../../@common/components/PasswordQuestionComp'
import ButtonComp from '../../../@common/components/ButtonComp'

function PasswordChangeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: 'white', padding: 40, justifyContent: 'space-between' }}>
      <View>
        <View style={{ gap: 10, zIndex: 10 }}>
          <Text style={{ fontSize: 28, fontWeight: '500', color: 'black' }}>비밀번호</Text>
          <Text style={{ fontSize: 28, fontWeight: '500', color: 'black' }}>본인확인</Text>
        </View>
        <View style={{ backgroundColor: Colors.green, width: 110, height: 20, marginTop: -60 }} />
      </View>
      <View style={{ gap: 100 }}>
        <PasswordQuestionComp />
        <View />
      </View>
      <ButtonComp text="확인" />
    </View>
  )
}

export default PasswordChangeScreen
