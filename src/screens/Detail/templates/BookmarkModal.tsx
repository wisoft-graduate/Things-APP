import React, { useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { Modal, Portal } from 'react-native-paper'
import AddNewListModal from './AddNewListModal'
import useBookmark from '../hooks/useBookmark'
import useGetBookmark from '../hooks/useGetBookmark'
import { Colors } from '../../../@common/styles/colors'

function BookmarkModal({ isShowBookmarkModal, setIsShowBookmarkModal, quotationId }) {
  const hideModal = () => setIsShowBookmarkModal(false)
  const { data } = useGetBookmark()
  const { putBookmark } = useBookmark()

  const bookmarkList = data?.data
  const [isShowAddListModal, setIsShowAddListModal] = useState(false)
  const [selectedItem, setSelectedItem] = useState({
    id: '',
    name: '',
    quotationIds: [],
    visibility: true,
    icon: '',
  })

  function BookmarkItem({ item }) {
    const params = {
      id: item?.id,
      name: item?.name,
      quotationIds: [item?.id, ...item?.quotations],
      quotationIds: [item?.id],
      visibility: item?.visibility,
      icon: item?.icon,
    }
    return (
      <TouchableOpacity
        onPress={() => {
          setSelectedItem(params)
        }}
        style={{
          borderRadius: 20,
          borderWidth: 1,
          borderColor: selectedItem?.id === item?.id ? Colors.green : '#ddd',
          backgroundColor: selectedItem?.id === item?.id ? '#CBF14750' : 'transparent',
          paddingVertical: 22,
          alignItems: 'center',
          width: '47%',
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 12,
        }}>
        <Text>{item.icon}</Text>
        <Text style={{ fontSize: 14, color: 'black', fontWeight: '400' }}>{item.name}</Text>
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
            <Text style={{ fontSize: 14, color: 'black', fontWeight: '400' }}>리스트 추가</Text>
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
              <Text style={{ fontSize: 14, color: 'black', fontWeight: '400' }}>새 리스트 생성</Text>
            </TouchableOpacity>
            <ScrollView
              contentContainerStyle={{ gap: 16, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
              {bookmarkList?.length === 0 && (
                <View style={{ alignItems: 'center', gap: 6 }}>
                  <Text style={{ fontSize: 14, color: 'gray', fontWeight: '400' }}>생성된 리스트가 없습니다.</Text>
                  <Text style={{ fontSize: 14, color: 'gray', fontWeight: '400' }}>새로 생성해주세요.</Text>
                </View>
              )}
              {bookmarkList?.map(item => (
                <BookmarkItem item={item} />
              ))}
            </ScrollView>
            <TouchableOpacity
              onPress={() => {
                if (selectedItem.id !== '') {
                  putBookmark(selectedItem)
                }
                hideModal()
              }}
              style={{
                backgroundColor: '#F3F3F3',
                width: 280,
                paddingVertical: 20,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 50,
              }}>
              <Text style={{ fontSize: 16, color: 'black', fontWeight: '500' }}>저장</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </Portal>
    </View>
  )
}

export default BookmarkModal
