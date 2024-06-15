import React, { useState } from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'
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
  const [selfCheckValue, setSelfCheckValue] = useState('')

  async function onSignup() {
    const params = {
      id: 'jiyeon2',
      password: 'jiyeon22',
      nickname: 'jiyeon2',
      identityVerificationQuestion: '난 누구인가',
      identityVerificationAnswer: '박지연',
    }
    // try {
    //   const response = await axios.get('http://52.79.229.237:8080/users?searchNickname=jiyeon')
    //   if (response) {
    //     console.log('res', response)
    //   }
    // } catch (error) {
    //   console.log(error)
    // }

    try {
      const res = await ThingsAPI.postSignUp(params)
      if (res) {
        console.log(res)
      }
    } catch (error) {
      console.log(error)
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
              <TextInputComp placeholder="로그인 아이디..." check="check" value={idValue} setValue={setIdValue} />
              <Text style={{ color: Colors.green, marginLeft: 20 }}>* 사용가능한 아이디입니다.</Text>
            </View>
            <View>
              <TextInputComp placeholder="닉네임..." check="error" value={nicknameValue} setValue={setNicknameValue} />
              <Text style={{ color: Colors.error, marginLeft: 20 }}>* 중복되는 닉네임입니다.</Text>
            </View>
            <TextInputComp placeholder="비밀번호..." value={passwordValue} setValue={setPasswordValue} />
            <TextInputComp placeholder="비밀번호 확인..." value={passwordCheckValue} setValue={setPasswordCheckValue} />
            <PasswordQuestionComp />
            <TextInputComp placeholder="본인 확인 답변 입력..." value={selfCheckValue} setValue={setSelfCheckValue} />
          </View>
        </ScrollView>
        <ButtonComp
          // @ts-ignore
          // func={() => navigation.push('SignHome')}
          func={() => onSignup()}
          text={'확인'}
        />
      </View>
    </SafeAreaView>
  )
}

export default SignUpScreen
