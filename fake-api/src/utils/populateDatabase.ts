import { faker } from '@faker-js/faker'

import Post, { IPost } from 'models/post'

const createPost = (createdOrder: number): IPost => {
  const { word } = faker.random
  const { firstName, lastName } = faker.name

  const name = faker.name.findName(firstName(), lastName())
  const email = faker.internet.email(name)
  const body = faker.lorem.sentences(2)
  const tags = [word(), word(), word()]
  const age = +(Math.random() * 20 + 20).toFixed()

  return {
    name,
    email,
    body,
    tags,
    age,
    createdOrder
  }
}

export default async function (documentCount: number): Promise<void> {
  try {
    const posts: IPost[] = []

    // meta info
    const latestPost = await Post.findOne().sort({ _id: -1 })
    let lastCreatedOrder = latestPost?.createdOrder ?? 0

    for (let i = 0; i < documentCount; i++) {
      const post = createPost(++lastCreatedOrder)
      posts.push(post)
    }

    await Post.create(posts)
  } catch (error: any) {
    console.log('something went wrong populating db')
  }
}
