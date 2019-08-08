import React from 'react'
import './socialsIcon.scss'

const SocialsIcon = () => {
  //  ------------------ 2 buttons underneath big image red & yellow  ------------------
  return (
    <div className="social-btn-parent">
      <p className="social-btn">
        <span>
          <i className="fa fa-heart" aria-hidden="true" />
        </span>
        add to favorite
      </p>
      <p className="social-btn">
        <span>
          <i className="fa fa-share-alt" aria-hidden="true" />
        </span>
        share
      </p>
    </div>
  )
}

export default SocialsIcon
