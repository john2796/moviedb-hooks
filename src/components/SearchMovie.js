import React from 'react'
import '../SCSS/searchMovie.scss'

const SearchMovie = () => {
  return (
    <form className="search-wrapper">
      <select>
        <option value="movies">Movies</option>
        <option value="tv">TV Shows</option>
      </select>
      <input
        type="text"
        placeholder="Search for a movie, TV Show or celebrity that you are looking for"
        name="name"
      />
    </form>
  )
}

export default SearchMovie
