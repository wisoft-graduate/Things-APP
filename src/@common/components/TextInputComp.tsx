import React, { useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import Icons from 'react-native-vector-icons/Ionicons'

import { Colors } from '../styles/colors'
import { TextInputCompProps } from '../types'

function TextInputComp(props: TextInputCompProps) {
  const { placeholder, check } = props
  const [value, setValue] = useState<string>('')

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
    <View style={[styles.container, inputStyle()]}>
      <TextInput
        value={value}
        onChange={event => setValue(event.nativeEvent.text)}
        placeholder={placeholder}
        placeholderTextColor={'#767676'}
      />
      <Icons name={iconName()} size={20} color={check === 'error' ? Colors.error : Colors.green} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 50,
    padding: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
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
