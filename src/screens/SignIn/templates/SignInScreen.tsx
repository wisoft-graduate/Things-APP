import React, { useMemo, useState } from 'react'
import { Alert, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet'

import * as ThingsAPI from '../../../api/index'
import TextInputComp from '../../../@common/components/TextInputComp'
import ButtonComp from '../../../@common/components/ButtonComp'
import CloseButton from '../../../@common/components/CloseButton'
import { accessTokenStorage, refreshTokenStorage, userIdStorage } from '../../../storage/secure'
import { setAxiosHeaders } from '../../../api/thingsAxios'
import { userInfoStore } from '../../../zustand/User'

function SignInScreen(props) {
  const { bottomSheetModalRef, setIsOpenedModal } = props
  const { push } = useNavigation()

  const { updateId } = userInfoStore()

  const [idValue, setIdValue] = useState<string>('')
  const [passwordValue, setPasswordValue] = useState<string>('')

  const snapPoints = useMemo(() => ['70%'], [])

  async function onSignIn() {
    const res = await ThingsAPI.postSignIn({ id: idValue, password: passwordValue })
    if (res?.data?.accessToken) {
      bottomSheetModalRef.current?.dismiss()
      setIsOpenedModal(false)
      setAxiosHeaders(res?.data?.accessToken)
      await accessTokenStorage.set(res?.data?.accessToken)
      await refreshTokenStorage.set(res?.data?.accessToken)
      await userIdStorage.set(idValue)
      updateId(idValue)
      push('BottomTabNavigator', { screen: 'Home' })
    } else {
      Alert.alert(res?.data?.message, '', [{}])
    }
  }

  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      index={0}
      snapPoints={snapPoints}
      onDismiss={() => {
        bottomSheetModalRef.current?.dismiss()
        setIsOpenedModal(false)
      }}>
      <BottomSheetView>
        <View style={{ paddingHorizontal: 40, paddingVertical: 20 }}>
          <View style={{ alignSelf: 'flex-end', marginBottom: 20 }}>
            <CloseButton
              onPress={() => {
                bottomSheetModalRef.current?.dismiss()
                setIsOpenedModal(false)
              }}
            />
          </View>
          <View style={{ alignItems: 'center', marginBottom: 40 }}>
            <Text style={{ fontSize: 28, color: 'black' }}>LOGIN</Text>
          </View>
          <View style={{ gap: 20 }}>
            <TextInputComp placeholder="로그인 아이디..." value={idValue} setValue={setIdValue} />
            <TextInputComp placeholder="패스워드..." value={passwordValue} setValue={setPasswordValue} />
            <ButtonComp
              text={'로그인'}
              func={() => {
                onSignIn()
              }}
            />
          </View>
        </View>
      </BottomSheetView>
    </BottomSheetModal>
  )
}

export default SignInScreen
