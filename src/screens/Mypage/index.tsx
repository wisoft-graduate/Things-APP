import React from 'react'
import { Dimensions, Image, SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native'
import Icons from 'react-native-vector-icons/Fontisto'
import SetIcons from 'react-native-vector-icons/AntDesign'
import PenIcons from 'react-native-vector-icons/Octicons'
import { Colors } from '../../@common/styles/colors'
import TagButton from './components/TagButton'
import { useNavigation } from '@react-navigation/native'

const { width } = Dimensions.get('window')

function MyScreen() {
  const navigation = useNavigation()

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
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
          <Text style={{ fontSize: 22, fontWeight: '500' }}>nickname</Text>
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
        </View>

        <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center' }}>
          <Icons name="bell" size={20} />
          <SetIcons name="setting" size={22} />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 50, alignItems: 'center', marginTop: 30 }}>
          <View style={{ backgroundColor: 'coral', width: 80, height: 80, borderRadius: 80 }} />
          <View style={{ alignItems: 'center', gap: 6 }}>
            <Text style={{ fontSize: 16, fontWeight: '500', color: 'black' }}>154</Text>
            <Text style={{ fontSize: 14, fontWeight: '400', color: 'black' }}>좋아요</Text>
          </View>
          <View style={{ alignItems: 'center', gap: 6 }}>
            <Text style={{ fontSize: 16, fontWeight: '500', color: 'black' }}>32</Text>
            <Text style={{ fontSize: 14, fontWeight: '400', color: 'black' }}>북마크</Text>
          </View>
        </View>
        <View style={{ marginLeft: 35, gap: 12, marginTop: 40 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
            <Image style={{ width: 27, height: 25 }} source={require('../../assets/images/like_writer.png')} />
            <Text style={{ fontSize: 12, fontWeight: '400', color: 'black' }}>윈스턴 처칠 Sir Winston churchil</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
            <Image style={{ width: 27, height: 24 }} source={require('../../assets/images/like_quote.png')} />
            <Text style={{ fontSize: 12, fontWeight: '400', color: 'black' }}>
              희망은 백일몽이다. - 아리스토텔레스 Aristotle
            </Text>
          </View>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingVertical: 30, marginLeft: 15 }}>
          <TagButton />
          <TagButton />
          <TagButton />
          <TagButton />
          <TagButton />
          <TagButton />
        </ScrollView>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          <View
            style={{
              width: width / 3,
              height: width / 3,
              backgroundColor: 'lightgray',
              borderWidth: 1,
              borderColor: '#1F1F25',
            }}
          />
          <View
            style={{
              width: width / 3,
              height: width / 3,
              backgroundColor: 'lightgray',
              borderWidth: 1,
              borderColor: '#1F1F25',
            }}
          />
          <View
            style={{
              width: width / 3,
              height: width / 3,
              backgroundColor: 'lightgray',
              borderWidth: 1,
              borderColor: '#1F1F25',
            }}
          />
          <View
            style={{
              width: width / 3,
              height: width / 3,
              backgroundColor: 'lightgray',
              borderWidth: 1,
              borderColor: '#1F1F25',
            }}
          />
          <View
            style={{
              width: width / 3,
              height: width / 3,
              backgroundColor: 'lightgray',
              borderWidth: 1,
              borderColor: '#1F1F25',
            }}
          />
          <View
            style={{
              width: width / 3,
              height: width / 3,
              backgroundColor: 'lightgray',
              borderWidth: 1,
              borderColor: '#1F1F25',
            }}
          />
          <View
            style={{
              width: width / 3,
              height: width / 3,
              backgroundColor: 'lightgray',
              borderWidth: 1,
              borderColor: '#1F1F25',
            }}
          />
          <View
            style={{
              width: width / 3,
              height: width / 3,
              backgroundColor: 'lightgray',
              borderWidth: 1,
              borderColor: '#1F1F25',
            }}
          />
          <View
            style={{
              width: width / 3,
              height: width / 3,
              backgroundColor: 'lightgray',
              borderWidth: 1,
              borderColor: '#1F1F25',
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default MyScreen
