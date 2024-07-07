import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Dimensions, Text, TouchableOpacity, View } from 'react-native'
import IonIcons from 'react-native-vector-icons/Ionicons'

const width = Dimensions.get('screen').width

function CardComp({ item }) {
  const { push } = useNavigation()

  return (
    <TouchableOpacity
      onPress={() => {
        push('Detail', { params: item?.id })
      }}
      style={{
        backgroundColor: 'coral',
        width: width / 2.3,
        height: 200,
        borderRadius: 20,
        padding: 10,
      }}>
      <View
        style={{
          backgroundColor: '#11111150',
          borderRadius: 100,
          width: 25,
          height: 25,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{ color: 'white', fontWeight: '700' }}>{item?.rank}</Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          flexDirection: 'row',
          alignItems: 'flex-end',
          gap: 3,
        }}>
        <Text style={{ fontSize: 14, color: 'white' }}>{item?.id}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default CardComp
