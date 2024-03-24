import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import IonIcons from 'react-native-vector-icons/Ionicons'

function CardComp() {
  const { push } = useNavigation()
  return (
    <TouchableOpacity
      onPress={() => {
        push('Detail')
      }}
      style={{ backgroundColor: 'coral', width: '47%', height: 200, borderRadius: 20, padding: 10 }}>
      <View
        style={{
          backgroundColor: '#11111150',
          borderRadius: 100,
          width: 25,
          height: 25,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{ color: 'white', fontWeight: '700' }}>1</Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          flexDirection: 'row',
          alignItems: 'flex-end',
          gap: 3,
        }}>
        <View style={{ flexDirection: 'row', gap: 3, alignItems: 'center' }}>
          <IonIcons name="eye" size={15} color={'white'} />
          <Text style={{ fontSize: 10, color: 'white' }}>10.3 M</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default CardComp
