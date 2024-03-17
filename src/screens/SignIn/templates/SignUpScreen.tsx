import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import TitleComp from '../components/Title';
import TextInputComp from '../../../@common/components/TextInputComp';
import ButtonComp from '../../../@common/components/ButtonComp';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../../../@common/styles/colors';

function SignUpScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 40,
          paddingVertical: 20,
        }}>
        <TitleComp />
        <ScrollView contentContainerStyle={{paddingVertical: 20}}>
          <View style={{justifyContent: 'space-between', gap: 10}}>
            <View>
              <TextInputComp placeholder="로그인 아이디..." check="check" />
              <Text style={{color: Colors.green, marginLeft: 20}}>
                * 사용가능한 아이디입니다.
              </Text>
            </View>
            <View>
              <TextInputComp placeholder="닉네임..." check="error" />
              <Text style={{color: Colors.error, marginLeft: 20}}>
                * 중복되는 닉네임입니다.
              </Text>
            </View>
            <TextInputComp placeholder="비밀번호..." />
            <TextInputComp placeholder="비밀번호..." />
            <TextInputComp placeholder="비밀번호 확인..." />
            <TextInputComp placeholder="본인 확인 질문 선택..." />
            <TextInputComp placeholder="본인 확인 답변 입력..." />
          </View>
        </ScrollView>
        <ButtonComp
          // @ts-ignore
          func={() => navigation.push('SignHome')}
          text={'확인'}
        />
      </View>
    </SafeAreaView>
  );
}

export default SignUpScreen;
