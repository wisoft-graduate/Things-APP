import React, { useState } from 'react'
import { Alert, Text, TouchableOpacity, View } from 'react-native'
import Icons from 'react-native-vector-icons/Entypo'
import IonIcons from 'react-native-vector-icons/Ionicons'

import * as ThingsAPI from '../../../api/index'
import getElapsedHour from '../../../@common/utils/getElapsedHour'
import { userInfoStore } from '../../../zustand/User'

function CommentComp({ item, childComment, getComments, setReCommentId }) {
  const [isOpenToggle, setIsOpenToggle] = useState<boolean>(false)
  const { data: userData } = userInfoStore()

  const time = new Date(childComment?.createdTime ?? item?.item?.createdTime)

  async function deleteComment() {
    const response = await ThingsAPI.deleteComments({ id: childComment?.id ?? item?.item?.id })
    if (response) {
      getComments({ quotationId: childComment?.quotationId ?? item?.item?.quotationId })
    }
  }

  function Toggle() {
    const userId = childComment?.userId ?? item?.item?.userId
    if (userData.id !== userId) {
      return (
        <TouchableOpacity
          onPress={() => {
            Alert.alert('댓글이 신고처리되었습니다.')
          }}
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
          <Text style={{ fontSize: 14, color: 'black', fontWeight: '400' }}>신고</Text>
        </TouchableOpacity>
      )
    }
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
            <Text style={{ fontSize: 14, fontWeight: '500', color: 'black' }}>
              {childComment?.userId ?? item?.item?.userId}
            </Text>
            <Text style={{ fontSize: 12, fontWeight: '400', color: 'gray' }}>{getElapsedHour(time)}</Text>
          </View>
          <View style={{ width: 200 }}>
            <Text style={{ fontSize: 14, fontWeight: '400', color: 'black' }}>
              {childComment?.content ?? item?.item?.content}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              setReCommentId(item?.item?.id)
            }}>
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
