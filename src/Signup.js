import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Signup() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleSignup = (event) => {
        event.preventDefault();
        // Create a new account with the provided username and password
        if(password === confirmPassword){
            console.log(`Creating account with username: ${username} and password: ${password}`);
        } else{
            alert("Passwords do not match!")
        }
    };

   return (
    <div className="page-center">
      <form className='form' onSubmit={handleSignup}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Confirm Password</label>
          <input type="password" id="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
        <button type="submit">Sign Up</button>
        <p>
          Already have an account?
          <Link to="/login"> Login</Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
