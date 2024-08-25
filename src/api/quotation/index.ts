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
export async function getQuotation(params) {
  const { page = 1, count = 20 } = params
  try {
    const response = await thingsAxios.get<GetUserWalletResponse>(`/quotations?page=${page}&count=${count}`)
    const data = _.get(response, ['data', 'data'])
    return { data }
  } catch (error) {
    console.error('@common > api > quotation > getQuotation\n', error)
  }
}
/**
 * @description GET: 명언 호출
 */
export async function getQuotationSearch(params) {
  const { searchWord, page = 1, count = 20 } = params
  try {
    const response = await thingsAxios.get<GetUserWalletResponse>(
      `/quotations?searchWord=${searchWord}&page=${page}&count=${count}`,
    )
    const data = _.get(response, ['data', 'data'])
    return { data }
  } catch (error) {
    console.error('@common > api > quotation > getQuotationSearch\n', error)
  }
}

/**
 * @description GET: 명언 랭크 호출
 */
export async function getQuotationRank(isLike: boolean, page: number) {
  try {
    if (page === 0) return
    const response = await thingsAxios.get<GetUserWalletResponse>(
      `/quotations/rank?rankProperty=${isLike ? `LIKE` : 'SHARE'}&page=${page}&count=20`,
    )
    const data = _.get(response, ['data', 'data'])
    return { data }
  } catch (error) {
    // console.error('@common > api > quotation > getQuotationRank\n', error)
  }
}

/**
 * @description GET: 명언 단일 호출
 */
export async function getQuotationId({ id }) {
  try {
    const response = await thingsAxios.get<GetUserWalletResponse>(`/quotations/${id}`)
    const data = _.get(response, ['data', 'data'])
    return { data }
  } catch (error) {
    console.error('@common > api > quotation > getQuotationRank\n', error)
  }
}

/**
 * @description POST: 명언 공유
 */
export async function getQuotationIdShare({ id }) {
  try {
    const response = await thingsAxios.post<GetUserWalletResponse>(`/quotations/${id}/share`)
    const data = _.get(response, ['data', 'data'])
    return { data }
  } catch (error) {
    console.error('@common > api > quotation > getQuotationIdShare\n', error)
  }
}
