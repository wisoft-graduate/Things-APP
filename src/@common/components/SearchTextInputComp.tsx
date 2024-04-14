import React from 'react'
import { TextInput, View } from 'react-native'
import Icons from 'react-native-vector-icons/Octicons'

function SearchTextInputComp() {
  return (
    <View
      style={{
        marginTop: 20,
        flexDirection: 'row',
        backgroundColor: '#F3F3F3',
        height: 35,
        borderRadius: 40,
        paddingHorizontal: 20,
        alignItems: 'center',
        gap: 4,
      }}>
      <Icons name="search" size={16} color={'#8E8E93'} />
      <TextInput style={{ width: '100%' }} placeholder="저자, 명언으로 검색.." placeholderTextColor={'#767676'} />
    </View>
  )
}

export default SearchTextInputComp
