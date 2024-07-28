import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import * as ThingsAPI from '../../../api/index'
import { userInfoStore } from '../../../zustand/User'
import useGetBookmark from './useGetBookmark'

function useBookmark() {
  const [bookmarkList, setBookmarkList] = useState()
  const { data } = userInfoStore()
  const { refetch } = useGetBookmark()

  async function getBookmark() {
    const response = await ThingsAPI.getBookmark({ userId: data?.id })
    if (response) {
      setBookmarkList(response.data)
    }
  }

  async function postBookmark({ name, icon, isVisibility }) {
    const params = {
      userId: data?.id,
      name,
      quotationIds: [],
      visibility: isVisibility,
      icon,
    }
    const response = await ThingsAPI.postBookmark(params)
    if (response) {
      console.log(response)
    }
  }

  async function putBookmark(params) {
    const response = await ThingsAPI.putBookmark(params)
    if (response) {
      refetch()
    }
  }

  return { getBookmark, postBookmark, bookmarkList, putBookmark }
}

export default useBookmark
