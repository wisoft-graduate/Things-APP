import React from 'react'
import { Text, View } from 'react-native'
import Icons from 'react-native-vector-icons/Entypo'
import PlusIcons from 'react-native-vector-icons/AntDesign'

function AddCardComp() {
  return (
    <View style={{ width: 130, height: 120, borderRadius: 20, backgroundColor: '#F3F3F3', padding: 10 }}>
      <View style={{ justifyContent: 'flex-end', flexDirection: 'row' }}>
        <Icons name="dots-three-vertical" size={16} color={'#767676'} />
      </View>
      <View style={{ alignItems: 'center', marginTop: 14, gap: 6 }}>
        <PlusIcons name="pluscircleo" size={25} color={'#767676'} />
        <Text style={{ fontSize: 14, color: '#767676' }}>새 리스트 생성</Text>
      </View>
    </View>
  )
}

export default AddCardComp
