import React, {SyntheticEvent, useState} from 'react'
import UserDashboard from '../../UserDashboard'
import { useNavigate } from "react-router";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();

  const handleLogin = e => {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then(res => res.json())
      .then(user => {
        // if () {
        // } else {
        //   navigate("/userdashboard");
        // }
      });
  };
  return (
    <div>
      <h1 className="login-title">Login</h1>
      <label>Email:</label>
      <input type="text" id="email" value={username} onChange={(e: SyntheticEvent => setUsername(e.target as HTMLElement).value)} placeholder='email' />
      <br />
      <label>Password:</label>
      <input type="password" id="password" value={password} placeholder='password' />
    </div>
  )
}