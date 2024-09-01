import { BaseAPIResponseSchema } from '@api/thingsAxios'

/** @description API Response 인터페이스 */
export interface UserResponse extends BaseAPIResponseSchema {}
export interface getUserIdMyPage extends BaseAPIResponseSchema {
  data: UserIdMyPageData
}

export interface PostSignInResponse extends BaseAPIResponseSchema {
  data: PostSignInData
}
export interface PutUserResponse extends BaseAPIResponseSchema {
  data: {
    id: string
  }
}

/** @description Response 내 data 객체 타입 */
export interface UserIdMyPageData {
  bookmarkCount: number
  commentAlarm: boolean
  favoriteAuthor: null | string
  favoriteQuotation: null | string
  id: string
  likeQuotationCount: number
  nickname: string
  profile: null | string
  quotationAlarm: boolean
}

export interface PostSignInData {
  accessToken: string
  refreshToken: string
}

/** @description API 호출 params 타입 */
export interface PutUserWalletParams {
  userWalletId: number
  walletAddress: string
}

export interface PostUserWalletParams {
  walletPlatform: 'METAMASK'
  walletAddress: string
}

export interface PostSignUpParams {
  id: string
  password: string
  nickname: string
  identityVerificationQuestion: string
  identityVerificationAnswer: string
}

export interface PostSignInParams {
  id: string
  password: string
}
export interface PutUserParams {
  id: string
  nickname: string
  profilePath: string
  favoriteQuotation: string
  favoriteAuthor: string
  quotationAlarm: boolean
  commentAlarm: boolean
  identityVerificationQuestion: string
  identityVerificationAnswer: string
}
