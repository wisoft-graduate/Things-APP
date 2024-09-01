import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Icons from 'react-native-vector-icons/Ionicons'

import * as ThingsAPI from '../../../api/index'
import { Colors } from '../../../@common/styles/colors'
import QuoteMarkSvg from '../../../assets/svgs/QuoteMarkSvg'
import { userInfoStore } from '../../../zustand/User'
import { useNavigation } from '@react-navigation/native'
import { accessTokenStorage, refreshTokenStorage, userIdStorage } from '../../../storage/secure'

function WithdrawalScreen() {
  const [passwordValue, setPasswordValue] = useState<string>('')
  const [isAgree, setIsAgree] = useState<boolean>(false)
  const [isAbleWithdrawal, setIsAbleWithdrawal] = useState<boolean>(false)
  const { data, remove } = userInfoStore()
  const navigation = useNavigation()

  async function onDeleteUser() {
    await ThingsAPI.deleteUsers({ id: data.id })
    remove()
    await accessTokenStorage.remove()
    await refreshTokenStorage.remove()
    await userIdStorage.remove()
    navigation.navigate('Detail')
  }

  useEffect(() => {
    if (isAgree && passwordValue.length > 0) {
      setIsAbleWithdrawal(true)
    } else {
      setIsAbleWithdrawal(false)
    }
  }, [passwordValue, isAgree])

  return (
    <View style={styles.container}>
      <View>
        <QuoteMarkSvg width={60} color="#cbf14770" />
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Things를</Text>
          <View style={styles.titleInnerContainer}>
            <Text style={styles.titleMainText}>탈퇴</Text>
            <Text style={styles.titleText}>하실 건가요?</Text>
          </View>
        </View>
        <View style={{ transform: [{ rotate: '-180deg' }] }}>
          <QuoteMarkSvg width={60} color="#cbf14770" />
        </View>
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.infoText}>탈퇴시 이용 내역은 복구되지 않습니다.</Text>
        <View style={styles.warnContainer}>
          <Text style={styles.warnText}>
            -탈퇴 고객의 개인정보는 관련 법령에 따라 일정 기간 안전하게 보관되며, 그 이후 자동 파기됩니다.
          </Text>
          <Text style={styles.warnText}>-탈퇴 최종 확인은 비밀번호 인증으로 진행됩니다.</Text>
        </View>
        <TouchableOpacity
          onPress={() => setIsAgree(!isAgree)}
          style={{
            height: 55,
            width: '100%',
            borderWidth: 1,
            borderColor: isAgree ? Colors.green : '#ddd',
            borderRadius: 50,
            alignItems: 'center',
            paddingLeft: 40,
            marginVertical: 20,
            flexDirection: 'row',
            gap: 10,
          }}>
          <Icons name="checkmark-circle-outline" size={28} color={isAgree ? Colors.green : '#ddd'} />
          <Text style={{ color: '#767676', fontSize: 14, fontWeight: '400' }}>유의 사항을 모두 확인했습니다.</Text>
        </TouchableOpacity>
        <View
          style={{
            height: 55,
            width: '100%',
            borderWidth: 1,
            borderColor: passwordValue.length > 0 ? Colors.green : '#ddd',
            backgroundColor: passwordValue.length > 0 ? '#cbf14710' : 'white',
            borderRadius: 50,
            alignItems: 'center',
            paddingLeft: 40,
            flexDirection: 'row',
            gap: 10,
          }}>
          <TextInput
            value={passwordValue}
            onChange={event => setPasswordValue(event.nativeEvent.text)}
            secureTextEntry={true}
            placeholder={'비밀번호를 입력해주세요.'}
            placeholderTextColor={'#767676'}
          />
        </View>
        <TouchableOpacity
          onPress={() => onDeleteUser()}
          activeOpacity={isAbleWithdrawal ? 0.7 : 1}
          style={{
            height: 55,
            width: '100%',
            backgroundColor: isAbleWithdrawal ? Colors.green : '#ddd',
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
            flexDirection: 'row',
            gap: 10,
          }}>
          <Text style={{ fontSize: 16, fontWeight: '400', color: 'black' }}>탈퇴하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 40,
    justifyContent: 'space-between',
  },
  titleContainer: {
    alignItems: 'center',
  },
  titleText: {
    color: 'black',
    fontSize: 22,
    fontWeight: '500',
  },
  titleInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  titleMainText: {
    color: '#cbf147',
    fontSize: 26,
    fontWeight: '500',
  },
  infoText: {
    color: '#767676',
    fontSize: 14,
    fontWeight: '400',
  },
  warnContainer: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    backgroundColor: '#f3f3f3',
    borderRadius: 30,
    marginTop: 10,
    gap: 16,
  },
  warnText: {
    color: '#767676',
    fontSize: 12,
    fontWeight: '400',
  },
})

export default WithdrawalScreen
