import React, { useState } from 'react'
import styled from 'styled-components'
import Modal from '../Modal'

const Login = () => {
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  })

  const changeHandler = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('inputs', inputs)
  }

  return (
    <>
      <LoginStyle>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label>username</label>
          <input value={inputs.username} onChange={changeHandler} type="text" name="username" />
          <label>password</label>
          <input value={inputs.password} onChange={changeHandler} type="password" name="password" />
          <button type="submit">submit</button>
        </form>
      </LoginStyle>
    </>
  )
}

const LoginStyle = styled.div`
  display: flex;
  align-items: center;

  h2 {
    color: black;
  }
`

export default Login
