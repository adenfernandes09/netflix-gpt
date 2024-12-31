import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
  return (
    <>
    <h2 className='text-white text-2xl font-semibold pb-2 pl-6'>{title}</h2>
    <div className='flex overflow-x-auto pl-3'>
        <div className='flex pb-5'>
            {movies?.map((movie) => <MovieCard key={movie.id} title={movie.original_title} posterPath={movie.poster_path} />)}
        </div>
    </div>
    </>
  )
}

export default MovieList