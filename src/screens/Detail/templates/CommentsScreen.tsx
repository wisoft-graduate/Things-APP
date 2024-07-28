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
  const [reCommentId, setReCommentId] = useState(undefined)

  async function getComments({ quotationId }) {
    const params = {
      // commentIds?: string[] | string
      quotationId,
      parentId: reCommentId,
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
        renderItem={item => {
          return (
            <View>
              <CommentComp item={item} getComments={getComments} setReCommentId={setReCommentId} />
              <View style={{ paddingLeft: 40, marginTop: 20 }}>
                {item?.item?.childComments?.map(childComment => (
                  <CommentComp childComment={childComment} getComments={getComments} setReCommentId={setReCommentId} />
                ))}
              </View>
            </View>
          )
        }}
        ListFooterComponent={<View style={{ height: 30 }} />}
      />
      <CommentTextInputComp
        quotationId={quotationId}
        getComments={getComments}
        reCommentId={reCommentId}
        setReCommentId={setReCommentId}
      />
    </SafeAreaView>
  )
}

export default CommentsScreen
