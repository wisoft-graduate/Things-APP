import React, { useEffect, useState } from 'react'
import { Image, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import Icons from 'react-native-vector-icons/Fontisto'
import SetIcons from 'react-native-vector-icons/AntDesign'
import PenIcons from 'react-native-vector-icons/Octicons'
import { useNavigation } from '@react-navigation/native'
import IonIcons from 'react-native-vector-icons/Ionicons'

import * as ThingsAPI from '../../api'
import { Colors } from '../../@common/styles/colors'
import TagButton from './components/TagButton'
import { userInfoStore } from '../../zustand/User'
import useGetBookmark from '../../screens/Detail/hooks/useGetBookmark'
import useGetUserInfo from '../../@common/hooks/useGetUserInfo'
import OpinionCard from './components/OpinionCard'

function MyScreen() {
  const navigation = useNavigation()
  const { getUser } = useGetUserInfo()

  const { data } = userInfoStore()
  const { data: bookmarkData } = useGetBookmark()

  const bookmarkList = bookmarkData?.data
  const [opinions, setOpinions] = useState([])
  const [selectedFolder, setSelectedFolder] = useState('like')

  async function getOpinions() {
    const response = await ThingsAPI.getLikesUserId({ userId: data.id })
    if (response) {
      console.log(response.data)
      setOpinions(response.data)
    }
  }

  useEffect(() => {
    if (data.id === '') {
      navigation.reset({ routes: [{ name: 'Home' }] })
      navigation.navigate('SignHome')
      return
    }
  }, [data])

  useEffect(() => {
    getOpinions()
    getUser()
  }, [])

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar barStyle="dark-content" />
      <View
        style={{
          paddingHorizontal: 30,
          paddingVertical: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.push('ProfileEdit')
          }}
          style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
          <Text style={{ fontSize: 22, fontWeight: '500' }}>{data?.nickname}</Text>
          <View
            style={{
              width: 22,
              height: 22,
              borderRadius: 22,
              backgroundColor: Colors.green,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <PenIcons name="pencil" size={12} />
          </View>
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center' }}>
          <TouchableOpacity
            onPress={() => {
              navigation.push('Push')
            }}>
            <Icons name="bell" size={20} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.push('Setting')
            }}>
            <SetIcons name="setting" size={22} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 50, alignItems: 'center', marginTop: 30 }}>
          {data?.profilePath ? (
            <Image source={{ uri: data?.profilePath }} style={{ width: 80, height: 80, borderRadius: 100 }} />
          ) : (
            <IonIcons name="person-circle-outline" size={80} color={'lightgray'} />
          )}

          <View style={{ alignItems: 'center', gap: 6 }}>
            <Text style={{ fontSize: 16, fontWeight: '500', color: 'black' }}>{data?.likeQuotationCount ?? 0}</Text>
            <Text style={{ fontSize: 14, fontWeight: '400', color: 'black' }}>좋아요</Text>
          </View>
          <View style={{ alignItems: 'center', gap: 6 }}>
            <Text style={{ fontSize: 16, fontWeight: '500', color: 'black' }}>{data?.bookmarkCount ?? 0}</Text>
            <Text style={{ fontSize: 14, fontWeight: '400', color: 'black' }}>북마크</Text>
          </View>
        </View>
        <View style={{ marginLeft: 35, gap: 12, marginTop: 40 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, width: '80%' }}>
            <Image style={{ width: 27, height: 25 }} source={require('../../assets/images/like_writer.png')} />
            <Text style={{ fontSize: 12, fontWeight: '400', color: 'black' }}>{data?.favoriteAuthor ?? '-'}</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, width: '80%' }}>
            <Image style={{ width: 27, height: 24 }} source={require('../../assets/images/like_quote.png')} />
            <Text style={{ fontSize: 12, fontWeight: '400', color: 'black' }}>{data?.favoriteQuotation ?? '-'}</Text>
          </View>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingVertical: 30, marginLeft: 15 }}>
          <TagButton
            item={{
              id: 'like',
              icon: '❤️',
              name: '좋아요',
            }}
            selectedFolder={selectedFolder}
            setSelectedFolder={setSelectedFolder}
          />
          {bookmarkList?.map(item => (
            <TagButton item={item} selectedFolder={selectedFolder} setSelectedFolder={setSelectedFolder} />
          ))}
        </ScrollView>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {opinions?.map((item, index) => (
            <OpinionCard item={item} index={index} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default MyScreen
