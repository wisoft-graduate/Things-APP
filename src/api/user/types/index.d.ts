import { BaseAPIResponseSchema } from '@api/thingsAxios'

/** @description API Response 인터페이스 */
export interface GetUserWalletResponse extends BaseAPIResponseSchema {
  data: UserWalletData
}

export interface PostUserWalletResponse extends BaseAPIResponseSchema {}

export interface DeleteUserWalletResponse extends BaseAPIResponseSchema {}

export interface PutUserWalletResponse extends BaseAPIResponseSchema {}

/** @description Response 내 data 객체 타입 */
export interface UserWalletData {
  userSeq: number
  userEmail: string
  walletList: {
    METAMASK: {
      walletAddress: string
      createTime: string
      updateTime: string
      userWalletId: number
    }
  }
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

export interface DeleteUserWalletParams {
  userWalletId: number
}
