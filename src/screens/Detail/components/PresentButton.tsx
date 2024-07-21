import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import { Colors } from '../../../@common/styles/colors'
import * as ThingsAPI from '../../../api/index'
import { userInfoStore } from '../../../zustand/User'

function PresentButton() {
  const { data } = userInfoStore()

  async function savePresentQuotation() {
    const params = {
      id: data?.id,
      // nickname: '',
      // profilePath: '',
      favoriteQuotation: 'dsafs',
      favoriteAuthor: 'sdfads',
      // quotationAlarm: true,
      // commentAlarm: true,
      // identityVerificationQuestion: '',
      // identityVerificationAnswer: '',
    }
    const response = ThingsAPI.putUsers(params)
  }

  return (
    <TouchableOpacity
      onPress={() => {
        savePresentQuotation()
      }}
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
    </TouchableOpacity>
  )
}

export default PresentButton
