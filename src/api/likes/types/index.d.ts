import { BaseAPIResponseSchema } from '@api/thingsAxios'

/** @description API Response 인터페이스 */
export interface LikesResponse extends BaseAPIResponseSchema {}
export interface PostLikesResponse extends BaseAPIResponseSchema {
  data: {
    id: string
  }
}

/** @description Response 내 data 객체 타입 */

/** @description API 호출 params 타입 */
export interface PostLikesParams {
  userId: string
  quotationId: string
}
export interface DeleteLikesParams {
  id: string
}
