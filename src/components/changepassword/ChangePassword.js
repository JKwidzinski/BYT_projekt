import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

function ChangePassword() {
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (e) => {
        e.preventDefault();
        const result = await fetch('http://localhost:3000/change-password',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                newpassword: password,
                token: localStorage.getItem('token')
            })
        }).then((res) => res.json())
        if (result.status === 'ok') {
            alert('Success')
        } else {
            alert(result.error)
        }
        setRedirect(true)
    }

    if(redirect){
        return <Navigate to='/login' />;
    }

    return (
        <div className='form'>
            <form onSubmit={submit}>
                <h1>Change your password</h1>
                <input type='password' className='formInput' placeholder='Password' required onChange={e => setPassword(e.target.value)}/>
                <button className='formButton' type='submit'>Change</button>
            </form>
        </div>
    );
}

export default ChangePassword;