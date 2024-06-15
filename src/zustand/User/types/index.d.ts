import { UserProfilesData } from '@api/types'
import { ThemeType } from '@storage/async/types'

export interface UserProfileStore {
  data: {
    id: string
    nickname: string
    profilePath: string
    favoriteQuotation: string
    favoriteAuthor: string
    bookmarkCount: number
    likeQuotationCount: number
  }
  isLogin: boolean
  login: () => void
  insert: (data: UserProfilesData) => void
  updateNickname: (nickname: string) => void
  updateHandleId: (handleId: string) => void
  updateProfileImage: (profileImage: string) => void
  remove: () => void
}
