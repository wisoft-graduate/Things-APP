import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Icons from 'react-native-vector-icons/Entypo'

function CommentComp() {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <View style={{ flexDirection: 'row', gap: 20 }}>
        <View style={{ width: 30, height: 30, borderRadius: 100, backgroundColor: 'red' }} />
        <View style={{ gap: 6 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
            <Text style={{ fontSize: 14, fontWeight: '500', color: 'black' }}>delaying</Text>
            <Text style={{ fontSize: 12, fontWeight: '400', color: 'gray' }}>1시간 전</Text>
          </View>
          <Text style={{ fontSize: 14, fontWeight: '400', color: 'black' }}>안녕하세요</Text>
          <TouchableOpacity>
            <Text style={{ fontSize: 12, fontWeight: '400', color: 'gray' }}>답글 달기</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity>
        <Icons name="dots-three-vertical" color="lightgray" size={16} />
      </TouchableOpacity>
    </View>
  )
}

export default CommentComp
