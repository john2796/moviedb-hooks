import React from 'react'


const SearchMovie = () => {
  return (
    <div>
      <p>search movie</p>
      <form>
        <input 
         type="text"
            placeholder="Search for a movie, TV Show or celebrity that you are looking for" 
         name="name"
         />
      </form>
    </div>
  )
}

export default SearchMovie
