import React, { useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import IonIcons from 'react-native-vector-icons/Ionicons'

import { passwordQuestions } from '../../assets/jsons/passwordQuestions'

function PasswordQuestionComp({ selfCheckQuestion, setSelfCheckQuestion }) {
  const [isOpen, setIsOpen] = useState(false)

  function OpenedQuestionComp() {
    return (
      <ScrollView style={{ height: 180 }}>
        <View
          style={{
            borderWidth: 1,
            borderRadius: 27,
            paddingHorizontal: 20,
            paddingVertical: 16,
            marginTop: -50,
            paddingTop: 50,
            justifyContent: 'space-between',
            //   flexDirection: 'row',
            borderColor: '#DDDDDD',
            gap: 8,
          }}>
          {passwordQuestions?.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setSelfCheckQuestion(item)
                  setIsOpen(false)
                }}>
                <Text style={{ color: 'black', fontSize: 16, fontWeight: '400' }} key={index}>
                  {item}
                </Text>
              </TouchableOpacity>
            )
          })}
        </View>
      </ScrollView>
    )
  }

  return (
    <View>
      <TouchableOpacity
        onPress={() => setIsOpen(!isOpen)}
        style={{
          zIndex: 20,
          backgroundColor: 'white',
          borderWidth: 1,
          borderRadius: 50,
          paddingHorizontal: 20,
          paddingVertical: 16,
          justifyContent: 'space-between',
          flexDirection: 'row',
          borderColor: '#DDDDDD',
          alignItems: 'center',
        }}>
        <Text style={{ fontSize: 16, color: selfCheckQuestion !== '' ? 'black' : 'gray', fontWeight: '400' }}>
          {selfCheckQuestion !== '' ? selfCheckQuestion : '본인 확인 질문 선택...'}
        </Text>
        <IonIcons name={isOpen ? 'chevron-up' : 'chevron-down'} size={24} color={'gray'} />
      </TouchableOpacity>
      {isOpen && <OpenedQuestionComp />}
    </View>
  )
}

export default PasswordQuestionComp
