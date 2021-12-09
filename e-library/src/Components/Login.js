import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { setUserSession } from '../Utils/Common'
import LoginStyles from './Login.module.css';


const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setError(null);
    setLoading(true);

    axios.post("http://localhost:4000/users/signin", {
      username: username,
      password: password
    }).then(response => {
      setLoading(false);
      setUserSession(response.data.token, response.data.user);
      navigate('/profile');

    }).catch(error => {
      setLoading(false);
      if (error.response.status === 401 || error.response.status === 400) {
        setError(error.response.data.message);
      } else {
        setError("Something went wrong. Please try again later.");
      }
    });
  }


  return (
    <div>
      <div className={LoginStyles.bg}>
      Login <br /><br />
      <div>
        Username<br />
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </div>
      <div>
        Password<br />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div><br />
      {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
      <input
        type="button"
        value={loading ? "Loading..." : "Login"}
        disabled={loading}
        onClick={handleLogin}
      />
    </div>
    </div>

  );
}

export default Login;
