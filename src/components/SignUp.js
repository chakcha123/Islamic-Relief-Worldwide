import React, { useState } from 'react';
import '../styles/sign.css';
import box from "../assets/logos/vbox.PNG";
import { Link } from 'react-router-dom';

const SignUp = () => {
  // State variables for form inputs
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAssociation, setIsAssociation] = useState(false);

  const handleSubmit = () => {
    const user = {
      firstName,
      lastName,
      phoneNumber,
      email,
      password,
      isAssociation,
    };

    // Retrieve existing users from local storage
    const existingUsersString = localStorage.getItem('users');
    const existingUsers = existingUsersString ? JSON.parse(existingUsersString) : [];

    // Push the new user into the list
    existingUsers.push(user);

    // Save the updated user data back to local storage
    localStorage.setItem('users', JSON.stringify(existingUsers));
  };

  return (
    <div>
      <form className='sform'>
        <label><img src={box} className='b2' alt="Logo" />Sign Up </label><br/><br/><br/>
        <input
          placeholder=' First Name'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        /><br/>
        <input
          placeholder=' Last Name'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        /><br/>
        <input
          placeholder=' Phone Number'
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        /><br/>
        <input
          placeholder=' Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br/>
        <input
          type='password'
          placeholder=' PassWord'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br/>
        <div className='ass'>
          <label>Association</label>
          <input
            type="checkbox"
            checked={isAssociation}
            onChange={() => setIsAssociation(!isAssociation)}
          /><br/>
        </div>
        <label>Already have an account? <Link to='/Signin' className='vlink'> Sign In</Link></label>
        <br/><br/>
        <button className='sub-btn' onClick={handleSubmit}>Submit</button>
      </form><br/>
    </div>
  );
};

export default SignUp;
