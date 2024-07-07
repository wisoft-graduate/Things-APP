import React, { useEffect, useMemo } from 'react'
import { FlatList, SafeAreaView, StatusBar, Text, View } from 'react-native'
import CommentComp from '../components/CommentComp'
import CommentTextInputComp from '../components/CommentTextInputComp'

function CommentsScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <FlatList
        data={[1, 2, 3, 4]}
        style={{ backgroundColor: 'white' }}
        contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 30, gap: 24 }}
        renderItem={item => <CommentComp />}
      />
      <CommentTextInputComp />
    </SafeAreaView>
  )
}

export default CommentsScreen
