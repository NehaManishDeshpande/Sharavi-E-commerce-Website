import React, { useState } from 'react';
// import './Signup.css';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/register', { name, email, password })
        .then(result => {
            console.log(result);
            alert("Registered Successfully !");
            localStorage.setItem('name', name);
            localStorage.setItem('email', email);
            navigate('/login');
        })
        .catch(err => console.error(err));
};

  const solve = () => {
    
  };

  return (
    <div>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css" />

      </head>
      <body  style={{ alignItems: "center" }}>
        <div className="main">
          <h1>
            <i className="bi bi-journal-check"></i> Registration Form
          </h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">
              <h3>
                <i className="bi bi-person-circle"></i> Username:
              </h3>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Username"
              required
              onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="email">
              <h3>
                <i className="bi bi-envelope-at-fill"></i> Email:
              </h3>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="password">
              <h3>
                <i className="bi bi-file-lock2"></i> Password:
              </h3>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="wrap">
              <button type="submit" onClick={solve}>
                Submit
              </button>
            </div>
          </form>
          <p>
            Already have an account?
            <a href="/login" style={{ textDecoration: 'none' }}>
              LogIn
            </a>
          </p>
        </div>
      </body>
    </div>
  );
};

export default Signup;
