import React, { useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'

import { passwordQuestions } from '../../assets/jsons/passwordQuestions'

function PasswordQuestionComp() {
  const [isOpen, setIsOpen] = useState(false)

  function OpenedQuestionComp() {
    return (
      <ScrollView style={{ height: 100 }}>
        <View
          style={{
            borderWidth: 1,
            borderRadius: 27,
            padding: 20,
            marginTop: -50,
            paddingTop: 50,
            justifyContent: 'space-between',
            //   flexDirection: 'row',
            borderColor: '#DDDDDD',
          }}>
          {passwordQuestions.map((item, index) => {
            return <Text key={index}>{item}</Text>
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
          padding: 20,
          justifyContent: 'space-between',
          flexDirection: 'row',
          borderColor: '#DDDDDD',
        }}>
        <Text style={{ fontSize: 14, color: 'gray' }}>본인 확인 질문 선택...</Text>
      </TouchableOpacity>
      {isOpen && <OpenedQuestionComp />}
    </View>
  )
}

export default PasswordQuestionComp
