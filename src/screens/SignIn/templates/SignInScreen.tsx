import React, { useMemo } from 'react'
import { Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet'

import TextInputComp from '../../../@common/components/TextInputComp'
import ButtonComp from '../../../@common/components/ButtonComp'
import CloseButton from '../../../@common/components/CloseButton'

function SignInScreen(props) {
  const { bottomSheetModalRef } = props
  const { push } = useNavigation()

  const snapPoints = useMemo(() => ['70%'], [])

  return (
    <BottomSheetModal ref={bottomSheetModalRef} index={0} snapPoints={snapPoints}>
      <BottomSheetView>
        <View style={{ paddingHorizontal: 40, paddingVertical: 20 }}>
          <View style={{ alignSelf: 'flex-end', marginBottom: 20 }}>
            <CloseButton
              onPress={() => {
                bottomSheetModalRef.current?.dismiss()
              }}
            />
          </View>
          <View style={{ alignItems: 'center', marginBottom: 40 }}>
            <Text style={{ fontSize: 28 }}>LOGIN</Text>
          </View>
          <View style={{ gap: 20 }}>
            <TextInputComp placeholder="로그인 아이디..." />
            <TextInputComp placeholder="패스워드..." />
            <ButtonComp
              text={'로그인'}
              func={() => {
                bottomSheetModalRef.current?.dismiss()

                push('BottomTabNavigator', { screen: 'Home' })
              }}
            />
          </View>
        </View>
      </BottomSheetView>
    </BottomSheetModal>
  )
}

export default SignInScreen
