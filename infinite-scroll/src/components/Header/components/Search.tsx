import styled from 'styled-components'

const SearchBox = styled.div`
  position: relative;
  height: 42px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(85, 100, 120, 0.25);
  flex: 1 1 245px;

  input {
    width: 100%;
    height: 100%;
    outline: 0;
    border: 0;
    padding: 3px 18px;
    background-color: rgba(241, 243, 245, 0.5);
    z-index: 1;
  }

  @media (max-width: 716px) {
    display: none;
  }
`

const Search = () => {
  return (
    <SearchBox>
      <input type="text" />
    </SearchBox>
  )
}

export default Search
