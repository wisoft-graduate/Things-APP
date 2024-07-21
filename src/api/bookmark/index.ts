import _ from 'lodash-es'

import thingsAxios from '../../api/thingsAxios'
import {
  BookmarkResponse,
  DeleteBookmarkParams,
  GetBookmarkParams,
  GetBookmarkResponse,
  PostBookmarkParams,
  PostBookmarkResponse,
  PutBookmarkParams,
} from './types'

/**
 * @description POST: 북마크
 */
export async function postBookmark(params: PostBookmarkParams) {
  try {
    const response = await thingsAxios.post<PostBookmarkResponse>(`/bookmark`, params)
    const data = _.get(response, ['data', 'data'])
    const reasonPhrase = _.get(response, ['data', 'data', 'reasonPhrase'])
    return { data, reasonPhrase }
  } catch (error) {
    console.error('@common > api > bookmark > postBookmark\n', error)
  }
}

/**
 * @description GET: 북마크
 */
export async function getBookmark(params: GetBookmarkParams) {
  try {
    const response = await thingsAxios.get<GetBookmarkResponse>(`/bookmark`, {
      params,
    })
    const data = _.get(response, ['data', 'data'])
    return { data }
  } catch (error) {
    console.error('@common > api > bookmark > getBookmark\n', error)
  }
}

/**
 * @description DELETE: 북마크
 */
export async function deleteBookmark(params: DeleteBookmarkParams) {
  const { id } = params
  try {
    const response = await thingsAxios.delete<BookmarkResponse>(`/bookmark/${id}`, {
      params,
    })
    const data = _.get(response, ['data', 'data'])
    return { data }
  } catch (error) {
    console.error('@common > api > bookmark > deleteBookmark\n', error)
  }
}

/**
 * @description PUT: 북마크
 */
export async function putBookmark(params: PutBookmarkParams) {
  const { id } = params
  try {
    const response = await thingsAxios.put<PostBookmarkResponse>(`/bookmark/${id}`, {
      params,
    })
    const data = _.get(response, ['data', 'data'])
    return { data }
  } catch (error) {
    console.error('@common > api > bookmark > putBookmark\n', error)
  }
}
