import React from 'react'
import { useTheme } from '@emotion/react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useTranslation } from 'react-i18next'

import { ExtendedTheme } from '@common/theme'
import TermsScreen from '@screens/User/NoticeAndTerms/Terms'
import WithdrawalInfoScreen from '@screens/User/LogoutAndWithdrawal/Withdrawal/WithdrawalInfo'
import WithdrawalReasonScreen from '@screens/User/LogoutAndWithdrawal/Withdrawal/WithdrawalReason'
import { UserStackParamList } from 'navigators/types'
import NoticeListScreen from '@screens/User/NoticeAndTerms/Notice'
import NoticeDetailScreen from '@screens/User/NoticeAndTerms/Notice/templates/NoticeDetailScreen'
import SettingScreen from '@screens/User'
import ProfileScreen from '@screens/User/LoginAndProfile/Profile'
import WalletScreen from '@screens/User/Wallet'

const UserStack = createNativeStackNavigator<UserStackParamList>()

function UserNavigator() {
  const { t } = useTranslation()
  const theme: ExtendedTheme = useTheme()

  return (
    <UserStack.Navigator
      initialRouteName="Setting"
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.bgDefault },
        headerShown: true,
        headerShadowVisible: true,
        headerTintColor: theme.colors.ftTitle,
        headerTitleStyle: { fontSize: 16 },
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
      }}>
      <UserStack.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          headerTitle: t('마이페이지'),
        }}
      />
      <UserStack.Screen name="Terms" component={TermsScreen} />
      <UserStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerTitle: t('프로필 수정'),
        }}
      />
      <UserStack.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          headerTitle: t('내 지갑'),
        }}
      />
      <UserStack.Group
        screenOptions={{
          headerTitle: '',
        }}>
        <UserStack.Screen name="WithdrawalInfo" component={WithdrawalInfoScreen} />
        <UserStack.Screen name="WithdrawalReason" component={WithdrawalReasonScreen} />
      </UserStack.Group>
      <UserStack.Group
        screenOptions={{
          headerTitle: t('공지사항'),
        }}>
        <UserStack.Screen name="NoticeList" component={NoticeListScreen} />
        <UserStack.Screen name="NoticeDetail" component={NoticeDetailScreen} />
      </UserStack.Group>
    </UserStack.Navigator>
  )
}

export default UserNavigator
