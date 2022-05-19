import { createSlice } from '@reduxjs/toolkit'

import createGetAsyncThunk from '../shared/createGetAsyncThunk'

export interface Post {
  _id: string
  name: string
  email: string
  body: string
  tags: string[]
  age: number
  createdOrder: number
  createdAt: string
  updatedAt: string
  __v: number
}

export interface GetPostsResponse {
  hasNext: boolean
  nextCursor?: string
  posts: Post[]
}

interface FeedState {
  posts: Post[]
  hasNext: boolean
  nextCursor?: string | undefined
  pageScroll?: number | undefined
}

const initialState: FeedState = {
  posts: [],
  hasNext: true,
  nextCursor: ''
}

const feedSlice = createSlice({
  name: 'feed',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchPosts.fulfilled, (state, { payload }) => {
      const { posts, hasNext, nextCursor } = payload
      state.posts.push(...posts)
      state.hasNext = hasNext
      state.nextCursor = nextCursor
    })
  }
})

export default feedSlice.reducer

export const fetchPosts = createGetAsyncThunk<GetPostsResponse>(
  'feed/fetchPosts',
  'http://localhost:3000/api'
)
