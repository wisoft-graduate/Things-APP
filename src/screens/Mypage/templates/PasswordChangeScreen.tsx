import React, { useEffect, useState } from 'react'
import { Alert, Text, TouchableOpacity, View } from 'react-native'
import Icons from 'react-native-vector-icons/Ionicons'

import { Colors } from '../../../@common/styles/colors'
import PasswordQuestionComp from '../../../@common/components/PasswordQuestionComp'
import ButtonComp from '../../../@common/components/ButtonComp'
import TextInputComp from '../../../@common/components/TextInputComp'
import * as ThingsAPI from '../../../api/index'
import { userInfoStore } from '../../../zustand/User'
import { useNavigation, useRoute } from '@react-navigation/native'
import { removeAxiosHeaders } from '../../../api/thingsAxios'

function PasswordChangeScreen() {
  const { data } = userInfoStore()
  const navigation = useNavigation()
  const { params } = useRoute()
  const isNotLogin = params?.isNotLogin

  const [selfCheckQuestion, setSelfCheckQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [resetToken, setResetToken] = useState('')

  const [idValue, setIdValue] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [newPasswordCheck, setNewPasswordCheck] = useState('')

  async function onVerification() {
    const params = {
      id: isNotLogin ? idValue : data?.id,
      identityVerificationQuestion: selfCheckQuestion,
      identityVerificationAnswer: answer,
    }
    const response = await ThingsAPI.postUsersIdentityVerification(params)
    if (response?.data?.passwordResetToken) {
      setResetToken(response?.data?.passwordResetToken)
    } else {
      Alert.alert('입력한 정보를 다시 확인해주세요.', '')
    }
  }

  async function onChangePassword() {
    if (newPassword !== newPasswordCheck) {
      Alert.alert('비밀번호가 일치하지 않습니다.')
      return
    }
    const response = await ThingsAPI.patchUsersResetPassword({
      id: isNotLogin ? idValue : data?.id,
      password: newPassword,
      passwordConfirm: newPasswordCheck,
      newToken: resetToken,
    })
    if (response) {
      navigation.goBack()
      Alert.alert('비밀번호 변경이 완료되었습니다.')
    }
  }

  if (resetToken !== '') {
    return (
      <View style={{ flex: 1, backgroundColor: 'white', padding: 40, justifyContent: 'space-between' }}>
        <View>
          {isNotLogin && (
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginVertical: 20, alignSelf: 'flex-end' }}>
              <Icons name="close" color={'black'} size={30} />
            </TouchableOpacity>
          )}
          <View>
            <Text style={{ fontSize: 28, fontWeight: '500', color: 'black', zIndex: 10 }}>비밀번호 변경</Text>
            <View
              style={{ position: 'absolute', backgroundColor: Colors.green, width: 100, height: 20, marginTop: 6 }}
            />
          </View>
        </View>
        <View style={{ gap: 10 }}>
          {isNotLogin && <TextInputComp placeholder="ID 입력" value={idValue} setValue={setIdValue} />}
          <TextInputComp placeholder="새 비밀번호 입력" value={newPassword} setValue={setNewPassword} isPassword />
          <TextInputComp
            placeholder="새 비밀번호 다시 입력"
            value={newPasswordCheck}
            setValue={setNewPasswordCheck}
            isPassword
          />
        </View>
        <ButtonComp text="확인" func={() => onChangePassword()} />
      </View>
    )
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'white', padding: 40, justifyContent: 'space-between' }}>
      <View>
        {isNotLogin && (
          <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginVertical: 20, alignSelf: 'flex-end' }}>
            <Icons name="close" color={'black'} size={30} />
          </TouchableOpacity>
        )}
        <View style={{ gap: 10, zIndex: 10 }}>
          <Text style={{ fontSize: 28, fontWeight: '500', color: 'black' }}>비밀번호</Text>
          <Text style={{ fontSize: 28, fontWeight: '500', color: 'black' }}>본인확인</Text>
        </View>
        <View style={{ backgroundColor: Colors.green, width: 110, height: 20, marginTop: -60 }} />
      </View>
      <View style={{ gap: 30 }}>
        {isNotLogin && <TextInputComp placeholder="ID 입력" value={idValue} setValue={setIdValue} />}
        <PasswordQuestionComp selfCheckQuestion={selfCheckQuestion} setSelfCheckQuestion={setSelfCheckQuestion} />
        <TextInputComp placeholder="본인확인 답변" value={answer} setValue={setAnswer} />
      </View>
      <ButtonComp text="확인" func={() => onVerification()} />
    </View>
  )
}

export default PasswordChangeScreen
