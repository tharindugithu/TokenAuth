import React from 'react'
import { useState } from 'react'
import Axios from 'axios'
import './Login.css'
function Login() {
    const [email, setEmail] = useState('')
    const login = () => {
        Axios.post('http://localhost:3001/login', { email }).then(() => {
            console.log('ok')
        })
    }
    return (
        <div className='container-login'>
            <h1>Sign Up</h1>
            <div>
                <h4>Enter Your Email to sign Up!!</h4>
            </div>
            <input type="email" name="" id="" onChange={(e) => { setEmail(e.target.value) }} />
            <button onClick={login}>Login</button>
        </div>
    )
}

export default Login