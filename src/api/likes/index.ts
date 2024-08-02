import _ from 'lodash-es'

import thingsAxios from '../../api/thingsAxios'
import { DeleteLikesParams, LikesResponse, PostLikesParams, PostLikesResponse } from './types'

/**
 * @description POST: 좋아요
 */
export async function postLikes(params: PostLikesParams) {
  try {
    const response = await thingsAxios.post<PostLikesResponse>(`/likes`, params)
    const data = _.get(response, ['data', 'data'])
    const reasonPhrase = _.get(response, ['data', 'data', 'reasonPhrase'])
    return { data, reasonPhrase }
  } catch (error) {
    console.error('@common > api > likes > postLikes\n', error)
  }
}

/**
 * @description GET: 좋아요 확인
 */
export async function getLikes(params: PostLikesParams) {
  const { userId, quotationId } = params
  try {
    const response = await thingsAxios.get<PostLikesResponse>(`/likes/${userId}?quotationId=${quotationId}`)
    const data = _.get(response, ['data', 'data'])
    const reasonPhrase = _.get(response, ['data', 'data', 'reasonPhrase'])
    return { data, reasonPhrase }
  } catch (error) {
    console.error('@common > api > likes > getLikes\n', error)
  }
}

/**
 * @description DELETE: 좋아요
 */
export async function deleteLikes(params: DeleteLikesParams) {
  const { id } = params
  try {
    const response = await thingsAxios.delete<LikesResponse>(`/likes/${id}`, {
      params,
    })
    const data = _.get(response, ['data', 'data'])
    return { data }
  } catch (error) {
    console.error('@common > api > likes > deleteLikes\n', error)
  }
}
