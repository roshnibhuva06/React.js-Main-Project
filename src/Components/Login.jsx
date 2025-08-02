import axios from 'axios';
import React, { useState } from 'react';



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    let userData = { email, password };
    try {

      const res = await axios.post("https://reqres.in/api/login", userData, {
        headers: {
          "Content-Type": "application/json", 
          "x-api-key": "reqres-free-v1"

        }

      });
      console.log(res.data.token);
      
    } catch (error) {
      console.log(error)
    }
  };
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
