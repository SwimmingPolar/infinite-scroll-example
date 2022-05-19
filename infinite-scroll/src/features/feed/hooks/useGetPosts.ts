import { useCallback, useEffect, useState } from 'react'

import { useAppDispatch, useAppSelector } from 'app/store'
import { IndexRange } from 'react-virtualized'

import { fetchPosts } from 'features/feed/feedSlice'

const abortControllerMap = new Map<string, AbortController>()

export default function () {
  const { typePrefix } = fetchPosts
  const dispatch = useAppDispatch()
  const { isLoading = false, isError = false } =
    useAppSelector(({ requests }) => requests[typePrefix]) || {}
  const [abortController, setAbortController] = useState<AbortController>()

  const {
    posts,
    hasNext,
    nextCursor = ''
  } = useAppSelector(({ feeds }) => feeds)

  const onLoadMore = useCallback(
    // if page or range based pagination is needed
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (params?: IndexRange) => {
      if (isLoading || !hasNext) {
        return Promise.resolve()
      }

      const abortController = new AbortController()
      setAbortController(abortController)
      abortControllerMap.set(nextCursor, abortController)

      return dispatch(
        fetchPosts({ target: `/posts?cursor=${nextCursor}`, abortController })
      )
        .unwrap()
        .catch(() => `I'm not going to catch this`)
        .finally(() => {
          abortControllerMap.delete(nextCursor)
        })
      /**
       * @issue possible memory leak?
       * should abortController = null?
       */
    },
    [isLoading, hasNext, nextCursor]
  )
  useEffect(() => {
    return () => {
      // initial request will be aborted without this line
      if (abortController === undefined) return
      // optional chaining makes possible to abort pending promises only
      abortControllerMap.get(nextCursor)?.abort()
    }
  }, [abortController])

  // initial fetching
  useEffect(() => {
    if (posts.length === 0 && hasNext) {
      onLoadMore()
    }
  }, [])

  return { isLoading, isError, posts, hasNext, onLoadMore }
}
