import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import './Login.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (e) => {
        e.preventDefault();
        const result = await fetch('http://localhost:3000/login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        }).then((res) => res.json())
        if (result.status === 'ok') {
            console.log('Got the token: ', result.data)
            localStorage.setItem('token', result.data)
            alert('Success')
        } else {
            alert(result.error)
        }
        setRedirect(true)
    }

    if(redirect){
        return <Navigate to='/' />;
    }

    return (
        <form className='form' onSubmit={submit}>
            <div className='control'>
                <h1>
                    Log In
                </h1>
            </div>
            <div className='control block-cube block-input'>
                <input name='username' placeholder='Username' type='text' onChange={e => setUsername(e.target.value)}/>
                <div className='bg-top'>
                    <div className='bg-inner'></div>
                </div>
                <div className='bg-right'>
                    <div className='bg-inner'></div>
                </div>
                <div className='bg'>
                    <div className='bg-inner'></div>
                </div>
            </div>
            <div className='control block-cube block-input'>
                <input name='password' placeholder='Password' type='password' onChange={e => setPassword(e.target.value)}/>
                <div className='bg-top'>
                    <div className='bg-inner'></div>
                </div>
                <div className='bg-right'>
                    <div className='bg-inner'></div>
                </div>
                <div className='bg'>
                    <div className='bg-inner'></div>
                </div>
            </div>
            <button className='btn block-cube block-cube-hover' type='submit'>
                <div className='bg-top'>
                    <div className='bg-inner'></div>
                </div>
                <div className='bg-right'>
                    <div className='bg-inner'></div>
                </div>
                <div className='bg'>
                    <div className='bg-inner'></div>
                </div>
                <div className='text'>
                    Log In
                </div>
            </button>
        </form>
    );
}

export default Login;