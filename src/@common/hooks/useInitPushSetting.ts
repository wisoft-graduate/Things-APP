import { useEffect } from 'react'
import { Alert, Linking, Platform } from 'react-native'
import Config from 'react-native-config'
import DeviceInfo from 'react-native-device-info'
import { requestTrackingPermission } from 'react-native-tracking-transparency'
import { LogLevel, OneSignal } from 'react-native-onesignal'

import { ONESIGNAL_ID } from '@env'

// import { appFirstLaunchedStorage } from '../../../../@storage/async'

const ONESIGNAL_APP_ID = `${Config.ONESIGNAL_APP_ID}`

// OneSignal.initialize('e2b30e0b-bfae-4331-84c2-8198e50db553')
// console.log(ONESIGNAL_ID)

/** @description 앱 첫 시작 시 알림 허용 관련 prompt 호출 및 원시그널 external_id 등록 */
// const promptAndSetExternalId = async (uuid: string) => {
//   await new Promise(resolve => {
//     OneSignal.Notifications.requestPermission(true)
//   })

//   let externalId = '123456789' // You will supply the external id to the OneSignal SDK
//   OneSignal.login(externalId)
// }

async function useInitPushSetting() {
  const showInitialNotificationPopup = async () => {
    // const appFirstLaunched = await appFirstLaunchedStorage.get()

    // const pushState = await OneSignal.getDeviceState()

    // /**
    //  * @description 알림 prompt를 허용/허용안함도 아닌 아예 무시했을 경우 재요청
    //  * @see https://documentation.onesignal.com/v9.0/docs/sdk-reference#notification-permission-statuses */
    // if (pushState?.notificationPermissionStatus === 0) {
    //   const uuid = await DeviceInfo.getUniqueId()
    //   await promptAndSetExternalId(uuid)
    // }

    /** 최초 설치일 때 */
    // if (appFirstLaunched !== 'not_first_launch') {
    //   const uuid = await DeviceInfo.getUniqueId()

    //   OneSignal.Debug.setLogLevel(LogLevel.Verbose)

    //   await new Promise(resolve => {
    //     OneSignal.setAppId(ONESIGNAL_APP_ID)
    //     resolve(true)
    //   })

    if (Platform.OS === 'ios') {
      showIOSPopup()
    } else {
      showAndroidPopup()
    }

    //   await appFirstLaunchedStorage.set('not_first_launch')
    // }
  }

  /** iOS 팝업 */
  const showIOSPopup = async () => {
    // await promptAndSetExternalId(uuid)
    await requestTrackingPermission()
  }

  /** aOS 팝업 */
  const showAndroidPopup = async () => {
    const deviceInfo = DeviceInfo.getSystemVersion()

    if (parseInt(deviceInfo, 10) < 13) {
      Alert.alert('알림', 'Bloomingbit에서 알림을 보내도록 허용하시겠습니까?', [
        { text: '허용', onPress: () => {} },
        {
          text: '허용 안함',
          onPress: async () => {
            await Linking.openSettings()
          },
        },
      ])
      //   OneSignal.setExternalUserId(uuid)
    } else {
      //   await promptAndSetExternalId(uuid)
    }
  }

  useEffect(() => {
    showInitialNotificationPopup()
  }, [])
}

export default useInitPushSetting
