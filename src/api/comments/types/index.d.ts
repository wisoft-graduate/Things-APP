import { BaseAPIResponseSchema } from '@api/thingsAxios'

/** @description API Response 인터페이스 */
export interface CommentsResponse extends BaseAPIResponseSchema {}

/** @description Response 내 data 객체 타입 */
export interface GetCommentData {
  accessToken: string
  refreshToken: string
}

/** @description API 호출 params 타입 */
export interface PostCommentsParams {
  quotationId: string
  userId: string
  content: string
  commentedUserId?: string // 태그할 유저
  parentCommentId?: string
}
export interface GetCommentsParams {
  commentIds?: string[] | string
  quotationId: string
  parentId?: string
  isTopDepth: boolean
}
export interface deleteCommentsParams {
  id?: string
}
