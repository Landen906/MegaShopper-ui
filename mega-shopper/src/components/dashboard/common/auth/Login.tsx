import React, {SyntheticEvent, useState} from 'react'
import UserDashboard from '../../UserDashboard'
import { useNavigate } from "react-router";

// interface ILoginProps {
//     currentUser: User | undefined,
//     setCurrentUser: (nextUser: User) => void
// }

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {

    if (!email || !password) {
        setError("Must provide a email and password!")
    }
    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(res => {
        if (res.status != 200) {
            setError("Could not validate credentials!")
        }
        else {
        res.json()}
    })
      .then(user => {
        props.setCurrentUser(user);
      }).catch(error => {
        setError("There was an error with the server!")
      })
  };

  return (
    <div>
      <h1 className="login-title">Login</h1>
      <label>Email:</label>
      <input type="text" id="email" 
        value={email}
        onChange={(e: SyntheticEvent) => setEmail((e.target as HTMLInputElement).value)} 
        placeholder='email' 
      />
      <br />
      <label>Password:</label>
      <input type="password" id="password" 
        value={password} 
        onChange={(e: SyntheticEvent) => setPassword((e.target as HTMLInputElement).value)} 
        placeholder='password' 
      />
      <button onClick={handleLogin}>Login</button>
      {errors}
    </div>
  )
}