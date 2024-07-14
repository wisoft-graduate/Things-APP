import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Icons from 'react-native-vector-icons/Entypo'

import * as ThingsAPI from '../../../api/index'

function CommentComp({ item, getComments }) {
  const [isOpenToggle, setIsOpenToggle] = useState<boolean>(false)
  // console.log(item)

  async function deleteComment() {
    const response = await ThingsAPI.deleteComments({ id: item?.item?.id })
    if (response) {
      console.log(response)
      getComments({ quotationId: item?.item?.quotationId })
    }
  }

  function Toggle() {
    return (
      <TouchableOpacity
        onPress={() => deleteComment()}
        style={{
          backgroundColor: 'white',
          height: 30,
          paddingHorizontal: 8,
          paddingVertical: 4,
          borderRadius: 12,
          borderWidth: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>삭제</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <View style={{ flexDirection: 'row', gap: 20 }}>
        <View style={{ width: 30, height: 30, borderRadius: 100, backgroundColor: 'red' }} />
        <View style={{ gap: 6 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
            <Text style={{ fontSize: 14, fontWeight: '500', color: 'black' }}>{item?.item?.userId}</Text>
            <Text style={{ fontSize: 12, fontWeight: '400', color: 'gray' }}>1시간 전</Text>
          </View>
          <Text style={{ fontSize: 14, fontWeight: '400', color: 'black' }}>{item?.item?.content}</Text>
          <TouchableOpacity>
            <Text style={{ fontSize: 12, fontWeight: '400', color: 'gray' }}>답글 달기</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flexDirection: 'row' }}>
        {isOpenToggle && <Toggle />}
        <TouchableOpacity onPress={() => setIsOpenToggle(!isOpenToggle)}>
          <Icons name="dots-three-vertical" color="lightgray" size={16} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CommentComp
