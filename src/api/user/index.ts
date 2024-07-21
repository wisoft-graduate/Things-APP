import _ from 'lodash-es'

import {
  PostSignInParams,
  PostSignInResponse,
  PostSignUpParams,
  PutUserParams,
  PutUserResponse,
  UserResponse,
} from './types'
import thingsAxios from '../../api/thingsAxios'
import { refreshTokenStorage } from '../../storage/secure'

/**
 * @description POST: 회원가입
 */
export async function postSignUp(params: PostSignUpParams) {
  try {
    const response = await thingsAxios.post<UserResponse>(`/users`, params)
    const data = _.get(response, ['data', 'walletAddress'])
    const reasonPhrase = _.get(response, ['data', 'message', 'reasonPhrase'])
    return { data, reasonPhrase }
  } catch (error) {
    console.error('@common > api > user > postSignUp\n', error)
  }
}

/**
 * @description POST: 로그인
 */
export async function postSignIn(params: PostSignInParams) {
  try {
    const response = await thingsAxios.post<PostSignInResponse>(`/users/sign-in`, params)
    const data = _.get(response, ['data', 'data'])
    return { data }
  } catch (error) {
    console.error('@common > api > user > postSignIn\n', error?.response)
    return error?.response?.data
  }
}

/**
 * @description GET: 유저 정보
 */
export async function getUserId({ id }) {
  try {
    const response = await thingsAxios.get<UserResponse>(`/users/${id}`)
    const data = _.get(response, ['data', 'data'])
    return { data }
  } catch (error) {
    console.error('@common > api > user > getUserId\n', error)
  }
}

/**
 * @description GET: 유저 정보
 */
export async function getUserIdMyPage({ id }) {
  try {
    const response = await thingsAxios.get<UserResponse>(`/users/${id}/my-page`)
    const data = _.get(response, ['data', 'data'])
    return { data }
  } catch (error) {
    console.error('@common > api > user > getUserIdMyPage\n', error)
  }
}

/**
 * @description PUT: 유저 정보
 */
export async function putUsers(params: PutUserParams) {
  const { id } = params
  try {
    const response = await thingsAxios.put<PutUserResponse>(`/users/${id}`, params)
    const data = _.get(response, ['data', 'data'])
    return { data }
  } catch (error) {
    console.error('@common > api > user > putUsers\n', error.response)
  }
}

/**
 * @description POST: 토큰 재발급
 */
export async function postUserRefreshToken() {
  const refreshToken = await refreshTokenStorage.get()

  try {
    const response = await thingsAxios.post<PutUserResponse>(`/users/refresh-token`, {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    })
    const data = _.get(response, ['data', 'data'])
    return { data }
  } catch (error) {
    console.error('@common > api > user > postUserRefreshToken\n', error)
    return error?.status
  }
}
