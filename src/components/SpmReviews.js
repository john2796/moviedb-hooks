import React from 'react';
import '../SCSS/spmReview.scss';

function SpmReviews({ reviews, title }) {
  console.log(reviews);
  return (
    <>
      <div className="tab-header">
        <h3>Reviews</h3>
        <h2 className="blue-text">{title}</h2>
      </div>

      <div className="brT brB">
        <div className="brR">
          <p>{`Found ${reviews.length} reviews in total`}</p>
          <p>Filter by:</p>
        </div>

        {/* ----- right side of filter ----  */}
        <div>
          <p>Popularity Descending</p>
        </div>
      </div>

      {/* ---------- review content ----------- */}
      <div className="sp-reviews">
        {/* ------- title with view all option ------- */}
        {reviews.map(item => (
          <div className="rev-item" key={item.id}>
            <h3>{item.author}</h3>
            <p className="spm-paragraph brB">
              {`${item.content.substring(0, 400)}...`}
              <a
                href={item.url}
                rel="noopener noreferrer"
                target="_blank"
                className="spm-paragraph readmore"
              >
                read more
              </a>
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default SpmReviews;
