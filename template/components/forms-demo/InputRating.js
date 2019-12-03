import React, { useState } from 'react'

// Prime Rating component
import { Rating } from 'primereact/rating'

const InputRating = () => {
  const [ratingValue, setRatingValue] = useState(null)

  return (
    <div className='card card-w-title'>
      <h1>Rating</h1>
      <Rating
        value={ratingValue}
        onChange={({ value }) => setRatingValue(value)}
      />
    </div>
  )
}

export default InputRating
