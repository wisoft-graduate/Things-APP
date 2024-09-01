import React, { useEffect } from 'react'
import { StatusBar } from 'react-native'
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { PaperProvider } from 'react-native-paper'
import { QueryClientProvider } from '@tanstack/react-query'

import Navigator from './src/navigation'
import useGetUserInfo from './src/@common/hooks/useGetUserInfo'
import useOnesignal from './src/@common/hooks/useOnesignal'
import { queryClient } from './src/api/react-query'
import useTokenReissue from './src/@common/hooks/useTokenReissue'
import useInitPushSetting from './src/@common/hooks/useInitPushSetting'

function App(): React.JSX.Element {
  const { getUser } = useGetUserInfo()
  useTokenReissue()

  /** @description Notification(OneSignal) 및 iOS App tracking 관련 propmt */
  useInitPushSetting()

  useEffect(() => {
    getUser()
  }, [])

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
