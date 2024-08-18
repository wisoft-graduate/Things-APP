import { createQueryKeyFactory } from './react-query.utils'

type BookmarkQueryKeyList = {
  BOOKMARK_LIST: {
    userId: string
  }
  RANK_LIST: {
    isLike: boolean
  }
}

export default createQueryKeyFactory<BookmarkQueryKeyList>()
