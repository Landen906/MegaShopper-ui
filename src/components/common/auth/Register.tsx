import React, {SyntheticEvent, useState} from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../../context/GlobalState';

export const Register = () => {
    const [firstName, setFirstName] = useState<string>();
    const [lastName, setLastName] = useState<string>();
    const [username, setUsername] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [address, setAddress] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [errors, setError] = useState<string>();
    const { setUser } = useContext(GlobalContext);
    const navigate = useNavigate()

    const handleFirst = (e: SyntheticEvent) => {setFirstName((e.target as HTMLInputElement).value)} 
    const handleLast = (e: SyntheticEvent) => {setLastName((e.target as HTMLInputElement).value)}
    const handleUsername = (e: SyntheticEvent) => {setUsername((e.target as HTMLInputElement).value)}
    const handleEmail = (e: SyntheticEvent) => {setEmail((e.target as HTMLInputElement).value)}
    const handleAddress = (e: SyntheticEvent) => {setAddress((e.target as HTMLInputElement).value)}
    const handlePassword = (e: SyntheticEvent) => {setPassword((e.target as HTMLInputElement).value)}
    const handleRegister = () => { 
 console.log ("Test")
        if  ( !firstName || !lastName || !email || !address || !password)  {return setError("Must Provide Required Credentials To Sign Up");}
       
            fetch("/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        username: username,
        email: email,
        address: address,
        password: password,
        })
    })

    .then(res => {
        if (res.status !== 200) {
            setError("Must Provide Required Credentials To Sign Up");
        }
    })
    .then(user => {
        setUser(user);
        navigate('/')
    }
        ) 

    }
    return(
        <div>
            <h1>Sign Up</h1>
            First Name:
            <input onChange={handleFirst} type="text" placeholder="First Name"/>
            <br/>
            Last Name:
            <input onChange={handleLast} type="text" placeholder="Last Name" />
            <br/>
            Username:
            <input onChange={handleUsername} type="text" placeholder="Username" />
            <br/>
            Email:
            <input onChange={handleEmail} type="text" placeholder="Email" />
            <br/>
            Address:
            <input onChange={handleAddress} type="text" placeholder="Address" />
            <br/>
            Password:
            <input onChange={handlePassword} type="text" placeholder="Password" />
            <br/>
            <button onClick={handleRegister}> Sign Up </button>
            <br/>
            {errors}
        </div>
    )
}