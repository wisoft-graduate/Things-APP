import { SocialProviderType } from '@api/authAPI/types'
import { UserTermsAliasType } from '@api/userAPI/user/types'

/**
 * @description createNavigator 관련 stack types. 타입 에러로 인해 type 사용
 * @RootStackParamList 최상단 네비게이션 (바텀, 에러, 로그인/회원가입)
 * @BottomTabParamList 바텀 네비게이션 (*글로벌, 뉴스, 유저, 검색)
 * @ErrorStackParamList 에러 페이지 네비게이션 (*글로벌)
 * @AuthStackParamList 로그인/회원가입 네비게이션 (*글로벌)
 */
export type RootStackParamList = {
  BottomTabNavigator: BottomTabParamList
  Error: ErrorStackParamList
  Auth: AuthStackParamList
  NewsDetail: NewsDetailParamList
  SignHome: undefined
  SignUp: undefined
}

export type BottomTabParamList = {
  News: undefined
  User: undefined
  Portfolio: undefined
  Search: undefined
}

export type ErrorStackParamList = {
  type: 'NetworkError' | 'LostPageError'
}

export type AuthStackParamList = {
  Login: undefined
  SignupTerms: {
    provider: SocialProviderType
    providerIdToken: string
    providerAccessToken: string
  }
  SignupTermsDetail: { title: string; alias: UserTermsAliasType }
  EnterInfo: {
    provider: SocialProviderType
    providerIdToken: string
    providerAccessToken: string
    termsAgreeList: UserTermsAliasType[]
  }
}
