import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import feedReducer from 'features/feed/feedSlice'
import requestReducer from 'features/shared/requestSlice'

const store = configureStore({
  reducer: {
    feeds: feedReducer,
    requests: requestReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store
