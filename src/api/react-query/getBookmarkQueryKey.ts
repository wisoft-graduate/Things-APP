import { createQueryKeyFactory } from './react-query.utils'

type BookmarkQueryKeyList = {
  BOOKMARK_LIST: {
    userId: string
  }
}

export default createQueryKeyFactory<BookmarkQueryKeyList>()
