import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import vbox from '../assets/logos/vbox.PNG';
import Dlist from "./comp/Dlist.js";
import '../styles/profile.css';

const Profile = () => {
  const navigate = useNavigate(); // Import useNavigate from 'react-router-dom'

  const DonationList = JSON.parse(localStorage.getItem('donationList')) || [];

  const handleSignOut = () => {
    // Set IsSignedIn to false in localStorage
    localStorage.setItem('IsSignedIn', false);
    // Redirect to the sign-in page
    navigate('/signin');
    window.location.reload();

  };

  return (
    <div>
      {DonationList.length === 0 ? null : (
        <div className="DataL-container">
          <h1><img src={vbox} className='VBOX'/> My Donation list</h1>
          {DonationList.map((donation) => (
            <Dlist key={donation.id} title={donation.Title} text={donation.Text} img={donation.Img} />
          ))}
        </div>
      )}
      <center>
        <button className='b-tn'><Link to="/CreatePost" >Create Post</Link></button>
        <button className='b-tn' onClick={handleSignOut}>Sign Out</button>
      </center>
    </div>
  );
};

export default Profile;
