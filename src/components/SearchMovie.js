import React from 'react'
import PropTypes from 'prop-types'

const SearchMovie = ({ text = 'movie' }) => {
  return (
    <form className="search-wrapper">
      <select>
        <option value={text}>{text}</option>
      </select>
      <input
        type="text"
        placeholder={`Search for a ${text}, that you are looking for`}
        name="name"
      />
    </form>
  )
}
SearchMovie.propTypes = {
  text: PropTypes.string,
}
export default SearchMovie
