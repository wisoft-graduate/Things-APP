import React, { useState } from 'react'
import { Share, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icons from 'react-native-vector-icons/Ionicons'

import ChatIconSvg from '../../../assets/svgs/ChatIconSvg'
import { useNavigation } from '@react-navigation/native'

function ActionButtons({ item }) {
  const navigation = useNavigation()

  const [isLike, setIsLike] = useState<boolean>(false)
  const [isBookmark, setIsBookmark] = useState<boolean>(false)

  function onShareNews() {
    Share.share({
      message: 'wow@!',
    })
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ gap: 2, justifyContent: 'center', alignItems: 'center' }}
        onPress={() => setIsLike(!isLike)}>
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
        onPress={() => setIsBookmark(!isBookmark)}>
        <Icons name="bookmark-outline" size={24} color={isBookmark ? 'red' : 'white'} />
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
