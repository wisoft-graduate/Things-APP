import React from 'react'
import { StatusBar } from 'react-native'
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { LogLevel, OneSignal } from 'react-native-onesignal'
import { PaperProvider } from 'react-native-paper'
import { QueryClientProvider } from '@tanstack/react-query'

import { ONESIGNAL_ID } from '@env'
import Navigator from './src/navigation'
import useGetUserInfo from './src/@common/hooks/useGetUserInfo'
import useOnesignal from './src/@common/hooks/useOnesignal'
import { queryClient } from './src/api/react-query'
import useTokenReissue from './src/@common/hooks/useTokenReissue'

function App(): React.JSX.Element {
  useGetUserInfo()
  useTokenReissue()

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

  return (
    <PaperProvider>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <QueryClientProvider client={queryClient}>
            <Navigator />
          </QueryClientProvider>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </PaperProvider>
  )
}

export default App
