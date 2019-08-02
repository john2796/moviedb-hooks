import React, { useState } from 'react'
import Modal from 'react-responsive-modal'
import Login from './auth/Login'

function Navbar() {
  const [open, setOpen] = useState(false)

  const onOpenModal = () => {
    setOpen(true)
  }
  const onCloseModal = () => {
    setOpen(false)
  }
  return (
    <>
      <nav className="header-nav container">
        <span>
          <a href="/">logo</a>
          <a href="/">home</a>
          <a href="/movies">movies</a>
          <a href="/celeb">celebrities</a>
          <a href="/news">news</a>
        </span>
        <span>
          <button type="button" onClick={onOpenModal}>
            login
          </button>

          <button type="button">sign up</button>
        </span>
      </nav>
      <Modal open={open} onClose={onCloseModal} center>
        <Login />
      </Modal>
    </>
  )
}
export default Navbar
