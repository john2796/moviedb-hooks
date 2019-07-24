import React, { useState } from 'react'
import '../../SCSS/spmMedia.scss'

import ModalVideo from 'react-modal-video'
import youtubebtn from '../../assets/youtube-play-btn.png'

function SpmMedia({ title, media, backdrop_path }) {
  const [isOpen, setIsOpen] = useState(false)

  console.log(media)
  return (
    <div className="media-wrapper">
      {/* ------ tab header title ------ */}
      <div className="tab-header">
        <h3>Videos of</h3>
        <h2 className="blue-text">{title}</h2>
      </div>

      {/* ----- movie video ----- */}
      <div className="sp-videos-wrap media-tab-videos-wrap">
        {media.map(item => (
          <div key={item.id}>
            <div
              className="sp-video-item"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w500/${backdrop_path})`,
              }}
            >
              <ModalVideo
                channel="youtube"
                isOpen={isOpen[item.id]}
                videoId={item.key}
                onClose={() => setIsOpen({ [item.id]: false })}
              />
              <button type="button" onClick={() => setIsOpen({ [item.id]: true })}>
                <img src={youtubebtn} alt="play" />
              </button>
            </div>
            <div className="tab-media-item-content">
              <h6>
                {item.type}
                {item.name}
              </h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SpmMedia
