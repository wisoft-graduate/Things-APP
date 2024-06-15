import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

import { UserProfileStore } from './types'

export const userInfoStore = create(
  immer<UserProfileStore>(set => ({
    data: {
      id: '',
      nickname: '',
      profilePath: '',
      favoriteQuotation: '',
      favoriteAuthor: '',
      bookmarkCount: 0,
      likeQuotationCount: 0,
    },
    isLogin: false,
    login: () => set({ isLogin: true }),
    insert: data => set({ data }),
    updateNickname: newData =>
      set(prev => {
        prev.data.nickname = newData
      }),
    updateHandleId: newData =>
      set(prev => {
        prev.data.handleId = newData
      }),
    updateProfileImage: newData =>
      set(prev => {
        prev.data.profileImage = newData
      }),
    remove: () =>
      set({
        data: {
          id: '',
          nickname: '',
          profilePath: '',
          favoriteQuotation: '',
          favoriteAuthor: '',
          bookmarkCount: 0,
          likeQuotationCount: 0,
        },
        isLogin: false,
      }),
  })),
)
