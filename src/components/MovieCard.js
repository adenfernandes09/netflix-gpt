import { IMAGE_URL } from '../utils/Constants'

const MovieCard = ({title, posterPath}) => {
  return (
    <div className='px-3 w-48'>
        <img alt={title} src={IMAGE_URL + posterPath}></img>
    </div>
  )
}

export default MovieCard