import React, { useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import Icons from 'react-native-vector-icons/Ionicons'

import { Colors } from '../styles/colors'
import { TextInputCompProps } from '../types'
import { userInfoStore } from '../../zustand/User'

function TextInputComp(props: TextInputCompProps) {
  const { placeholder, check, value, setValue, isPassword } = props
  const { data } = userInfoStore()

  const inputStyle = () => {
    switch (check) {
      case 'error':
        return styles.error
      case 'check':
        return styles.check
      default:
        return styles.default
    }
  }

  const iconName = () => {
    switch (check) {
      case 'error':
        return 'close-outline'
      case 'check':
        return 'checkmark-outline'
      default:
        return ''
    }
  }

  return (
    <View>
      <TextInput
        style={[styles.container, inputStyle()]}
        autoCapitalize="none"
        onChange={event => setValue(event.nativeEvent.text)}
        placeholder={placeholder}
        placeholderTextColor={'#767676'}
        secureTextEntry={isPassword}
        defaultValue={data.nickname}
      />
      <Icons name={iconName()} size={20} color={check === 'error' ? Colors.error : Colors.green} />
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
