import React, { useState } from 'react';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = (e) => {
    e.preventDefault();
    let userData = {
      email,
      password}
      console.log(userData)
  }
  return (
    <div>
    <form action="" onSubmit={handleLogin}>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="enter your email" /><br />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="enter your password" /><br />
      <button type="submit" className="btn btn-primary">Login</button>
    </form>
    </div>
  )
}

export default Login
