import React from 'react';
import '../styles/signUp.css';


function SignUp(){
    return(
        <div className="signUp-Form">
            <img src="/logos/gd.png" alt="" className='dex-logo' />
            <h1></h1>
            <h3>All your games <br />In one place</h3>
            <form action="">
                <label className='label-title'>Username</label><br />
                <input className='input-label' type="text" name="" id="" required/>
                <br /><br />
                <label className='label-title-email'>Email</label><br />
                <input className='input-label' type="email" name="" id="" required/>
                <br /><br />
                <label className='label-title'>Password</label> <br />
                <input className='input-label' type="password" name="" id="" required/>
                <br /><br />
                <label className='label-title-confirmPass'>Confirm Password</label> <br />
                <input className='input-label' type="password" name="" id="" required/>
                <br />
                <br />
            </form>
            
            <div>
                <button className='signUp-button'><a href="/" className='create-link'><h2>Create <br />Account</h2></a></button>
                <p className='logIn'>Have an account already? <br /><a href="/" className='logIn-link'>Log In!</a></p>
            </div>
        </div>

    )
}

export default SignUp;