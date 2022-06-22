import React, {SyntheticEvent, useState} from 'react'

export const Register = () => {
    const [firstName, setFirstName] = useState<string>();
    const [lastName, setLastName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [address, setAddress] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [errors, setError] = useState<string>();

    const handleFirst = (e: SyntheticEvent) => {setFirstName((e.target as HTMLInputElement).value)} 
    const handleLast = (e: SyntheticEvent) => {setLastName((e.target as HTMLInputElement).value)}
    const handleEmail = (e: SyntheticEvent) => {setEmail((e.target as HTMLInputElement).value)}
    const handleAddress = (e: SyntheticEvent) => {setAddress((e.target as HTMLInputElement).value)}
    const handlePassword = (e: SyntheticEvent) => {setPassword((e.target as HTMLInputElement).value)}
    const handleRegister = () => { 
 
        if  ( !firstName || !lastName || !email || !address || !password)  return setError("Must Provide Required Credentials To Sign Up");
       
            fetch("/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        address: address,
        password: password,
        })
    })

    .then(res => {
        if (res.status != 200) {
            setError("Must Provide Required Credentials To Sign Up");
        }
    })
    .then(user => {

    }
        ) 

    }
    return(
        <div>
            <h1>Sign Up</h1>
            First Name:
            <input onChange={handleFirst} type="text" placeholder="First Name"/>
            Last Name:
            <input onChange={handleLast} type="text" placeholder="Last Name" />
            Email:
            <input onChange={handleEmail} type="text" placeholder="Email" />
            Address:
            <input onChange={handleAddress} type="text" placeholder="Address" />
            Password:
            <input onChange={handlePassword} type="text" placeholder="Password" />
            <button onClick={handleRegister}> Sign Up </button>
        </div>
    )
}