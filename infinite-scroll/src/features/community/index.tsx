import styled from 'styled-components'

const CommunityBox = styled.div`
  height: 1500px;
  align-items: center;
`

const Content = styled.div`
  width: 33vw;
  height: 33vw;
  min-width: 250px;
  min-height: 250px;
  border: 3px dashed var(--secondary-bg);
  background-color: var(--secondary-fg);
  margin-top: 72px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: var(--secondary);
`

const Community = () => {
  return (
    <CommunityBox>
      <Content>
        <h2>Normal Header</h2>
      </Content>
      <Content>
        <h2>Normal Header</h2>
      </Content>
      <Content>
        <h2>Normal Header</h2>
      </Content>
    </CommunityBox>
  )
}

export default Community
