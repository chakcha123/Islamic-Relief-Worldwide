import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/sign.css';
import box from '../assets/logos/vbox.PNG';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Import useHistory from 'react-router-dom'

  const handleSignIn = (e) => {
    e.preventDefault();

    const storedDataString = localStorage.getItem('users');

    if (storedDataString) {
      const storedUsers = JSON.parse(storedDataString);

      // Find the user with the provided email
      const user = storedUsers.find((user) => user.email === email);

      if (user && user.password === password) {
        alert('Sign in successful!');
        localStorage.setItem('IsSignedIn', true);
        navigate('/');
        window.location.reload();

      } else {
        alert('Invalid email or password. Please try again.');
      }
    } else {
      alert('No account found. Please sign up first.');
    }
  };

  return (
    <div>
      <form className='sform' onSubmit={handleSignIn}>
        <label>
          <img src={box} className='b2' alt='Logo' />
          Sign In
        </label>
        <br />
        <br />
        <br />
        <input
          type='email'
          placeholder='Your Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type='password'
          placeholder='Your password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <label>
          Don't have an account?{' '}
          <Link to='/Signup' className='vlink'>
            {' '}
            Sign Up
          </Link>
        </label>{' '}
        <br />
        <br />
        <button className='sub-btn' type='submit'>
          Submit
        </button>
      </form>
      <br />
    </div>
  );
};

export default SignIn;
