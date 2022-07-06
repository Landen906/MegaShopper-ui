import React, {SyntheticEvent, useState} from 'react';
import UserDashboard from '../../dashboard/UserDashboard';
import { useNavigate } from "react-router";

// interface ILoginProps {
//     currentUser: User | undefined,
//     setCurrentUser: (nextUser: User) => void
// }

export const Login = () => {
// setting some state and variables
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setError] = useState<string>("");
  const navigate = useNavigate();
// Making a function that will handle the login when a user presses a button
  const handleLogin = () => {
// checking to see if email and password are null
    if (!email || !password) {
      return setError("Must provide a email and password!")
    }
// Fetching when my if condition is true
    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
// checking whether the status is 200 or not. then stringify if the status is 200
      .then(res => {
        if (res.status !== 200) {
            setError("Could not validate credentials!")
        }
        else {
        res.json()}
    })
// Getting the promise back and setting the current user to the user that was returned.
      .then(user => {
        // setUser(user);
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
      <br />
      {errors}
    </div>
  )
}