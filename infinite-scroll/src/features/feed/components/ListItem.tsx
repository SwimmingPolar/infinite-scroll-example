import { memo, useEffect } from 'react'

import styled, { CSSProperties } from 'styled-components'

import { Post } from '../feedSlice'

const Gutter = styled.div`
  align-items: center;
`

const ListItemBox = styled.div`
  width: 450px;
  height: 480px;
  margin: 30px 0;
  padding: 35px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0px 0px 15px 2px #1d1f26;
  border-radius: 6px;

  @media (max-width: 716px) {
    margin: 15px 0;
  }

  @media (max-width: 480px) {
    margin: 10px 0;
    width: 100%;
    border-radius: 0;
    box-shadow: none;
  }
`

const Header = styled.div`
  display: flex;
  height: 170px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: #566370;
  font-size: 2.25rem;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const Body = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;

  p {
    height: 36px;
    padding: 6px;
    line-height: 24px;
    margin-bottom: 12px;
    border-radius: 4px;
    background-color: #e2e5e7;
    align-self: flex-start;
  }
`

const Paragraph1 = styled.p`
  width: 100%;
`
const Paragraph2 = styled.p`
  width: 75%;
`
const Paragraph3 = styled.p`
  width: 45%;
`

interface ListItemProps {
  post: Post
  style: CSSProperties
  measure: () => void
}

const ListItem = ({ post, measure, style }: ListItemProps) => {
  const { name, email, tags, age, createdOrder } = post

  useEffect(() => {
    measure()
  }, [measure])

  return (
    <Gutter style={style}>
      <ListItemBox>
        <Header>{createdOrder}</Header>
        <Body>
          <Paragraph1>{name}</Paragraph1>
          <Paragraph1>{email}</Paragraph1>
          <Paragraph2>{tags.join(' - ')}</Paragraph2>
          <Paragraph3>{age}</Paragraph3>
        </Body>
      </ListItemBox>
    </Gutter>
  )
}

export default memo(ListItem)
