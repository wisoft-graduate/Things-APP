import React, { useState } from 'react'
import { Share, Text, TouchableOpacity, View } from 'react-native'
import Icons from 'react-native-vector-icons/Ionicons'

import ChatIconSvg from '../../../assets/svgs/ChatIconSvg'
import { useNavigation } from '@react-navigation/native'

function ActionButtons({ handlePresentModalPress }) {
  const navigation = useNavigation()

  const [isLike, setIsLike] = useState<boolean>(false)
  const [isBookmark, setIsBookmark] = useState<boolean>(false)

  function onShareNews() {
    Share.share({
      message: 'wow@!',
    })
  }

  return (
    <View style={{ gap: 25, justifyContent: 'center' }}>
      <TouchableOpacity style={{ gap: 2, justifyContent: 'center' }} onPress={() => setIsLike(!isLike)}>
        <Icons name="heart-outline" size={24} color={isLike ? 'red' : 'white'} />
        <Text style={{ color: 'white', fontSize: 10, fontWeight: '400' }}>2.2만</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          // navigation.navigate('Comments')
          handlePresentModalPress()
        }}
        style={{ gap: 2, justifyContent: 'center' }}>
        <ChatIconSvg />
        <Text style={{ color: 'white', fontSize: 10, fontWeight: '400' }}>2.2만</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ gap: 2, justifyContent: 'center' }} onPress={() => setIsBookmark(!isBookmark)}>
        <Icons name="bookmark-outline" size={24} color={isBookmark ? 'red' : 'white'} />
        <Text style={{ color: 'white', fontSize: 10, fontWeight: '400' }}>2.2만</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onShareNews()} style={{ gap: 2, justifyContent: 'center' }}>
        <Icons name="share-outline" size={24} color={'white'} />
        <Text style={{ color: 'white', fontSize: 10, fontWeight: '400' }}>2.2만</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ActionButtons
