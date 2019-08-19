import React, { memo } from 'react'

import Movies from './Movies'
import Trailer from './Trailer'

function Main() {
  return (
    <main>
      <Movies />
      <Trailer />
    </main>
  )
}

export default memo(Main)
