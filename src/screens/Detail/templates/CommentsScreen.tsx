import React, { useEffect, useMemo } from 'react'
import { Text, View } from 'react-native'
import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet'
import { useNavigation } from '@react-navigation/native'
import CommentComp from '../components/CommentComp'

// function CommentsScreen() {
function CommentsScreen({ bottomSheetModalRef }) {
  const snapPoints = useMemo(() => ['70%'], [])
  const { setOptions } = useNavigation()

  useEffect(() => {
    setOptions({
      tabBarStyle: { display: 'none' },
    })
  }, [bottomSheetModalRef])

  return (
    <BottomSheetModal ref={bottomSheetModalRef} index={0} snapPoints={snapPoints}>
      <BottomSheetView>
        <View style={{ alignItems: 'center' }}>
          <Text>댓글</Text>
        </View>
        <CommentComp />
      </BottomSheetView>
    </BottomSheetModal>
  )
}

export default CommentsScreen
