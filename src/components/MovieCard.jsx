import React from 'react'

const MovieCard = ({movie}) => {
  return (
      <p key={movie.id} className="text-white text-xs">
          {movie.title}
      </p>
  )
}

export default MovieCard
