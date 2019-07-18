import React, { memo } from 'react'

import '../SCSS/main.scss'
import Movies from './Movies'
import Trailer from './Trailer'
import LatestNews from './LatestNews'

function Main() {
  return (
    <main>
      <Movies />
      <Trailer />
      <LatestNews />
    </main>
  )
}

export default memo(Main)
