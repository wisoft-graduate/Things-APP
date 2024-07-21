import { userInfoStore } from '../../zustand/User'
import * as ThingsAPI from '../../api/index'
import { useEffect } from 'react'
import { accessTokenStorage, refreshTokenStorage, userIdStorage } from '../../storage/secure'

function useTokenReissue() {
  const { remove } = userInfoStore()

  async function reissue() {
    const response = await ThingsAPI.postUserRefreshToken()

    if (response) {
      console.log(response)
    } else {
      remove()
      await accessTokenStorage.remove()
      await refreshTokenStorage.remove()
      await userIdStorage.remove()
    }
  }

  useEffect(() => {
    // reissue()
  }, [])
}

export default useTokenReissue
