import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Dimensions, Text, TouchableOpacity, View, Image } from 'react-native'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

import { backgroundImages } from '../../../assets/jsons/backgroundImage'

const width = Dimensions.get('screen').width

function CardComp({ item, index }) {
  const { push } = useNavigation()

  return (
    <TouchableOpacity
      onPress={() => {
        push('Detail', { params: item?.id, index })
      }}>
      <Image
        style={{
          marginRight: width / 20,
          marginTop: 10,
          width: width / 2.4,
          height: 200,
          borderRadius: 20,
          padding: 10,
        }}
        source={backgroundImages[index % 50].src}
      />
      <View
        style={{
          position: 'absolute',
          top: 10,
          bottom: 0,
          left: -30,
          right: 0,
          alignItems: 'center',
          justifyContent: 'center',
          padding: 10,
        }}>
        {item?.rank && (
          <View
            style={{
              backgroundColor: '#11111150',
              borderRadius: 100,
              width: 25,
              height: 25,
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: -100,
            }}>
            {item?.rank === 1 ? (
              <Icons name="crown" size={18} color={'white'} />
            ) : (
              <Text style={{ color: 'white', fontSize: 14, fontWeight: '700' }}>{item?.rank}</Text>
            )}
          </View>
        )}
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            flexDirection: 'row',
            alignItems: 'flex-end',
            alignSelf: 'flex-end',
            marginRight: 26,
            gap: 4,
          }}>
          <Icons name="eye" size={20} color={'white'} />
          <Text style={{ fontSize: 14, color: 'white', fontWeight: '400' }}>{item?.count}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default CardComp
