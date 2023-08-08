import styled from 'styled-components'

export const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 15px;
  margin-top: 10px;
`
export const Image = styled.img`
  height: 120px;
  width: 160px;
`
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const NameAndGenreContainer = styled.div`
  display: flex;
  margin-left: 20px;
  flex-direction: column;
`

export const SongName = styled.h1`
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  font-family: 'Roboto';
`
export const Genre = styled.p`
  color: #3b82f6;
  font-size: 15px;
  font-weight: 700;
  font-family: 'Roboto';
`
export const DurationAndIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`
export const Duration = styled.p`
  color: #ffffff;
  font-size: 20px;
  margin-right: 70px;
  font-family: 'Roboto';
`
export const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  height: 50px;
  width: 50px;
  outline: none;
`
export const ListItems = styled.li`
  list-style-type: none;
`
