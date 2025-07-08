import React from 'react';
import '../styles/logIn.css';


function LogIn(){
    return(
        <div className="logIn-Form">
            <img src="/logos/gd.png" alt="" className='dex-logo' />
            <h1></h1>
            <h3>All your games <br />In one place</h3>
            <form action="">
                <label className='label-title'>Username</label><br />
                <input className='input-label' type="text" name="" id="" required />
                <br /><br />
                <label className='label-title'>Password</label> <br />
                <input className='input-label' type="password" name="" id="" required />
            </form>
            <p className='pass'>Forgot Password? <br /><a href="" className='reset-pass'>Reset it!</a></p>
            <div>
                <button className='logIn-button'><a href="/signup" className='log-link'><h2>LogIn</h2></a></button>
                <p className='account'>Dont have an account already? <br /><a href="/signup" className='create-account'>Create one!</a></p>
            </div>
        </div>

    )
}

export default LogIn;