import React, { useState } from 'react'
import { Alert, Text, TouchableOpacity, View } from 'react-native'
import Icons from 'react-native-vector-icons/Entypo'
import LockIcons from 'react-native-vector-icons/AntDesign'

import * as ThingsAPI from '../../../api/index'

function CardComp({ item, refetch }) {
  const [visible, setVisible] = useState(item?.visibility)
  const [showOption, setShowOption] = useState(false)

  async function changeBookmarkLock() {
    const params = {
      id: item?.id,
      name: item?.name,
      quotationIds: item?.quotations,
      visibility: !visible,
      icon: item?.icon,
    }
    const res = await ThingsAPI.putBookmark(params)
    if (res) {
      setVisible(!visible)
    }
  }

  async function deleteBookmark() {
    const params = {
      id: item?.id,
    }
    const res = await ThingsAPI.deleteBookmark(params)
    if (res) {
      console.log(res)
      setShowOption(false)
      refetch()
    }
  }

  function DeleteComp() {
    return (
      <TouchableOpacity
        style={{ borderWidth: 1, paddingVertical: 4, paddingHorizontal: 6, borderRadius: 10 }}
        onPress={() => {
          Alert.alert('목록을 삭제하시겠습니까?', '', [
            {
              text: '취소',
              onPress: () => setShowOption(false),
            },
            {
              text: '삭제',
              onPress: () => deleteBookmark(),
            },
          ])
        }}>
        <Text style={{ fontWeight: '400', color: 'black', fontSize: 14 }}>삭제</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={{ width: 130, height: 120, borderRadius: 20, borderWidth: 1, borderColor: '#DDDDDD', padding: 10 }}>
      <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => changeBookmarkLock()}>
          <LockIcons name={visible ? 'unlock' : 'lock'} size={24} color={'#767676'} />
        </TouchableOpacity>
        {showOption ? (
          <DeleteComp />
        ) : (
          <TouchableOpacity onPress={() => setShowOption(true)}>
            <Icons name="dots-three-vertical" size={16} color={'#767676'} />
          </TouchableOpacity>
        )}
      </View>
      <View style={{ alignItems: 'center', marginTop: 20, flexDirection: 'row', gap: 12, justifyContent: 'center' }}>
        <Text>{item.icon}</Text>
        <Text style={{ fontSize: 14, color: 'black', fontWeight: '400' }}>{item.name}</Text>
      </View>
    </View>
  )
}

export default CardComp
