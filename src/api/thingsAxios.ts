import axios, { AxiosError, AxiosResponse } from 'axios'

function fetchAxios() {
  const instance = axios.create({
    baseURL: 'https://v',
    timeout: 1000 * 30,
    headers: {
      Accept: 'application/json',
    },
  })

  const commonSuccessHandler = (value: AxiosResponse<any, any>) => {
    return value
  }

  const commonErrorHandler = async (error: AxiosError) => {
    throw error
  }

  instance.interceptors.response.use(commonSuccessHandler, commonErrorHandler)

  return instance
}

/** @description axios instance 추가 */
export const setAxiosHeaders = (token: string) => {
  thingsAxios.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${token}`
    return config
  })
}

/** @description axios instance 제거 */
export const removeAxiosHeaders = () => {
  thingsAxios.interceptors.request.clear()
}

const thingsAxios = fetchAxios()

export default thingsAxios
