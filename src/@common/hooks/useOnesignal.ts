import { LogLevel, OneSignal } from 'react-native-onesignal'
import { ONESIGNAL_ID } from '@env'

function useOnesignal() {
  OneSignal.Debug.setLogLevel(LogLevel.Verbose)

  // OneSignal Initialization
  OneSignal.initialize('e2b30e0b-bfae-4331-84c2-8198e50db553')
  console.log(ONESIGNAL_ID)

  // requestPermission will show the native iOS or Android notification permission prompt.
  // We recommend removing the following code and instead using an In-App Message to prompt for notification permission
  OneSignal.Notifications.requestPermission(true)

  let externalId = '123456789' // You will supply the external id to the OneSignal SDK
  OneSignal.login(externalId)

  // Method for listening for notification clicks
  OneSignal.Notifications.addEventListener('click', event => {
    console.log('OneSignal: notification clicked:', event)
  })
}

export default useOnesignal
