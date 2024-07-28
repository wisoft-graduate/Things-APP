import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Dimensions, Text, TouchableOpacity, View } from 'react-native'

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
        width: width / 2.4,
        height: 200,
        borderRadius: 20,
        padding: 10,
      }}>
      {item.rank && (
        <View
          style={{
            backgroundColor: '#11111150',
            borderRadius: 100,
            width: 25,
            height: 25,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{ color: 'white', fontSize: 14, fontWeight: '700' }}>{item?.rank}</Text>
        </View>
      )}
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          flexDirection: 'row',
          alignItems: 'flex-end',
          gap: 3,
        }}>
        <Text style={{ fontSize: 14, color: 'white', fontWeight: '400' }}>{item?.id}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default CardComp
