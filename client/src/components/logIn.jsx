import React, { useState } from 'react';
import '../styles/logIn.css';
import { useNavigate } from 'react-router-dom';


function LogIn(){

    const [state, setState] = useState({username: "", password: ""})
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const res = await fetch("http://localhost:3031/api/auth/login/", {
            headers: {
                'Content-Type': 'application/json',
                "Accept": "application/json"
            },
            body: JSON.stringify(state),
            method: "POST"
        })

        if(res.status !== 200){
            return alert("ERRO")
        }

        const json = await res.json()
        localStorage.setItem("token", json.token)
        navigate("/library") 
    }

    return(
        <div className="logIn-Form">
            <img src="/logos/gd.png" alt="" className='dex-logo' />
            <h1></h1>
            <div className='slogan'>All your games <br />In one place</div>
            <form action="" onSubmit={(e) => handleSubmit(e)}>
                <label className='label-title'>Username</label><br />
                <input className='input-label' type="text" onChange={(e) => { setState({...state, username: e.target.value})}} value={state.username} required />
                <br /><br />
                <label className='label-title'>Password</label> <br />
                <input className='input-label' type="password" onChange={(e) => { setState({...state, password: e.target.value})}} value={state.password} required />
                <br /><br />
                <button type='submit' href="/library" className='logIn-button'>Log In</button>
            </form>
            <p className='pass'>Forgot Password? <br /><a href="" className='reset-pass'>Reset it!</a></p>
            <div>
                <p className='account'>Dont have an account already? <br /><a href="/signup" className='create-account'>Create one!</a></p>
            </div>
        </div>

    )
}

export default LogIn;