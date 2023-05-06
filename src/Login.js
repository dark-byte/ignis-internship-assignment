import { useState } from "react";
import { Link } from "react-router-dom";
import Signup from "./Signup";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    // Check login credentials and perform login
    console.log(`Logging in with username: ${username} and password: ${password}`);
  };

 

  return (
    <form className="form" onSubmit={handleLogin}>
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="submit">Login</button>
      <p>
        Don\'t have an account?
        <Link to="/register"> Sign Up</Link>
      </p>
    </form>
  );
}

export default Login;