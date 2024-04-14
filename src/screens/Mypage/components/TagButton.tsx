import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import { Colors } from '../../../@common/styles/colors'

function TagButton() {
  return (
    <TouchableOpacity
      style={{
        marginRight: 10,
        paddingHorizontal: 10,
        paddingVertical: 6,
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#CBF14720',
        borderColor: Colors.green,
      }}>
      <Text style={{ fontSize: 12, fontWeight: '400', color: 'black' }}>자존감</Text>
      <Text style={{ fontSize: 12, fontWeight: '400', color: 'black' }}>12</Text>
    </TouchableOpacity>
  )
}
export default TagButton
