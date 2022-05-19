import styled from 'styled-components'

const ProfileBox = styled.div`
  height: 1500px;
  align-items: center;
`

const Content = styled.div`
  width: 33vw;
  height: 33vw;
  min-width: 250px;
  min-height: 250px;
  border: 3px dashed rgba(55, 55, 55, 1);
  background-color: var(--primary-fg);
  margin-top: 72px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`

const Profile = () => {
  return (
    <ProfileBox>
      <Content>
        <h1>Fixed Header</h1>
      </Content>
      <Content>
        <h1>Fixed Header</h1>
      </Content>
      <Content>
        <h1>Fixed Header</h1>
      </Content>
    </ProfileBox>
  )
}

export default Profile
