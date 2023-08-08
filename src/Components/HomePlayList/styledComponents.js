import styled from 'styled-components'

export const BgImageContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: start;
  height: 70vh;
  padding-bottom: 30px;
  padding-left: 50px;
  background-size: cover;
`
export const SingerName = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: 800;
  margin: 0px;
`
export const Singer = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 20px;
  margin-top: 5px;
  font-weight: 400;
`
export const MusicPlayListBg = styled.div`
  background-color: #152850;
  background-size: cover;
  display: flex;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 10px;
  flex-direction: column;
`
export const NameAndSearchBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
`

export const Name = styled.p`
  color: #ffffff;
  font-size: 30px;
  font-weight: 700;
  font-family: 'Roboto';
`

export const SearchBar = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  color: #ffffff;
`
export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  padding: 5px;
  outline: none;
  border: 2px solid #ffffff;
`
export const NotFound = styled.p`
  color: #ffffff;
  font-size: 30px;
  font-weight: 700;
  font-family: 'Roboto';
`
export const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-size: cover;
`
export const UnList = styled.ul`
  list-style-type: none;
`
