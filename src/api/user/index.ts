import _ from 'lodash-es'

import {
  GetUserWalletResponse,
  PostSignInParams,
  PostSignInResponse,
  PostSignUpParams,
  PostUserWalletResponse,
} from './types'
import thingsAxios from '../../api/thingsAxios'

/**
 * @description POST: 회원가입
 */
export async function postSignUp(params: PostSignUpParams) {
  try {
    const response = await thingsAxios.post<PostUserWalletResponse>(`/users`, params)
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
    const response = await thingsAxios.get<GetUserWalletResponse>(`/users/${id}`)
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
    const response = await thingsAxios.get<GetUserWalletResponse>(`/users/${id}/my-page`)
    const data = _.get(response, ['data', 'data'])
    return { data }
  } catch (error) {
    console.error('@common > api > user > getUserIdMyPage\n', error)
  }
}
