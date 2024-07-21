import React, { useState } from 'react'
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Modal, Portal } from 'react-native-paper'
import EmojiPicker from 'rn-emoji-keyboard'

import { Colors } from '../../../@common/styles/colors'
import useBookmark from '../hooks/useBookmark'
import useGetBookmark from '../hooks/useGetBookmark'

function AddNewListModal({ isShowAddListModal, setIsShowAddListModal, setIsShowBookmarkModal }) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [value, setValue] = useState<string>('')
  const [icon, setIcon] = useState<string>('')
  const [isSelectedShow, setIsSelectedShow] = useState<boolean>(true)

  const { postBookmark } = useBookmark()
  const { refetch } = useGetBookmark()

  return (
    <View>
      <Portal>
        <Modal visible={isShowAddListModal} contentContainerStyle={{ height: '60%' }}>
          <View
            style={{
              backgroundColor: 'white',
              padding: 20,
              margin: 16,
              borderRadius: 8,
              alignItems: 'center',
              gap: 16,
            }}>
            <Text style={{ fontSize: 14, color: 'black', fontWeight: '400' }}>새 리스트 생성</Text>
            <EmojiPicker
              onEmojiSelected={icon => {
                setIcon(icon.emoji)
              }}
              open={isOpen}
              onClose={() => setIsOpen(false)}
              enableSearchBar
            />
            <View style={{ flexDirection: 'row', gap: 10 }}>
              <TouchableOpacity
                onPress={() => {
                  setIsOpen(true)
                }}
                style={{
                  backgroundColor: '#F3F3F3',
                  width: 30,
                  paddingVertical: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 50,
                }}>
                <Text>{icon === '' ? '+' : icon}</Text>
              </TouchableOpacity>
              <TextInput
                style={{
                  backgroundColor: '#F3F3F3',
                  width: 200,
                  paddingVertical: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 50,
                }}
                value={value}
                onChange={event => setValue(event.nativeEvent.text)}
                placeholder="새 리스트 명을 입력해 주세요"
              />
            </View>
            <View style={{ height: 1, backgroundColor: 'lightgray', width: '100%' }} />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', width: '100%' }}>
              <Text style={{ fontSize: 14, color: 'black', fontWeight: '400' }}>공개 여부</Text>
              <View style={{ flexDirection: 'row', gap: 16 }}>
                <TouchableOpacity
                  onPress={() => {
                    setIsSelectedShow(true)
                  }}
                  style={{
                    paddingVertical: 6,
                    borderWidth: 1,
                    width: 70,
                    alignItems: 'center',
                    borderRadius: 100,
                    borderColor: isSelectedShow ? Colors.green : '#ddd',
                    backgroundColor: isSelectedShow ? '#CBF14740' : 'transparent',
                  }}>
                  <Text style={{ fontSize: 14, color: 'black', fontWeight: '400' }}>공개</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setIsSelectedShow(false)
                  }}
                  style={{
                    paddingVertical: 6,
                    borderWidth: 1,
                    width: 70,
                    alignItems: 'center',
                    borderRadius: 100,
                    borderColor: !isSelectedShow ? Colors.green : '#ddd',
                    backgroundColor: !isSelectedShow ? '#CBF14740' : 'transparent',
                  }}>
                  <Text style={{ fontSize: 14, color: 'black', fontWeight: '400' }}>비공개</Text>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {
                setValue('')
                setIsShowAddListModal(false)
                setIsShowBookmarkModal(true)
                postBookmark({
                  name: value,
                  icon,
                  isVisibility: isSelectedShow,
                })
                refetch()
              }}
              style={{
                marginTop: 40,
                backgroundColor: '#F3F3F3',
                width: 280,
                paddingVertical: 20,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 50,
              }}>
              <Text style={{ fontSize: 14, color: 'black', fontWeight: '400' }}>저장</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </Portal>
    </View>
  )
}

export default AddNewListModal
