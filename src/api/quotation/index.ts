import _ from 'lodash-es'

import {
  DeleteUserWalletParams,
  DeleteUserWalletResponse,
  GetUserWalletResponse,
  PostSignInParams,
  PostSignInResponse,
  PostSignUpParams,
  PostUserWalletParams,
  PostUserWalletResponse,
  PutUserWalletParams,
  PutUserWalletResponse,
} from './types'
import thingsAxios from '../../api/thingsAxios'

/**
 * @description GET: 명언 호출
 */
export async function getQuotation() {
  try {
    const response = await thingsAxios.get<GetUserWalletResponse>(`/quotations?page=1&count=20`)
    const data = _.get(response, ['data', 'data'])
    return { data }
  } catch (error) {
    console.error('@common > api > quotation > getQuotation\n', error)
  }
}
