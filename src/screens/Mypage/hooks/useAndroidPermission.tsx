import { useEffect } from 'react'
import { PermissionsAndroid, Platform } from 'react-native'

function useAndroidPermission() {
  const hasAndroidPermission = async () => {
    /** @description 외부 스토리지를 읽고 쓰는 권한 가져오기 */
    const permission = PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES

    const isPermission = await PermissionsAndroid.check(permission)
    if (isPermission) {
      return true
    }

    const status = await PermissionsAndroid.request(permission)
    return status === 'granted'
  }

  const getPhotoWithPermission = async () => {
    if (Platform.OS === 'android' && !(await hasAndroidPermission())) {
      return true
    }

    return true
  }

  useEffect(() => {
    getPhotoWithPermission()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export default useAndroidPermission
