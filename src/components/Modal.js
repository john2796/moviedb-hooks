/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Modal = ({ children }) => {
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    setToggle(true)
  }, [])
  const handleToggle = () => {
    setToggle(test => !test)
  }

  console.log(toggle)
  const hidden = toggle ? 'toggle-modal' : ''
  return (
    <ModalStyle onClick={handleToggle}>
      <div className={`wrapper ${hidden}`}>{children}</div>
    </ModalStyle>
  )
}

// ============= STYLE =============
const ModalStyle = styled.div`
  /* OVERLAY  */
  border: 1px solid orange;
  background-color: rgba(0, 0, 0, 0.75);
  bottom: 0;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  .wrapper {
    width: 430px;
    padding: 50px;
    border: 1px solid #e1e1e1;
    height: auto;
    background-color: #ffffff;
    margin: 0 auto;
    border: 1px solid red;
  }
  .toggle-modal {
    opacity: 0;
  }
`

export default Modal
