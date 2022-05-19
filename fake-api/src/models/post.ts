import mongoose, { Schema } from 'mongoose'

export interface IPost {
  name: string
  email: string
  body: string
  tags: string[]
  age: number
  createdOrder: number
}

const PostSchema = new Schema<IPost>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    body: { type: String, required: true },
    tags: { type: [String], required: true },
    age: { type: Number, required: true },
    createdOrder: { type: Number, required: true }
  },
  {
    timestamps: true
  }
)

const Post = mongoose.model<IPost>('Post', PostSchema)
export default Post
