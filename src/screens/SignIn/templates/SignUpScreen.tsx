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
              <TextInputComp placeholder="로그인 아이디..." value={idValue} setValue={setIdValue} />
              {/* <Text style={{ color: Colors.green, marginLeft: 20 }}>* 사용가능한 아이디입니다.</Text> */}
            </View>
            <View>
              <TextInputComp placeholder="닉네임..." value={nicknameValue} setValue={setNicknameValue} />
              <Text style={{ fontSize: 13, color: 'gray', fontWeight: '400', marginTop: -10, marginLeft: 20 }}>
                ※ 영어(대문자,소문자), 한글, 숫자만 가능
              </Text>
              {/* <Text style={{ color: Colors.error, marginLeft: 20 }}>* 중복되는 닉네임입니다.</Text> */}
            </View>
            <TextInputComp placeholder="비밀번호..." value={passwordValue} setValue={setPasswordValue} isPassword />
            <TextInputComp
              placeholder="비밀번호 확인..."
              value={passwordCheckValue}
              setValue={setPasswordCheckValue}
              isPassword
            />
            <PasswordQuestionComp selfCheckQuestion={selfCheckQuestion} setSelfCheckQuestion={setSelfCheckQuestion} />
            <TextInputComp placeholder="본인 확인 답변 입력..." value={selfCheckValue} setValue={setSelfCheckValue} />
          </View>
        </ScrollView>
        <ButtonComp
          func={() => {
            if (
              idValue === '' ||
              nicknameValue === '' ||
              passwordValue === '' ||
              passwordCheckValue === '' ||
              selfCheckQuestion === '' ||
              selfCheckValue === ''
            ) {
              Alert.alert('모든 정보가 입력되어있는지 확인해주세요', '', [{}])
              return
            }
            if (passwordValue !== passwordCheckValue) {
              Alert.alert('비밀번호와 비밀번호 확인란이 동일하지 않습니다.', '', [{}])
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
