import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import { Colors } from '../../../@common/styles/colors'

function TagButton({ item }) {
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
        gap: 4,
      }}>
      <Text style={{ fontSize: 12, fontWeight: '400', color: 'black' }}>{item?.icon}</Text>
      <Text style={{ fontSize: 12, fontWeight: '400', color: 'black' }}>{item?.name}</Text>
    </TouchableOpacity>
  )
}
export default TagButton
