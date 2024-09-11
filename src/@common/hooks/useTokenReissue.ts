import { userInfoStore } from '../../zustand/User'
import * as ThingsAPI from '../../api/index'
import { useEffect } from 'react'
import { accessTokenStorage, refreshTokenStorage, userIdStorage } from '../../storage/secure'
import { removeAxiosHeaders } from '../../api/thingsAxios'

function useTokenReissue() {
  const { remove, data } = userInfoStore()

  async function reissue() {
    const userId = await userIdStorage.get()
    if (!userId) {
      return
    }
    const response = await ThingsAPI.postUserRefreshToken()

    if (response) {
      await accessTokenStorage.set(response?.data?.accessToken)
      await refreshTokenStorage.set(response?.data?.refreshToken)
      return
    } else {
      remove()
      removeAxiosHeaders()
      await accessTokenStorage.remove()
      await refreshTokenStorage.remove()
      await userIdStorage.remove()
    }
  }

  useEffect(() => {
    reissue()
  }, [])
}

export default useTokenReissue
