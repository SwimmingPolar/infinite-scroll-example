import {
  startLoading,
  finishLoading,
  setError
} from 'features/shared/requestSlice'
import { createAsyncThunk } from '@reduxjs/toolkit'

interface GetAsyncThunk {
  target: string
  abortController: AbortController
}

export default function <T>(typePrefix: string, baseUrl: string) {
  return createAsyncThunk(
    typePrefix,
    async ({ target, abortController }: GetAsyncThunk, { dispatch }) => {
      try {
        dispatch(startLoading(typePrefix))

        const response = await fetch(baseUrl + target, {
          signal: abortController.signal
        })

        if (!response.ok) {
          throw new Error(`error fetching ${baseUrl + target}`)
        }

        return (await response.json()) as T
      } catch (error) {
        dispatch(setError({ typePrefix, error: error + '' }))
        throw error
      } finally {
        dispatch(finishLoading(typePrefix))
      }
    }
  )
}
