import styled from 'styled-components'

const ErrorBox = styled.div`
  justify-content: center;
  align-items: center;
  padding: 15px 0;
`

const Error = () => {
  return (
    <ErrorBox>
      <h2>Something&apos;s gone wrong!</h2>
    </ErrorBox>
  )
}

export default Error
