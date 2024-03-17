import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native'
import Icons from 'react-native-vector-icons/Ionicons'

import { CloseButtonProps } from '../types'

function CloseButton(props: CloseButtonProps) {
  const { onPress } = props
  const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={onPress ? onPress : navigation.goBack}>
      <Icons name="close-outline" size={30} />
    </TouchableOpacity>
  )
}

export default CloseButton
