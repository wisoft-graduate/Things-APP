import _ from 'lodash-es'

import { CommentsResponse, GetCommentsParams, PostCommentsParams, deleteCommentsParams } from './types'
import thingsAxios from '../../api/thingsAxios'

/**
 * @description POST: 댓글
 */
export async function postComments(params: PostCommentsParams) {
  try {
    const response = await thingsAxios.post<CommentsResponse>(`/comments`, params)
    const data = _.get(response, ['data', 'data'])
    const reasonPhrase = _.get(response, ['data', 'data', 'reasonPhrase'])
    return { data, reasonPhrase }
  } catch (error) {
    console.error('@common > api > comments > postComments\n', error)
  }
}

/**
 * @description GET: 댓글
 */
export async function getComments(params: GetCommentsParams) {
  try {
    const response = await thingsAxios.get<CommentsResponse>(`/comments`, {
      params,
    })
    const data = _.get(response, ['data', 'data'])
    return { data }
  } catch (error) {
    console.error('@common > api > comments > getComments\n', error)
  }
}

/**
 * @description DELETE: 댓글
 */
export async function deleteComments(params: deleteCommentsParams) {
  const { id } = params
  try {
    const response = await thingsAxios.delete<CommentsResponse>(`/comments/${id}`, {
      params,
    })
    const data = _.get(response, ['data', 'data'])
    return { data }
  } catch (error) {
    console.error('@common > api > comments > deleteComments\n', error)
  }
}
