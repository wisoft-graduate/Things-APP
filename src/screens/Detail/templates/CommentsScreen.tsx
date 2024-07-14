import React, { useEffect, useState } from 'react'
import { FlatList, SafeAreaView, StatusBar, View } from 'react-native'
import CommentComp from '../components/CommentComp'
import CommentTextInputComp from '../components/CommentTextInputComp'
import { useRoute } from '@react-navigation/native'

import * as ThingsAPI from '../../../api/index'

function CommentsScreen() {
  const route = useRoute()
  const quotationId = route?.params?.id

  const [commentsList, setCommentsList] = useState()

  async function getComments({ quotationId }) {
    const params = {
      // commentIds?: string[] | string
      quotationId,
      // parentId?: string
      isTopDepth: true,
    }
    const response = await ThingsAPI.getComments(params)
    setCommentsList(response?.data)
  }

  useEffect(() => {
    getComments({ quotationId })
  }, [quotationId])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <FlatList
        data={commentsList}
        style={{ backgroundColor: 'white' }}
        contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 30, gap: 24 }}
        renderItem={item => <CommentComp item={item} getComments={getComments} />}
        ListFooterComponent={<View style={{ height: 30 }} />}
      />
      <CommentTextInputComp quotationId={quotationId} getComments={getComments} />
    </SafeAreaView>
  )
}

export default CommentsScreen
