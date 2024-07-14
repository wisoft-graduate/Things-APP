import { useEffect, useState } from 'react'

import * as ThingsAPI from '../../../api/index'

function useComments({ quotationId }) {
  const [commentsList, setCommentsList] = useState()

  async function getComments({ quotationId }) {
    const params = {
      // commentIds?: string[] | string
      quotationId,
      // parentId?: string
      isTopDepth: true,
    }
    const response = await ThingsAPI.getComments(params)
    setCommentsList(response?.data)
  }

  useEffect(() => {
    getComments({ quotationId })
  }, [quotationId])

  return { getComments, commentsList }
}

export default useComments
