import { Router, Request, Response } from 'express'
import mongoose from 'mongoose'
const { ObjectId } = mongoose.Types

import Post from 'models/post'

import sleep from 'utils/sleep'

const posts = Router()

posts.get('/', async (req: Request, res: Response) => {
  let { cursor } = <{ cursor: string | undefined }>req.query

  // empty cursor will fetch latest posts
  cursor = cursor?.length === 0 ? undefined : cursor

  try {
    const isValidCursor = ObjectId.isValid

    // if cursor is presented
    // check cursor validity or authorization if necessary
    if (cursor && !isValidCursor(cursor)) {
      return res.json({
        error: 'invalid cursor'
      })
    }

    const documentSize = 30
    const posts = await Post.find({
      _id: {
        $lt: new ObjectId(cursor)
      }
    })
      // prefetch next item for 'hasNext' evaluation
      // this may lead to unnecessary performance/resources overhead
      .limit(documentSize + 1)
      .sort({
        _id: -1
      })

    // 'hasNext' value closely tied to db querying statement
    const hasNext = posts.length - 1 === documentSize
    posts.length -= hasNext ? 1 : 0
    // next cursor is the last element's ObjectId
    const nextCursor = posts[documentSize - 1]?._id

    /**
     * @description response delay
     */
    // await sleep(1750)

    return res.json({
      hasNext,
      nextCursor,
      posts
    })
  } catch (error: any) {
    console.log(error.toString())

    return res.json({
      error: 'something went wrong fetching data from db'
    })
  }
})

export default posts
