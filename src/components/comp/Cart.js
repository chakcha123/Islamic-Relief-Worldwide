import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../../styles/cart.css';

const Card = (props) => {
  const [donationAmount, setDonationAmount] = useState('');
  const [donateModal, setDonateModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleDonate = () => {
    setDonateModal(true);
  };

  const handleCloseDonateModal = () => {
    setDonateModal(false);
    setSuccessMessage('');
  };

  const handledonationList = () => {
    // Create a new donation object with the current post values
    const newDonation = {
      Title: props.title,
      Text: props.text,
      Img: props.img
    };

    // Retrieve the existing donation list from local storage
    const existingDonationList = JSON.parse(localStorage.getItem('donationList')) || [];

    // Update the donation list by adding the new donation
    const updatedDonationList = [...existingDonationList, newDonation];

    // Store the updated donation list in local storage
    localStorage.setItem('donationList', JSON.stringify(updatedDonationList));

    // Set the success message state
    setSuccessMessage('The post has been successfully added to the donation list');

    // Show the success modal
    setDonateModal(false); // Close the donate modal if it's open
  };

  return (
    <div className='c-container'>
      <img src={props.img} className='im' />
      <div className='te'>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
        <a>Read More</a>
      </div>

      <center>
        <button type='button' className='btn1' onClick={handleDonate}>
          Donate
        </button>
        <button className='btn1' onClick={handledonationList}>
          Add to Donation List
        </button>
      </center>

      {/* Donation Form Modal */}
      <Modal show={donateModal} onHide={handleCloseDonateModal}>
        <Modal.Header closeButton>
          <Modal.Title>Donation Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='D-form'>
            <label className='D-label D-E-lbl'>Email</label>
            <br />
            <input type='text' placeholder='Example@gmail.com' className='D-input D-E-inpt' />
            <label className='D-label D-C-lbl'>Card Number</label>
            <br />
            <input type='text' placeholder='0000 0000 0000 0000' className='D-input D-C-inpt' />
            <div className='d-div'>
              <div className='d-div-inner'>
                <label className='D-label D-EX-lbl'>Expires</label>
                <input type='text' placeholder='MM / YY' className='D-input D-EX-inpt' />
              </div>
              <div className='d-div-inner'>
                <label className='D-label D-CV-lbl'>CVC</label>
                <input type='text' placeholder='***' className='D-input D-CV-inpt' />
              </div>
            </div>
            <br />
            <label className='D-label D-A-lbl'>Amount</label>
            <br />
            <input
              type='text'
              placeholder='0'
              className='D-input D-A-inpt'
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleCloseDonateModal}>
            Close
          </Button>
          <Button variant='primary' onClick={handleCloseDonateModal}>
            Donate
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Success Message Modal */}
      <Modal show={successMessage !== ''} onHide={handleCloseDonateModal}>
        <Modal.Header closeButton>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{successMessage}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='primary' onClick={handleCloseDonateModal}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Card;