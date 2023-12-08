import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import img from '../assets/items/abt.jpg';
import vbox from '../assets/logos/vbox.PNG';
import valid from '../assets/logos/valid.png';
import banner from '../assets/banners/about us.PNG';
import Banner from './comp/banner'
import '../styles/abtus.css';

const About = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div>
      <Banner name='About Us' 
      title='Know About Us' 
      text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.
       Phasellus vehicula dui at ex laoreet, id dictum velit tristique' 
      cover={banner} />
      {/* <img src={banner} className="img-fluid banner" alt="Banner" /> */}
      <div className="container mt-5 justify-content-center">
        <div className="row d-flex align-items-center justify-content-center">
          <div id='flex-d'>
            <div className="col-md-6 abtmain">
              <h2 className="mt-4">We're Ready to Advance Your Cause with Us</h2>
              <img src={img} className="img-fluid l-img" alt="Left Image" />
              <div>
                <p>
                  Utilize flexible strategies to offer a comprehensive overview,
                  enhancing our commitment to maximize the overall impact of our
                  charitable initiatives
                </p>
                <p className="border-bottom-1px" onClick={handleShowModal} style={{ cursor: 'pointer' }}>
                  Get in Touch
                </p>
              </div>
            </div>
            <div className="col-md-5">
              <p>
                <img src={vbox} className="vbox" alt="VBOX Logo" />
                Welcome
              </p>
              <h2>We Are Committed to Your Charitable Cause</h2>
              <p>
                At Islamic Relief Worldwide, our deep commitment is to serve those in need and positively impact lives. Founded on compassion, solidarity, and faith, we tirelessly provide essential support across healthcare, education, livelihood, and emergency response sectors, striving for sustainable positive change
              </p>

              <div className="border rounded p-3 mb-4">
                <p>
                  <img src={valid} className="img-fluid" alt="Validation Logo" />
                  Our Vision
                </p>
                <p>
                  Envisioning a world where compassion, unity, and Islamic values
                  drive positive change
                </p>
              </div>

              <div className="border rounded p-3 mb-4">
                <p>
                  <img src={valid} className="img-fluid" alt="Validation Logo" />
                  Our Mission
                </p>
                <p>
                  Transforming lives through Islamic philanthropy, promoting
                  compassion, and empowering communities
                </p>
              </div>

              <button className="more-btn" onClick={handleShowModal}>
                More About Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* More About Us Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>More About Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            At Islamic Relief Worldwide, our initiatives extend across various
            sectors, including healthcare, education, livelihood, and emergency
            response. We aim to create sustainable and positive change in the world,
            addressing the root causes of poverty and promoting long-term solutions.
            Through collaborative efforts and partnerships, we strive to empower
            communities, uplift individuals, and foster a sense of hope and resilience.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default About;
