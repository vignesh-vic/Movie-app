import React from 'react'

const MovieCard = ({movie:{title, vote_average, poster_path, release_date, original_language }}) => {
  return (
    <div className='border  p-5 shadow-2xl rounded-2xl bg-gray-900 shadow-light-100/10'>
      <img src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` :'/no-movie.png' } alt={title} />
      <div className='mt-4'>
        <h3 className='text-white'>{title}</h3>

        <div >
          
          <div>
          <img src="star.svg" alt="Start Icon" />
          </div>
        
        </div>

      </div>
    </div>
  )
}

export default MovieCard
