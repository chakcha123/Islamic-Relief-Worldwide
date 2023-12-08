import React from 'react'
import Banner from './comp/banner'
import banner from '../assets/banners/contact us.PNG'
import Contactus1 from './comp/contactus1.js';
import Contactus2 from './comp/contactus2.js';

const Contact = () => {
  return (
    <div>
         <Banner name='Contact Us' 
      title='Feel Free to Reach Us' 
      text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.
       Phasellus vehicula dui at ex laoreet, id dictum velit tristique' 
      cover={banner} />
        {/* <img src={banner} className="banner"/> */}
        <Contactus1/>
        <Contactus2/>
    </div>
  )
}

export default Contact