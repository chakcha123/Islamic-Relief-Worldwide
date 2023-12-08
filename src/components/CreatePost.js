import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../styles/createpost.css';
import vbox from '../assets/logos/vbox.PNG';

const CreatePost = () => {
  const [postIdCounter, setPostIdCounter] = useState(0); // Initial ID counter
  const [post, setPost] = useState({
    id: postIdCounter,
    Title: '',
    Text: '',
    Img: ''
  });
  const [showModal, setShowModal] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPost({
          ...post,
          Img: reader.result
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPost({
      ...post,
      [name]: value
    });
  };

  const handlePost = () => {
    // Retrieve existing posts from local storage
    const existingPosts = JSON.parse(localStorage.getItem('posts')) || [];

    // Increment the ID counter for the next post
    setPostIdCounter((prevId) => prevId + 1);

    // Append the new post to the existing posts with the updated ID
    const updatedPosts = [...existingPosts, { ...post, id: postIdCounter }];

    // Store the updated posts in local storage
    localStorage.setItem('posts', JSON.stringify(updatedPosts));

    // Show the success modal
    setShowModal(true);

  };

  const handleCloseModal = () => {
    setShowModal(false);
    window.location.reload();

    // Optionally, you can add additional logic after closing the modal
  };

  return (
    <div>
      <form className='posts-container'>
        <h5>
          <img src={vbox} className='vbox' /> Create New Post
        </h5>
        <textarea
          name="Text"
          className='t-area'
          cols="30"
          rows="10"
          placeholder="What's in your mind?"
          onChange={handleInputChange}
        ></textarea>
        <br />
        <div id='inpt-f'>
          <input
            name="Title"
            type="text"
            placeholder='  Add Title...'
            onChange={handleInputChange}
          />
          <label id='fileInputLabel' htmlFor="fileInput" className="file-input-label">
            Add image
          </label>
          <input
            id='fileInput'
            name="Img"
            type="file"
            onChange={handleFileChange}
          />
        </div>
        <button className='post-btn' type="button" onClick={handlePost}>
          Post
        </button>
      </form>

      {/* Success Message Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Post created successfully</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='primary' onClick={handleCloseModal}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CreatePost;
