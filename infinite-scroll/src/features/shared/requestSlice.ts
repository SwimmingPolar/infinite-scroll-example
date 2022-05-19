import { createSlice } from '@reduxjs/toolkit'

interface requestState {
  isLoading: boolean
  isError: boolean
  errorMessage: string
}

const initialState: Record<string, requestState> = {}

const request = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    startLoading: (state, { payload: typePrefix }) => {
      state[typePrefix] = {} as requestState
      state[typePrefix].isLoading = true
      state[typePrefix].isError = false
      state[typePrefix].errorMessage = ''
    },
    finishLoading: (state, { payload: typePrefix }) => {
      state[typePrefix].isLoading = false
    },
    setError: (state, { payload: { typePrefix, error } }) => {
      state[typePrefix].isError = true
      state[typePrefix].errorMessage = error
    }
  }
})

export default request.reducer

export const { startLoading, finishLoading, setError } = request.actions
