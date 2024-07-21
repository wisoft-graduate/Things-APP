import React, { useState } from 'react'
import { Share, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icons from 'react-native-vector-icons/Ionicons'

import ChatIconSvg from '../../../assets/svgs/ChatIconSvg'
import { useNavigation } from '@react-navigation/native'
import BookmarkModal from '../templates/BookmarkModal'
import { userInfoStore } from '../../../zustand/User'

function ActionButtons({ item }) {
  const navigation = useNavigation()

  const [isLike, setIsLike] = useState<boolean>(false)
  const [isShowBookmarkModal, setIsShowBookmarkModal] = useState(false)

  const { data: userData } = userInfoStore()

  const showModal = () => setIsShowBookmarkModal(true)

  function onShareNews() {
    Share.share({
      message: 'wow@!',
    })
  }

  return (
    <View style={styles.container}>
      <BookmarkModal
        isShowBookmarkModal={isShowBookmarkModal}
        setIsShowBookmarkModal={setIsShowBookmarkModal}
        quotationId={item.id}
      />
      <TouchableOpacity
        style={{ gap: 2, justifyContent: 'center', alignItems: 'center' }}
        onPress={() => {
          if (userData.id === '') {
            navigation.navigate('SignHome')
            return
          }
          setIsLike(!isLike)
        }}>
        <Icons name="heart-outline" size={24} color={isLike ? 'red' : 'white'} />
        <Text style={{ color: 'white', fontSize: 10, fontWeight: '400' }}>{item?.likeCount}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Comments', { id: item?.id })
        }}
        style={{ gap: 2, justifyContent: 'center', alignItems: 'center' }}>
        <ChatIconSvg />
        <Text style={{ color: 'white', fontSize: 10, fontWeight: '400' }}>{item?.commentCount}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => onShareNews()}
        style={{ gap: 2, justifyContent: 'center', alignItems: 'center' }}>
        <Icons name="share-outline" size={24} color={'white'} />
        <Text style={{ color: 'white', fontSize: 10, fontWeight: '400' }}>{item?.shareCount}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ gap: 2, justifyContent: 'center', alignItems: 'center' }}
        onPress={() => {
          if (userData.id === '') {
            navigation.navigate('SignHome')
            return
          }
          showModal()
        }}>
        <Icons name="bookmark-outline" size={24} color={'white'} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 25,
    justifyContent: 'center',
  },
})

export default ActionButtons
