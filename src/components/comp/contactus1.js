// import React from 'react'
// import img from '../../assets/items/cnt.jpg'
// import phone from '../../assets/logos/phoneb.png' 
// import local from '../../assets/logos/localb.png'
// import msg from '../../assets/logos/mailb.png'
// import vbox from '../../assets/logos/vbox.PNG'
// import '../../styles/cont.css'

// const Abtusp1 = () => {
//   return (
//     <div className='abt1-m'>
        
//         <img src={img} className='l-img'/>
//         <div className='righte-side'>
//             <p> <img src={vbox} className='VBOX3'/>Let’s Talk</p>
//             <h2>Get in touch with us</h2>
//             <p>Lorem ipsum dolor sit amet,
//                  consectetur adipiscing elit. 
//                  Phasellus vehicula dui at ex laoreet,
//                   id dictum velit tristique</p>
                  
//             <div className='r-info'>
//                 <img src={phone} className='r-img'/>
//                  <div className='info-line'>
//                     <p>Have any question?</p>
//                     <h5>+212 6 369 605 14</h5>
//                  </div>
//             </div>

//             <div className='r-info'>
//                 <img src={local} className='r-img'/>
//                  <div className='info-line'>
//                     <p>Write email</p>
//                     <h5>yidaouti@gmail.com</h5>
//                  </div>
//             </div>

//             <div className='r-info'>
//                 <img src={msg} className='r-img'/>
//                  <div className='info-line'>
//                     <p>Visit anytime</p>
//                     <h5>Morocco ,Guelmim, Tayer block A</h5>
//                  </div>

//             </div>
//         </div>
//     </div>
//   )
// }

// export default Abtusp1


import React from 'react';
import img from '../../assets/items/cnt.jpg';
import phone from '../../assets/logos/phoneb.png';
import local from '../../assets/logos/localb.png';
import msg from '../../assets/logos/mailb.png';
import vbox from '../../assets/logos/vbox.PNG';
import '../../styles/cont.css';

const Abtusp1 = () => {
  return (
    <div className='container mt-5'>
      <div className='row align-items-center justify-content-center'>
        <div className='col-md-6'>
          <img src={img} className='img-fluid' alt='Left Image' />
        </div>
        <div className='col-md-6'>
          <p>
            {' '}
            <img src={vbox} className='VBOX3' alt='VBOX3' />
            Let’s Talk
          </p>
          <h2>Get in touch with us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            vehicula dui at ex laoreet, id dictum velit tristique
          </p>

          <div className='row'>
            <div className='col-md-12'>
              <div className='d-flex align-items-center'>
                <img src={phone} className='r-img' alt='Phone' />
                <div className='info-line'>
                  <p>Have any question?</p>
                  <h5>+212 6 369 605 14</h5>
                </div>
              </div>
            </div>

            <div className='col-md-12'>
              <div className='d-flex align-items-center'>
                <img src={local} className='r-img' alt='Email' />
                <div className='info-line'>
                  <p>Write email</p>
                  <h5>yidaouti@gmail.com</h5>
                </div>
              </div>
            </div>

            <div className='col-md-12'>
              <div className='d-flex align-items-center'>
                <img src={msg} className='r-img' alt='Visit' />
                <div className='info-line'>
                  <p>Visit anytime</p>
                  <h5>Morocco, Guelmim, Tayer block A</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abtusp1;
