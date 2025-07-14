import React from 'react';
import '../styles/signUp.css';


function SignUp({ form, onChange, onSubmit, error, success }){
    return(
        <div className="signUp-Form">
            <img src="/logos/gd.png" alt="" className='dex-logo' />
            <h3>All your games <br />In one place</h3>
            <form onSubmit={onSubmit}>
                <label className='label-title'>Username</label><br />
                <input
                    className='input-label'
                    type="text"
                    name="username"
                    value={form.username}
                    onChange={onChange}
                    required
                />
                <br /><br />
                <label className='label-title-email'>Email</label><br />
                <input
                    className='input-label'
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    required
                />
                <br /><br />
                <label className='label-title'>Password</label> <br />
                <input
                    className='input-label'
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={onChange}
                    required
                />
                <br /><br />
                <label className='label-title-confirmPass'>Confirm Password</label> <br />
                 <input
                    className='input-label'
                    type="password"
                    name="passwordConfirmation"
                    value={form.passwordConfirmation}
                    onChange={onChange}
                    required
                />
                <br />
                <br />
                <button className='signUp-button' type="submit">Create <br />Account</button>
                {error && <div className="error">{error}</div>}
                {success && <div className="success">{success}</div>}
            </form>
            
            <div>
                
                <p className='logIn'>Have an account already? <br /><a href="/" className='logIn-link'>Log In!</a></p>
            </div>
        </div>

    )
}

export default SignUp;