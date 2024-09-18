import React, { useCallback, useEffect, useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import Icons from 'react-native-vector-icons/Ionicons'

import { Colors } from '../styles/colors'
import { TextInputCompProps } from '../types'
import * as ThingsAPI from '../../api/index'

function TextInputComp(props: TextInputCompProps) {
  const { placeholder, value, setValue, isPassword, type, setIsChecked } = props

  const [state, setState] = useState('')
  const [validationMessage, setValidationMessage] = useState('')

  async function onUsersCheck() {
    if (!setIsChecked) {
      return
    }

    if (type === 'id') {
      const response = await ThingsAPI.getUsers({ id: value })
      if (!response?.data[0]) {
        setState('check')
        setValidationMessage('')
        setIsChecked(true)
      } else {
        setState('error')
        setValidationMessage('중복된 ID입니다.')
        setIsChecked(false)
      }
    }
    if (type === 'nickname') {
      const response = await ThingsAPI.getUsers({ nickname: value })
      if (!response?.data[0]) {
        setState('check')
        setValidationMessage('')
        setIsChecked(true)
      } else {
        setState('error')
        setValidationMessage('중복된 닉네임입니다.')
        setIsChecked(false)
      }
    }
  }

  const validationCheck = useCallback(() => {
    const idRegExp = /^[a-z0-9]*$/
    const passwordRegExp = /^[!@#$A-Za-z0-9]*$/
    const nicknameRegExp = /^[-_가-힣A-Za-z0-9ㄱ-ㅁ]*$/

    const idLenthCheck = value?.length >= 5 && value?.length <= 20
    const passwordLenthCheck = value?.length >= 8 && value?.length <= 16
    const nicknameLenthCheck = value?.length >= 3 && value?.length <= 20

    const idRegCase = idRegExp.test(value)
    const passwordRegCase = passwordRegExp.test(value)
    const nicknameRegCase = nicknameRegExp.test(value)

    if (value.length === 0) {
      setState('')
      setValidationMessage('')
      return
    }

    if (!setIsChecked) {
      return
    }

    switch (type) {
      case 'id':
        if (idLenthCheck && idRegCase) {
          onUsersCheck()
        }
        if (!idLenthCheck) {
          setState('error')
          setValidationMessage('5-20자 제한')
          setIsChecked(false)
        }
        if (!idRegCase) {
          setState('error')
          setValidationMessage('소문자 알파벳,숫자만 사용가능')
          setIsChecked(false)
        }
        return
      case 'password':
        if (passwordLenthCheck && passwordRegCase) {
          setState('check')
          setValidationMessage('')
          setIsChecked(true)
        }
        if (!passwordLenthCheck) {
          setState('error')
          setValidationMessage('8-16자 제한')
          setIsChecked(false)
        }
        if (!passwordRegCase) {
          setState('error')
          setValidationMessage('알파벳,특수기호(!@#$),숫자만 사용가능')
          setIsChecked(false)
        }
        return
      case 'nickname':
        if (nicknameLenthCheck && nicknameRegCase) {
          onUsersCheck()
        }
        if (!nicknameLenthCheck) {
          setState('error')
          setValidationMessage('3-20자 제한')
          setIsChecked(false)
        }
        if (!nicknameRegCase) {
          setState('error')
          setValidationMessage('알파벳,특수기호(_-),한글,숫자만 사용가능')
          setIsChecked(false)
        }
        return
      default:
        return styles.default
    }
  }, [type, value])

  const inputStyle = () => {
    switch (state) {
      case 'error':
        return styles.error
      case 'check':
        return styles.check
      default:
        return styles.default
    }
  }

  useEffect(() => {
    validationCheck()
  }, [type, value])

  return (
    <View>
      <TextInput
        style={[styles.container, inputStyle()]}
        autoCapitalize="none"
        value={value}
        onChange={event => setValue(event.nativeEvent.text)}
        placeholder={placeholder}
        placeholderTextColor={'#767676'}
        secureTextEntry={isPassword}
        defaultValue={value}
      />
      {state === 'error' && (
        <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
          <Icons name={'close-outline'} size={20} color={Colors.error} />
          <Text style={{ fontSize: 14, color: Colors.error, fontWeight: '400' }}>{validationMessage}</Text>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
    fontSize: 16,
    color: 'black',
    fontWeight: '400',
  },
  default: {
    borderColor: '#DDDDDD',
  },
  error: {
    borderColor: Colors.error,
    backgroundColor: '#F1704710',
  },
  check: {
    borderColor: Colors.green,
    backgroundColor: '#CBF14720',
  },
})

export default TextInputComp
