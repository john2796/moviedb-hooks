import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Modal = ({ children }) => {
  console.log(children)
  return (
    <ModalStyle>
      <div className="wrapper">{children}</div>
    </ModalStyle>
  )
}

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

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 430px;
    padding: 50px;
    border: 1px solid #e1e1e1;
    height: auto;
    background-color: #ffffff;
    border: 1px solid red;
  }
`

// Modal.defau = {
//   children: PropTypes.object
// }
export default Modal
