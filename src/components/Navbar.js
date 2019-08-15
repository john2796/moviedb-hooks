import React, { useState } from 'react'
import { Link } from 'react-router-dom'

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
          <Link to="/" className="logo" />
          <Link to="/">home</Link>
          <Link to="/movies">movies</Link>
          <Link to="/celeb">celebrities</Link>
          <Link to="/news">news</Link>
        </span>
        <span>
          <button type="button" onClick={onOpenModal} className="anchor">
            login
          </button>

          <button type="button" className="red-btn ">
            sign up
          </button>
        </span>
      </nav>
      <Modal open={open} onClose={onCloseModal} center>
        <Login />
      </Modal>
    </>
  )
}
export default Navbar
