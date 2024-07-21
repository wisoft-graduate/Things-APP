import React, { useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { Modal, Portal } from 'react-native-paper'
import AddNewListModal from './AddNewListModal'

function BookmarkModal({ isShowBookmarkModal, setIsShowBookmarkModal }) {
  const hideModal = () => setIsShowBookmarkModal(false)

  const [isShowAddListModal, setIsShowAddListModal] = useState(false)

  function BookmarkItem() {
    return (
      <TouchableOpacity
        style={{
          borderRadius: 20,
          borderWidth: 1,
          borderColor: '#ddd',
          paddingVertical: 22,
          alignItems: 'center',
          width: '47%',
        }}>
        <Text>자존감</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View>
      <AddNewListModal
        isShowAddListModal={isShowAddListModal}
        setIsShowAddListModal={setIsShowAddListModal}
        setIsShowBookmarkModal={setIsShowBookmarkModal}
      />
      <Portal>
        <Modal visible={isShowBookmarkModal} onDismiss={hideModal} contentContainerStyle={{ height: '60%' }}>
          <View
            style={{
              backgroundColor: 'white',
              padding: 20,
              margin: 16,
              borderRadius: 8,
              alignItems: 'center',
              gap: 16,
            }}>
            <Text>리스트 추가</Text>
            <TouchableOpacity
              onPress={() => {
                setIsShowBookmarkModal(false)
                setIsShowAddListModal(true)
              }}
              style={{
                backgroundColor: '#F3F3F3',
                width: 280,
                paddingVertical: 10,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 50,
              }}>
              <Text>새 리스트 생성</Text>
            </TouchableOpacity>
            <ScrollView
              contentContainerStyle={{ gap: 16, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
              <BookmarkItem />
              <BookmarkItem />
              <BookmarkItem />
              <BookmarkItem />
              <BookmarkItem />
              <BookmarkItem />
              <BookmarkItem />
              <BookmarkItem />
              <BookmarkItem />
              <BookmarkItem />
              <BookmarkItem />
              <BookmarkItem />
              <BookmarkItem />
            </ScrollView>
            <TouchableOpacity
              style={{
                backgroundColor: '#F3F3F3',
                width: 280,
                paddingVertical: 20,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 50,
              }}>
              <Text>저장</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </Portal>
    </View>
  )
}

export default BookmarkModal
