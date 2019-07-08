import React from 'react';

function SpmOverview({ movie }) {
  if (!movie) {
    return <div>loading data....</div>;
  }

  const { overview, id } = movie;
  console.log(id);

  return (
    <div className="spm-overview">
      <div className="spm-overview-left">
        <p>{overview}</p>
        <h4>
          videos & photos
          <span>All 5 videos & 245 Photos</span>
        </h4>
        <h4>
          cast
          <span>Full Cast & Crew</span>
        </h4>
      </div>
      <div className="spm-overview-right">
        <h6>Director:</h6>
        <p>etc</p>
        <h6>Writer:</h6>
        <p>etc</p>
        <h6>Stars:</h6>
        <p>etc</p>
        <h6>Genres:</h6>
        <p>etc</p>
        <h6>Release Date:</h6>
        <p>etc</p>
        <h6>Run Time:</h6>
        <p>etc</p>
        <h6>MMPA Rating:</h6>
        <p>etc</p>
        <h6>Plot Keywords:</h6>
        <p>superhero , marvel universe </p>
      </div>
    </div>
  );
}

export default SpmOverview;
