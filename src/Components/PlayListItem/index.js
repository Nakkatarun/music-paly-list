import {AiOutlineDelete} from 'react-icons/ai'
import {
  ListContainer,
  ImageContainer,
  Image,
  NameAndGenreContainer,
  SongName,
  Genre,
  DurationAndIconContainer,
  Duration,
  DeleteButton,
  ListItems,
} from './styledComponents'

const PlayListItem = props => {
  const {each, onDelete} = props
  const {id, imageUrl, name, genre, duration} = each

  const onClickDelete = () => {
    onDelete(id)
  }

  return (
    <ListItems>
      <ListContainer>
        <ImageContainer>
          <Image alt=" track" src={imageUrl} />
          <NameAndGenreContainer>
            <SongName>{name}</SongName>
            <Genre>{genre}</Genre>
          </NameAndGenreContainer>
        </ImageContainer>
        <DurationAndIconContainer>
          <Duration>{duration}</Duration>
          <DeleteButton
            type="button"
            data-testid="delete"
            onClick={onClickDelete}
          >
            <AiOutlineDelete height={70} color="#ffffff" />
          </DeleteButton>
        </DurationAndIconContainer>
      </ListContainer>
    </ListItems>
  )
}

export default PlayListItem
