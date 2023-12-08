import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Header from './components/Header';
import HeaderS from './components/HeaderS';
import Footer from './components/Footer';
import Profile from './components/Profile';
import CreatePost from './components/CreatePost';
import './styles/app.css';

const App = () => {
  useEffect(() => {
    // Check if IsSignedIn is true in localStorage and update state accordingly
    const isUserSignedIn = localStorage.getItem('IsSignedIn') === 'true';
    // Do something with isUserSignedIn, like updating state in your application
  }, []);

  // Conditionally render Header or HeaderS based on the IsSignedIn value
  const isUserSignedIn = localStorage.getItem('IsSignedIn') === 'true';

  return (
    <div className="App">
      {isUserSignedIn ? <HeaderS /> : <Header />}
      <div className='pages'>
        <Routes>
          <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/CreatePost" element={<CreatePost />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/About" element={<About />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />
          )
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;
