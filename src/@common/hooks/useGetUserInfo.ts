import React, { useEffect } from 'react'
import { accessTokenStorage, userIdStorage } from '../../storage/secure'
import * as ThingsAPI from '../../api'

function useGetUserInfo() {
  async function fetchUserInfo() {
    const response = await ThingsAPI.getUserId({ userId })
    if (response) {
      console.log('res', response)
    }
  }

  async function getUser() {
    const userId = await userIdStorage.get()

    if (userId) {
      fetchUserInfo()
    }
  }

  useEffect(() => {
    getUser()
  }, [])
}

export default useGetUserInfo
