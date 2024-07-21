import { BaseAPIResponseSchema } from '@api/thingsAxios'

/** @description API Response 인터페이스 */
export interface BookmarkResponse extends BaseAPIResponseSchema {}
export interface PostBookmarkResponse extends BaseAPIResponseSchema {
  data: {
    id: string
  }
}
export interface GetBookmarkResponse extends BaseAPIResponseSchema {
  data: GetBookmarkData[]
}

/** @description Response 내 data 객체 타입 */
export interface GetBookmarkData {
  id: string
  name: string
  userId: string
  quotationIds: string[]
  visibility: boolean
  icon: string
  createdTime: string
  lastModifiedTime: string
}

/** @description API 호출 params 타입 */
export interface PostBookmarkParams {
  userId: string
  name: string
  quotationIds: string[]
  visibility: boolean
  icon: string
}
export interface GetBookmarkParams {
  userId: string
}
export interface DeleteBookmarkParams {
  id: string
}
export interface PutBookmarkParams {
  id: string
  name: string
  quotationIds: string[]
  visibility: boolean
  icon: string
}
