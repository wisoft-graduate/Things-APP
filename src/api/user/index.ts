import _ from 'lodash-es'

import {
  DeleteUserWalletParams,
  DeleteUserWalletResponse,
  GetUserWalletResponse,
  PostUserWalletParams,
  PostUserWalletResponse,
  PutUserWalletParams,
  PutUserWalletResponse,
} from './types'
import thingsAxios from '../../api/thingsAxios'

/**
 * @description PUT: 유저 지갑 정보 생성
 */
export async function postSignUp(params: PostUserWalletParams) {
  try {
    console.log('asdfss')
    const response = await thingsAxios.post<PostUserWalletResponse>(`/users`, params)
    console.log(response)
    const data = _.get(response, ['data', 'walletAddress'])
    const reasonPhrase = _.get(response, ['data', 'message', 'reasonPhrase'])
    return { data, reasonPhrase }
  } catch (error) {
    console.error('@common > api > user > postSignUp\n', error)
  }
}

/**
 * @description GET: 유저 지갑 정보 생성
 * @see http://52.79.223.147:8081/swagger-ui/index.html?urls.primaryName=user#/user-wallet-controller/readUserWallet
 */
export async function getUserWallet() {
  try {
    const response = await thingsAxios.get<GetUserWalletResponse>(`/user/wallet`)
    const data = _.get(response, ['data', 'data'])
    const reasonPhrase = _.get(response, ['data', 'message', 'reasonPhrase'])
    return { data, reasonPhrase }
  } catch (error) {
    console.error('@common > api > user > wallet > getUserWallet\n', error)
  }
}

/**
 * @description PUT: 유저 지갑 정보 수정
 * @see http://52.79.223.147:8081/swagger-ui/index.html?urls.primaryName=user#/user-wallet-controller/userWallet
 */
export async function putUserWallet(params: PutUserWalletParams) {
  const { userWalletId, walletAddress } = params
  try {
    const response = await thingsAxios.put<PutUserWalletResponse>(`/user/wallet`, {
      userWalletId,
      walletAddress,
    })
    const data = _.get(response, ['data', 'data'])
    const reasonPhrase = _.get(response, ['data', 'message', 'reasonPhrase'])
    return { data, reasonPhrase }
  } catch (error) {
    console.error('@common > api > user > wallet > putUserWallet\n', error)
  }
}

/**
 * @description DELETE: 유저 지갑 정보 삭제
 * @see http://52.79.223.147:8081/swagger-ui/index.html?urls.primaryName=user#/user-wallet-controller/userWallet_1
 */
export async function deleteUserWallet(params: DeleteUserWalletParams) {
  const { userWalletId } = params
  try {
    const response = await thingsAxios.delete<DeleteUserWalletResponse>(`/user/wallet`, {
      data: { userWalletId },
    })
    const reasonPhrase = _.get(response, ['data', 'message', 'reasonPhrase'])
    return { reasonPhrase }
  } catch (error) {
    console.error('@common > api > user > wallet > deleteUserWallet\n', error)
  }
}
