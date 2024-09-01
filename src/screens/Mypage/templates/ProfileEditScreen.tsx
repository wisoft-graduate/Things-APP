import React, { useCallback, useEffect, useState } from 'react'
import { Alert, Image, Linking, Platform, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import Icons from 'react-native-vector-icons/Feather'
import IonIcons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import ImagePicker from 'react-native-image-crop-picker'
import { PERMISSIONS, check, request } from 'react-native-permissions'
import DeviceInfo from 'react-native-device-info'

import * as ThingsAPI from '../../../api/index'
import { Colors } from '../../../@common/styles/colors'
import TextInputComp from '../../../@common/components/TextInputComp'
import { userInfoStore } from '../../../zustand/User'
import useAndroidPermission from '../hooks/useAndroidPermission'
import useGetUserInfo from '../../../@common/hooks/useGetUserInfo'

function ProfileEditScreen() {
  const { goBack, setOptions } = useNavigation()
  const { data } = userInfoStore()

  const [value, setValue] = useState(data?.nickname) //닉네임 변경
  const { getUser } = useGetUserInfo()

  // 이미지 수정
  const [imageUri, setImageUri] = useState<string>(data?.profilePath)
  const [newImageData, setNewImageData] = useState('')
  const [isSuccess, setIsSuccess] = useState<boolean>(true)

  const supportedFormats = ['image/jpeg', 'image/png', 'image/jpg']
  useAndroidPermission()

  const selectImage = () => {
    ImagePicker.openPicker({
      width: 472,
      height: 472,
      cropping: true,
      includeBase64: true,
      cropperCircleOverlay: true,
      compressImageQuality: 0.7,
      mediaType: 'photo',
    }).then(image => {
      if (image.size > 1000 * 1000 * 10) {
        Alert.alert('최대 10MB까지만 업로드 가능해요')
        return
      }
      if (!supportedFormats.includes(image.mime)) {
        Alert.alert('.jpg .jpeg .png만 업로드 가능해요')
        return
      }
      setImageUri(image.path)
      // const base64Data = `data:${image.mime};base64,${image.data}`
      const base64Data = `${image.data}`
      setNewImageData(base64Data)
    })
  }

  function PhotoPermissionCheckFunction() {
    const alertFunc = (result: string, text: string) => {
      if (result !== 'granted') {
        Alert.alert('', text, [
          { text: '취소', style: 'cancel' },
          { text: '설정', onPress: () => Linking.openSettings() },
        ])
      } else {
        selectImage()
      }
    }
    const deviceInfo = DeviceInfo.getSystemVersion()

    if (Platform.OS === 'ios') {
      request(PERMISSIONS.IOS.PHOTO_LIBRARY).then(result => {
        if (result !== 'granted') {
          check(PERMISSIONS.IOS.PHOTO_LIBRARY).then(result => {
            const text = "프로필 이미지를 편집하려면\n'사진' 접근권한을 허용해야 합니다."
            alertFunc(result, text)
          })
        } else {
          selectImage()
        }
      })
    }

    if (parseInt(deviceInfo, 10) >= 13 && Platform.OS === 'android') {
      check(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES).then(result => {
        const text = "프로필 이미지를 편집하려면\n'권한' > '사진 및 동영상'의\n 접근권한을 허용해야 합니다."
        alertFunc(result, text)
      })
    }
    if (parseInt(deviceInfo, 10) < 13 && Platform.OS === 'android') {
      selectImage()
    }
  }

  async function onEditProfile() {
    // let params
    console.log('newImageData', newImageData, value)
    if (newImageData !== '') {
      const params = {
        id: data?.id,
        nickname: value,
        profileImageBase64: newImageData,
      }
      const response = await ThingsAPI.putUsers(params)
      // if (response) {
      //   getUser()
      // }
    } else {
      const params = {
        id: data?.id,
        nickname: value,
      }
      const response = await ThingsAPI.putUsers(params)
      // if (response) {
      //   getUser()
      // }
    }

    // goBack()
    return
  }

  useEffect(() => {
    if (value.length === 0) {
      setIsSuccess(false)
    } else {
      setIsSuccess(true)
    }
  }, [value])

  useEffect(() => {
    setImageUri(data?.profilePath)
    setOptions({
      headerShown: false,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess])

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          paddingVertical: 10,
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => goBack()}>
          <Icons name="chevron-left" color={'black'} size={26} />
        </TouchableOpacity>
        <Text style={{ fontSize: 18, fontWeight: '500', color: 'black' }}>프로필 편집</Text>
        <TouchableOpacity
          onPress={() => {
            onEditProfile()
          }}
          disabled={!isSuccess}>
          <Text style={{ fontSize: 16, color: isSuccess ? 'green' : '#767676', fontWeight: '400' }}>완료</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{ alignItems: 'center', marginTop: 40 }}
        onPress={() => {
          PhotoPermissionCheckFunction()
        }}>
        {imageUri !== '' && imageUri ? (
          <Image source={{ uri: imageUri }} style={{ width: 100, height: 100, borderRadius: 100 }} />
        ) : (
          <View
            style={{
              width: 100,
              height: 100,
              borderRadius: 100,
              backgroundColor: 'lightgray',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <IonIcons name="person" size={70} color={'white'} />
          </View>
        )}

        <View
          style={{
            width: 30,
            height: 30,
            borderRadius: 100,
            backgroundColor: Colors.green,
            zIndex: 10,
            marginTop: -30,
            marginRight: -70,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icons name="camera" color={'black'} size={16} />
        </View>
      </TouchableOpacity>
      <View style={{ paddingHorizontal: 48, marginTop: 40, gap: 4 }}>
        <TextInputComp placeholder="닉네임을 입력해주세요." value={value} setValue={setValue} />
        <Text style={{ fontSize: 12, fontWeight: '300', color: '#797979', marginLeft: 20 }}>
          영어(대문자,소문자), 한글, 숫자만 가능
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default ProfileEditScreen
