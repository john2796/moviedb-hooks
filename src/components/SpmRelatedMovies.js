import React from 'react';
import PropTypes from 'prop-types';
import Pagination from './Pagination';

function SpmRelatedMovies({ relatedMovies, title }) {
  const onPageChanged = (data) => {
    // update the action
    console.log(data);
  };
  return (
    <>
      <div className="tab-header">
        <h3>Related Movies To</h3>
        <h2 className="blue-text">{title}</h2>
      </div>

      <div className="brT brB review-total">
        <p>
          Found
          <span className="blue-text">{relatedMovies.results.length}</span>
          reviews in total
        </p>
      </div>

      <Pagination
        totalRecords={relatedMovies.total_results}
        pageLimit={18}
        pageNeighbors={1}
        onPageChanged={onPageChanged}
      />
    </>
  );
}

SpmRelatedMovies.propTypes = {
  title: PropTypes.string,
  relatedMovies: PropTypes.shape({
    page: PropTypes.number,
    total_pages: PropTypes.number,
    total_results: PropTypes.number,
  }),
};
export default SpmRelatedMovies;
