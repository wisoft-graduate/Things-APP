import React, { useState } from 'react'
import { TextInput, TouchableOpacity, View } from 'react-native'
import Icons from 'react-native-vector-icons/Octicons'
import AntIcons from 'react-native-vector-icons/AntDesign'

import * as ThingsAPI from '../../../api/index'

function SearchTextInputComp({ setData, setIsShowSearchList }) {
  const [searchValue, setSearchValue] = useState('')

  async function searchQuotation() {
    const params = {
      searchWord: searchValue,
      page: 1,
      count: 20,
    }
    const res = await ThingsAPI.getQuotationSearch(params)
    if (res) {
      setIsShowSearchList(true)
      setData(res?.data)
    }
  }

  return (
    <View
      style={{
        marginTop: 20,
        flexDirection: 'row',
        backgroundColor: '#F3F3F3',
        height: 40,
        borderRadius: 40,
        paddingHorizontal: 20,
        alignItems: 'center',
        gap: 4,
      }}>
      <Icons name="search" size={18} color={'#8E8E93'} />
      <TextInput
        style={{ width: '90%' }}
        placeholder="저자, 명언으로 검색.."
        placeholderTextColor={'#767676'}
        value={searchValue}
        onChange={event => setSearchValue(event.nativeEvent.text)}
        onSubmitEditing={() => searchQuotation()}
      />
      <TouchableOpacity
        onPress={() => {
          setSearchValue('')
          setIsShowSearchList(false)
        }}>
        <AntIcons name="closecircleo" size={18} color={'gray'} />
      </TouchableOpacity>
    </View>
  )
}

export default SearchTextInputComp
