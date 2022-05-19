import styled from 'styled-components'

import InfiniteList from './InfiniteList'
import { ScrollRestoration } from 'components/ScrollRestoration/index'

const FeedBox = styled.div``
const ContentBox = styled.div`
  margin: 35px;
  padding: 45px 0;
  text-align: center;
  border: 3px dashed rgba(55, 55, 55, 1);
`

const Feed = () => {
  return (
    <ScrollRestoration>
      <FeedBox>
        <ContentBox>
          <h1>Some Contents</h1>
        </ContentBox>
        <InfiniteList />
      </FeedBox>
    </ScrollRestoration>
  )
}

export default Feed
