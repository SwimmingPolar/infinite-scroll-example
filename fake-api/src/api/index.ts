import { Router, Request, Response } from 'express'
import posts from './posts'

const api = Router()

api.use('/posts', posts)

export default api
