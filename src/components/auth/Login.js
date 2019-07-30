import React, { useState } from 'react'

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
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>username</label>
        <input value={inputs.username} onChange={changeHandler} type="text" name="username" />
        <label>password</label>
        <input value={inputs.password} onChange={changeHandler} type="password" name="password" />
        <button type="submit">submit</button>
      </form>
    </>
  )
}
export default Login
