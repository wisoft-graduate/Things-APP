import EncryptedStorage from 'react-native-encrypted-storage'

import { SECURE_ACCESS_TOKEN, SECURE_REFRESH_TOKEN, USER_ID_TOKEN } from './keys'

export const userIdStorage = {
  set: async (value: string) => {
    try {
      await EncryptedStorage.setItem(USER_ID_TOKEN, value)
    } catch (e) {
      console.error('storage > set_userIdStorage\n', e)
    }
  },
  get: async () => {
    try {
      const response = await EncryptedStorage.getItem(USER_ID_TOKEN)
      if (response) {
        return response
      }
    } catch (e) {
      console.error('storage > get_userIdStorage\n', e)
    }
  },
  remove: async () => {
    try {
      await EncryptedStorage.removeItem(USER_ID_TOKEN)
    } catch (e) {
      console.error('storage > remove_userIdStorage\n', e)
    }
  },
}

export const accessTokenStorage = {
  set: async (value: string) => {
    try {
      await EncryptedStorage.setItem(SECURE_ACCESS_TOKEN, value)
    } catch (e) {
      console.error('storage > set_accessTokenStorage\n', e)
    }
  },
  get: async () => {
    try {
      const response = await EncryptedStorage.getItem(SECURE_ACCESS_TOKEN)
      if (response) {
        return response
      }
    } catch (e) {
      console.error('storage > get_accessTokenStorage\n', e)
    }
  },
  remove: async () => {
    try {
      await EncryptedStorage.removeItem(SECURE_ACCESS_TOKEN)
    } catch (e) {
      console.error('storage > remove_accessTokenStorage\n', e)
    }
  },
}

export const refreshTokenStorage = {
  set: async (value: string) => {
    try {
      await EncryptedStorage.setItem(SECURE_REFRESH_TOKEN, value)
    } catch (e) {
      console.error('storage > set_refreshTokenStorage\n', e)
    }
  },
  get: async () => {
    try {
      const response = await EncryptedStorage.getItem(SECURE_REFRESH_TOKEN)
      if (response) {
        return response
      }
    } catch (e) {
      console.error('storage > get_refreshTokenStorage\n', e)
    }
  },
  remove: async () => {
    try {
      await EncryptedStorage.removeItem(SECURE_REFRESH_TOKEN)
    } catch (e) {
      console.error('storage > remove_refreshTokenStorage\n', e)
    }
  },
}
