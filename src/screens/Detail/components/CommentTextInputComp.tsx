import { useState } from 'react'
import { Colors } from '../../../@common/styles/colors'
import { Alert, SafeAreaView, Text, TouchableOpacity } from 'react-native'
import { TextInput, View } from 'react-native'
import IonIcons from 'react-native-vector-icons/Ionicons'

import * as ThingsAPI from '../../../api/index'
import { userIdStorage } from '../../../storage/secure'
import useComments from '../hooks/useComments'

function CommentTextInputComp({ quotationId, getComments }) {
  const [value, setValue] = useState<string>('')

  async function postComment() {
    const userId = await userIdStorage.get()
    const params = {
      quotationId,
      userId,
      content: value,
    }
    const response = await ThingsAPI.postComments(params)
    if (response) {
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
        <IonIcons name="person-circle-outline" size={40} color={'lightgray'} />
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
          <TouchableOpacity
            onPress={() => {
              if (value.length === 0) {
                Alert.alert('내용을 입력해주세요', '', [
                  {
                    text: '확인',
                  },
                ])
                return
              }
              postComment()
            }}>
            <View
              style={{
                width: 45,
                height: 30,
                backgroundColor: Colors.green,
                borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <IonIcons name="arrow-up" size={24} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default CommentTextInputComp
