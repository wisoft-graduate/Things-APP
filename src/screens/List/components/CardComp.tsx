import React from 'react'
import { Text, View } from 'react-native'
import Icons from 'react-native-vector-icons/Entypo'
import LockIcons from 'react-native-vector-icons/AntDesign'

function CardComp() {
  return (
    <View style={{ width: 130, height: 120, borderRadius: 20, borderWidth: 1, borderColor: '#DDDDDD', padding: 10 }}>
      <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
        <LockIcons name="lock" size={24} color={'#767676'} />
        <Icons name="dots-three-vertical" size={16} color={'#767676'} />
      </View>
      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <Text>adf</Text>
      </View>
    </View>
  )
}

export default CardComp
