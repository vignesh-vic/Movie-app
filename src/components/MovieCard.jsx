import React from 'react'
import { FaStar } from "react-icons/fa";

const MovieCard = ({movie:{title, vote_average, poster_path, release_date, original_language }}) => {
  return (
    <div className='border h-full  p-3 shadow-2xl rounded-2xl bg-gray-900 shadow-light-100/10'>
      <img src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` :'/no-movie.png' } alt={title} />
      <div className='mt-4'>
        <h3 className='text-white text-sm'>{title}</h3>

        <div >
          
          <div className='flex gap-2 items-center mt-1 text-[13px]'>
            <FaStar color='yellow' fill='yellow'/>
            <p className='text-white'>{vote_average ? vote_average.toFixed(1) : 'N/A'}</p>
          <span className='text-gray-300'>.</span>
          <p className='text-white'>{original_language}</p>
          <span className='text-gray-300'>.</span>
          <p className='text-white'> {release_date ? release_date.split('-')[0] : 'N/A'}</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default MovieCard
