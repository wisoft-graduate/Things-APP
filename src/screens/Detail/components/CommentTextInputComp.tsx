import { useState } from 'react'
import { Colors } from '../../../@common/styles/colors'
import { SafeAreaView, Text, TouchableOpacity } from 'react-native'
import { TextInput, View } from 'react-native'

import * as ThingsAPI from '../../../api/index'
import { userIdStorage } from '../../../storage/secure'
import useComments from '../hooks/useComments'

function CommentTextInputComp({ quotationId, getComments }) {
  const [value, setValue] = useState<string>('')

  // console.log(data.id)

  async function postComment() {
    const userId = await userIdStorage.get()
    const params = {
      quotationId,
      userId,
      content: value,
    }
    const response = await ThingsAPI.postComments(params)
    if (response) {
      console.log(response)
      getComments({ quotationId })
      setValue('')
    }
  }

  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: 'white',
          position: 'absolute',
          flexDirection: 'row',
          bottom: 0,
          paddingBottom: 12,
          paddingHorizontal: 20,
          width: '100%',
          justifyContent: 'space-between',
        }}>
        <View style={{ width: 40, height: 40, borderRadius: 100, backgroundColor: 'skyblue' }} />
        <View
          style={{
            backgroundColor: '#f3f3f3',
            width: '84%',
            height: 40,
            alignItems: 'center',
            flexDirection: 'row',
            borderRadius: 50,
            justifyContent: 'space-between',
            paddingHorizontal: 6,
          }}>
          <TextInput
            style={{
              width: '80%',
              height: 40,
            }}
            value={value}
            onChange={event => setValue(event.nativeEvent.text)}
          />
          <TouchableOpacity onPress={() => postComment()}>
            <View style={{ width: 45, height: 30, backgroundColor: Colors.green, borderRadius: 20 }} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default CommentTextInputComp
