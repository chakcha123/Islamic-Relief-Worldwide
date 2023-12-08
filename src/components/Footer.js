import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TEL from '../assets/logos/tele.png';
import MAIL from '../assets/logos/mail.png';
import LOCAL from '../assets/logos/local.png';
import INS from '../assets/logos/ins.png';
import FB from '../assets/logos/fb.png';
import GTH from '../assets/logos/gt.png';
import '../styles/footer.css';

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    window.location.reload();
  };

  const handleSub = () => {
    openModal();
  };

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <footer className='bg-dark text-white py-5'>
      <div className='container'>
        <div className='row align-items-center justify-content-center'>
          <div className='d-flex' id='infocont'>
            <div className='pack p-4 d-flex' id='infos'>
              <img src={TEL} alt='Telephone Icon' className='mr-3 ico' />
              <p>Call Us<br />+212 6 369 605 14</p>
            </div>

            <div className='pack p-4 d-flex' id='infos'>
              <img src={MAIL} alt='Mail Icon' className='mr-3 ico' />
              <p>Mail Us<br />yidaouti@gmail.com</p>
            </div>

            <div className='pack p-4 d-flex' id='infos'>
              <img src={LOCAL} alt='Location Icon' className='mr-3 ico' />
              <p>Location<br />Geulmim, Tayert</p>
            </div>
          </div>
        </div>

        <div className='row align-items-center justify-content-center'>
          <div className='col-md-6 '>
            <p className='ver text-center '><span className='mov'>&rarr;</span>Quick Link</p>
            <ul className='list-unstyled text-center'>
              <li><Link to="/" className='text-white '>Home</Link></li>
              <li><Link to="/About" className='text-white'>About Us</Link></li>
              <li><Link to="/Contact" className='text-white'>Contact Us</Link></li>
            </ul>
          </div>

          <div className='col-md-4 '>
            <form className='fot-form'>
              <div className=' mb-3'>
                <p>Subscribe</p>
                <p>Join Our Mailing List & to get our news.</p>
              </div>
              <div className='input-group mb-3'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Your email address'
                  onChange={handleInputChange}
                />
                <div className='input-group-append'>
                  <button id='sub-btn' type='button' onClick={handleSub}>
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className='row align-items-center justify-content-center'>
          <div className='col-md-5'>
            <p className='text-center'>
              <span className='mov'>&copy;</span> 2023 <span className='ver'>Islamic Relief Worldwide</span>. All Rights Reserved.
            </p>
          </div>
          <div className='col-md-4 d-flex justify-content-center'>
            <div className='flw'>
              <p className='text-center'>Follow   :
                <img src={INS} alt='Instagram Icon' className='ico' />
                <img src={FB} alt='Facebook Icon' className='ico' />
                <img src={GTH} alt='GitHub Icon' className='ico' /> </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal show={isModalOpen} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {email.trim() !== '' ? (
            <p>
              Thank you for subscribing! You will now receive our latest news.
              Email: {email}
            </p>
          ) : (
            <p>
              Please fill out all required fields before subscribing.  
            </p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant='primary' onClick={closeModal}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </footer>
  );
};

export default Footer;
