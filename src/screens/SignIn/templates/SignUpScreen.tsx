import React, { useState } from 'react'
import { Alert, SafeAreaView, ScrollView, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import TitleComp from '../components/Title'
import TextInputComp from '../../../@common/components/TextInputComp'
import ButtonComp from '../../../@common/components/ButtonComp'
import { Colors } from '../../../@common/styles/colors'
import * as ThingsAPI from '../../../api/index'
import PasswordQuestionComp from '../../../@common/components/PasswordQuestionComp'

function SignUpScreen() {
  const navigation = useNavigation()

  const [idValue, setIdValue] = useState('')
  const [nicknameValue, setNicknameValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const [passwordCheckValue, setPasswordCheckValue] = useState('')

  const [selfCheckQuestion, setSelfCheckQuestion] = useState('')
  const [selfCheckValue, setSelfCheckValue] = useState('')

  const [isIdChecked, setIsIdChecked] = useState(false)
  const [isNicknameChecked, setIsNicknameChecked] = useState(false)
  const [isPasswordChecked, setIsPasswordChecked] = useState(false)

  async function onSignup() {
    const params = {
      id: idValue,
      password: passwordValue,
      nickname: nicknameValue,
      identityVerificationQuestion: selfCheckQuestion,
      identityVerificationAnswer: selfCheckValue,
    }

    const res = await ThingsAPI.postSignUp(params)
    if (!res.data) {
      navigation.goBack()
    } else {
      Alert.alert(res?.data?.message, '', [{}])
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 40,
          paddingVertical: 20,
        }}>
        <TitleComp />
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingVertical: 20 }}>
          <View style={{ justifyContent: 'space-between', gap: 10 }}>
            <View>
              <TextInputComp
                placeholder="로그인 아이디..."
                type="id"
                value={idValue}
                setValue={setIdValue}
                setIsChecked={setIsIdChecked}
              />
              {/* <Text style={{ color: Colors.green, marginLeft: 20 }}>* 사용가능한 아이디입니다.</Text> */}
            </View>
            <View>
              <TextInputComp
                placeholder="닉네임..."
                type="nickname"
                value={nicknameValue}
                setValue={setNicknameValue}
                setIsChecked={setIsNicknameChecked}
              />
            </View>
            <TextInputComp
              placeholder="비밀번호..."
              type="password"
              value={passwordValue}
              setValue={setPasswordValue}
              setIsChecked={setIsPasswordChecked}
              isPassword
            />
            <TextInputComp
              placeholder="비밀번호 확인..."
              type="password"
              value={passwordCheckValue}
              setValue={setPasswordCheckValue}
              isPassword
            />
            <PasswordQuestionComp selfCheckQuestion={selfCheckQuestion} setSelfCheckQuestion={setSelfCheckQuestion} />
            <TextInputComp placeholder="본인 확인 답변 입력..." value={selfCheckValue} setValue={setSelfCheckValue} />
          </View>
        </ScrollView>
        <ButtonComp
          isDisabled={
            !isIdChecked ||
            !isNicknameChecked ||
            !isPasswordChecked ||
            selfCheckValue.length === 0 ||
            passwordCheckValue.length === 0
          }
          func={() => {
            if (passwordValue !== passwordCheckValue) {
              Alert.alert('비밀번호와 비밀번호 확인란이 동일하지 않습니다.', '', [{}])
              return
            }
            if (selfCheckValue.length === 0) {
              Alert.alert('본인확인 답변을 입력해주세요.', '', [{}])
              return
            }
            onSignup()
          }}
          text={'확인'}
        />
      </View>
    </SafeAreaView>
  )
}

export default SignUpScreen
