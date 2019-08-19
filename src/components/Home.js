import React, { memo, useRef } from 'react'

import scrollToComponent from 'react-scroll-to-component'
import Main from './Main'
import Header from './Header'
import Footer from './Footer'

function Home() {
  const upEl = useRef(null)

  const scrollToTop = () => {
    scrollToComponent(upEl.current, {
      offset: 0,
      align: 'bottom',
      duration: 1000,
      ease: 'inCirc',
    })
  }

  return (
    <>
      <Header upEl={upEl} />
      <Main />
      <Footer scrollToTop={scrollToTop} />
    </>
  )
}
export default memo(Home)
