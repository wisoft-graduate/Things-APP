import React from 'react'
import { Platform, StyleSheet, Text, TouchableOpacity } from 'react-native'

import { Colors } from '../styles/colors'
import { ButtonCompProps } from '../types'

function ButtonComp(props: ButtonCompProps) {
  const { isHomeButton, func, text, isDisabled } = props

  if (isHomeButton) {
    return (
      <TouchableOpacity
        onPress={func}
        style={{
          width: '100%',
          backgroundColor: '#CBF14750',
          borderRadius: 50,
          padding: 20,
          alignItems: 'center',
          borderWidth: 1,
          borderColor: Colors.green,
        }}>
        <Text style={{ color: Colors.white, fontSize: 14, fontWeight: '400' }}>{text}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <TouchableOpacity
      onPress={func}
      style={[
        styles.container,
        {
          backgroundColor: isDisabled ? 'lightgray' : Colors.green,
        },
      ]}
      disabled={isDisabled}>
      <Text style={{ color: 'black', fontSize: 14, fontWeight: '400' }}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  // @ts-ignore
  container: {
    borderRadius: 50,
    padding: 20,
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: 'lightgray',
        shadowOffset: {
          height: 3,
        },
        shadowOpacity: 5,
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
      },
    }),
  },
})

export default ButtonComp
