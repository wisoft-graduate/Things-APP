import React from 'react'
import { Alert, Text, TouchableOpacity, View } from 'react-native'

import { Colors } from '../../../@common/styles/colors'
import * as ThingsAPI from '../../../api/index'
import { userInfoStore } from '../../../zustand/User'
import useGetUserInfo from '../../../@common/hooks/useGetUserInfo'

function PresentButton({ favoriteQuotation, favoriteAuthor }) {
  const { data } = userInfoStore()
  const { getUser } = useGetUserInfo()

  async function savePresentQuotation() {
    const params = {
      id: data?.id,
      // nickname: '',
      // profilePath: '',
      favoriteQuotation: favoriteQuotation,
      favoriteAuthor: favoriteAuthor,
      // quotationAlarm: true,
      // commentAlarm: true,
      // identityVerificationQuestion: '',
      // identityVerificationAnswer: '',
    }
    const response = await ThingsAPI.putUsers(params)
    if (response?.data) {
      Alert.alert('대표 명언 설정이 완료되었습니다.', '', [{}])
      getUser()
    }
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
