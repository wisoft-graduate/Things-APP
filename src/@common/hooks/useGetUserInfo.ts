import React, { useEffect } from 'react'
import { accessTokenStorage, userIdStorage } from '../../storage/secure'
import * as ThingsAPI from '../../api'
import { userInfoStore } from '../../zustand/User'

function useGetUserInfo() {
  const { insert } = userInfoStore()

  async function fetchUserInfo({ userId }) {
    const response = await ThingsAPI.getUserId({ id: userId })
    if (response) {
      insert(response.data)
    }
  }

  async function getUser() {
    const userId = await userIdStorage.get()

    if (userId) {
      fetchUserInfo({ userId })
    }
  }

  return { getUser }
}

export default useGetUserInfo
