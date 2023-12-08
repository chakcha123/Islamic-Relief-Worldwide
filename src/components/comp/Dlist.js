import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../../styles/donation_list.css';


const Dlist = (props) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showDonateModal, setShowDonateModal] = useState(false);
  const [donationAmount, setDonationAmount] = useState('');

  const handleDelete = () => {
    // Show the delete confirmation modal
    setShowDeleteModal(true);
  };

  const handleCloseDeleteModal = (shouldDelete) => {
    // If shouldDelete is true, perform the deletion
    if (shouldDelete) {
      // Retrieve the existing donation list from local storage
      const existingDonationList = JSON.parse(localStorage.getItem('donationList')) || [];

      // Filter out the item to be deleted
      const updatedDonationList = existingDonationList.filter(item => item.Title !== props.title);

      // Store the updated donation list in local storage
      localStorage.setItem('donationList', JSON.stringify(updatedDonationList));

      // Reload the page
      window.location.reload();
    }

    // Close the delete confirmation modal
    setShowDeleteModal(false);
  };

  const handleDonate = () => {
    // Show the donation form modal
    setShowDonateModal(true);
  };

  const handleCloseDonateModal = () => {
    // Close the donation form modal
    setShowDonateModal(false);
  };

  return (
    <div>
      <div className='item'>
        <img src={props.img} className='imgg' />
        <div className='TEXT'>
          <h5>{props.title}</h5>
          <p>{props.text}</p>
        </div>
        <button className='btnn' onClick={handleDelete}>
          Delete
        </button>
        <button className='btnm' onClick={handleDonate}>
          Donate
        </button>

        {/* Delete Confirmation Modal */}
        <Modal show={showDeleteModal} onHide={() => handleCloseDeleteModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Delete Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{`Are you sure you want to delete "${props.title}" from the donation list?`}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='primary' onClick={() => handleCloseDeleteModal(false)}>
              Cancel
            </Button>
            <Button variant='danger' onClick={() => handleCloseDeleteModal(true)}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Donation Form Modal */}
        <Modal show={showDonateModal} onHide={handleCloseDonateModal}>
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
      </div>
    </div>
  );
};

export default Dlist;
