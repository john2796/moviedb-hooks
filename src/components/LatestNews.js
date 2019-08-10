import React from 'react'

function LatestNews() {
  return (
    <section className="latest-news">
      <div className="main-flex container">
        {/* ----- trailer carousel -------- */}
        <div className="main-left-section">
          <div className="title-wrap ">
            <h2>latest news</h2>
            <p>view all</p>
          </div>
          <div className="trailer-carousel">
            <div className="control">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur itaque illum
                similique quasi? Qui esse eveniet reprehenderit tempore. Placeat architecto ipsa
                doloremque ipsum aut adipisci illo quibusdam. Inventore tempora voluptatibus
                cupiditate!
              </p>
            </div>
          </div>
        </div>
        {/* ----- right side of trailer section ----- */}
        <div className="main-right-section">
          <h4 className="sb-title">Spotlight Celebrities</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque a amet saepe quam
            excepturi sed et doloremque aperiam cupiditate non. Inventore, sint.
          </p>
        </div>
      </div>
    </section>
  )
}

export default LatestNews
