import React from 'react'
import { Text, View } from 'react-native'

import { Colors } from '../../../@common/styles/colors'

function PresentButton() {
  return (
    <View
      style={{
        borderWidth: 1,
        borderRadius: 30,
        width: 100,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: Colors.green,
        backgroundColor: '#D9D9D910',
      }}>
      <Text style={{ color: 'white', fontSize: 12, fontWeight: '400' }}>대표 명언 설정</Text>
    </View>
  )
}

export default PresentButton
