/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { useState } from 'react'
import styled from 'styled-components'

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
          <label>username:</label>
          <input value={inputs.username} onChange={changeHandler} type="text" name="username" />
          <label>password:</label>
          <input value={inputs.password} onChange={changeHandler} type="password" name="password" />
          <button type="submit">login</button>
        </form>
      </LoginStyle>
    </>
  )
}

const LoginStyle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 10px;

  h2 {
    color: black;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 400px;

    label {
      font-family: 'Dosis', sans-serif;
      font-size: 14px;
      color: #222222;
      font-weight: bold;
      text-transform: uppercase;
      width: 100%;
      margin-top: 25px;
    }
    input {
      font-family: 'Dosis', sans-serif;
      font-size: 14px;
      color: #222222;
      font-weight: bold;
      text-transform: capitalize;
      margin-top: 10px;
      height: 42px;
      border: 1px solid #e1e1e1;
    }
    input[type='text']:focus,
    input[type='password']:focus {
      outline: 0;
    }
    input[type='text'],
    input[type='password'] {
      display: block;
      width: 100%;
      padding: 6px 12px;
      line-height: 1.42857143;
      background-color: #fff;
    }
  }
  button {
    font-family: 'Dosis', sans-serif;
    font-size: 14px;
    color: #ffffff;
    font-weight: bold;
    text-transform: uppercase;
    border: none;
    background-color: #dd003f;
    height: 42px;
    width: 100%;
    cursor: pointer;
    margin: 30px 0;
  }
`

export default Login
