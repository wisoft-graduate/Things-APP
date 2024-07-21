import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import * as ThingsAPI from '../../../api/index'
import { userInfoStore } from '../../../zustand/User'

function useGetBookmark() {
  const { data } = userInfoStore()

  return useQuery({
    queryKey: ThingsAPI.getBookmarkQueryKey('BOOKMARK_LIST', { userId: data?.id }),
    queryFn: () => ThingsAPI.getBookmark({ userId: data?.id }),
    staleTime: 1000 * 60 * 3,
    gcTime: 1000 * 60 * 3,
  })
}

export default useGetBookmark
