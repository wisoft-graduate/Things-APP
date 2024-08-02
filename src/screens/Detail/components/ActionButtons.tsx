import React, { useEffect, useState } from 'react'
import { Share, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icons from 'react-native-vector-icons/Ionicons'

import ChatIconSvg from '../../../assets/svgs/ChatIconSvg'
import { useNavigation } from '@react-navigation/native'
import BookmarkModal from '../templates/BookmarkModal'
import { userInfoStore } from '../../../zustand/User'
import * as ThingsAPI from '../../../api/index'

function ActionButtons({ item }) {
  const navigation = useNavigation()

  const [isLike, setIsLike] = useState<boolean>(false)
  const [isShowBookmarkModal, setIsShowBookmarkModal] = useState(false)
  const [likeId, setLikeId] = useState('')
  const [likeCount, setLikeCount] = useState(item?.likeCount)

  const { data: userData } = userInfoStore()

  const showModal = () => setIsShowBookmarkModal(true)

  function onShareNews() {
    Share.share({
      message: 'wow@!',
    })
  }

  async function fetchLike() {
    if (!isLike) {
      const params = {
        userId: userData.id,
        quotationId: item?.id,
      }
      const response = await ThingsAPI.postLikes(params)
      if (response) {
        setLikeCount(likeCount + 1)
        setIsLike(true)
      }
    } else {
      const response = await ThingsAPI.deleteLikes({ id: likeId })
      if (response) {
        setLikeCount(likeCount - 1)
        setIsLike(false)
      }
    }
  }

  async function getLike() {
    const params = {
      userId: userData.id,
      quotationId: item?.id,
    }
    const response = await ThingsAPI.getLikes(params)
    if (response?.data?.id) {
      setLikeId(response?.data?.id)
      setIsLike(true)
    }
  }

  useEffect(() => {
    if (userData.id === '') {
      return
    }
    getLike()
  }, [item?.id])

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
          fetchLike()
        }}>
        <Icons name="heart-outline" size={24} color={isLike ? 'red' : 'white'} />
        <Text style={{ color: 'white', fontSize: 10, fontWeight: '400' }}>{likeCount}</Text>
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
