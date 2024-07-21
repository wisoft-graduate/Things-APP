import React from 'react'
import { Text, View } from 'react-native'
import Icons from 'react-native-vector-icons/Entypo'
import LockIcons from 'react-native-vector-icons/AntDesign'

function CardComp({ item }) {
  return (
    <View style={{ width: 130, height: 120, borderRadius: 20, borderWidth: 1, borderColor: '#DDDDDD', padding: 10 }}>
      <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
        <LockIcons name={item?.visibility ? 'unlock' : 'lock'} size={24} color={'#767676'} />
        <Icons name="dots-three-vertical" size={16} color={'#767676'} />
      </View>
      <View style={{ alignItems: 'center', marginTop: 20, flexDirection: 'row', gap: 12, justifyContent: 'center' }}>
        <Text>{item.icon}</Text>
        <Text>{item.name}</Text>
      </View>
    </View>
  )
}

export default CardComp
