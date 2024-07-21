import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Icons from 'react-native-vector-icons/Entypo'
import IonIcons from 'react-native-vector-icons/Ionicons'

import * as ThingsAPI from '../../../api/index'
import getElapsedHour from '../../../@common/utils/getElapsedHour'

function CommentComp({ item, getComments }) {
  const [isOpenToggle, setIsOpenToggle] = useState<boolean>(false)

  const time = new Date(item?.item?.createdTime)

  async function deleteComment() {
    const response = await ThingsAPI.deleteComments({ id: item?.item?.id })
    if (response) {
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
        <Text style={{ fontSize: 14, color: 'black', fontWeight: '400' }}>삭제</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <View style={{ flexDirection: 'row', gap: 20 }}>
        <IonIcons name="person-circle-outline" size={32} color={'lightgray'} />
        <View style={{ gap: 6 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
            <Text style={{ fontSize: 14, fontWeight: '500', color: 'black' }}>{item?.item?.userId}</Text>
            <Text style={{ fontSize: 12, fontWeight: '400', color: 'gray' }}>{getElapsedHour(time)}</Text>
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
