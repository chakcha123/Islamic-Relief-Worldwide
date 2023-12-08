import React from 'react'
import '../../styles/cont.css'
import vbox from '../../assets/logos/vbox.PNG'

const Abtusp2 = () => {
  return (
    <div >

            <p className='pc'> <img src={vbox} className='VBOX2'/>Contact Us</p>
            <h1>Request A Call Back !</h1>

        <div className='abt2-m'>
            <div className='inp1'>
                <input type='text' placeholder='Your Name'/>
                <input type='text' placeholder='Email Address'/>
            </div>
            
            <div className='inp2'>
                <input type='text' placeholder='Phone Number'/>
                <input type='text' placeholder='Subject'/>
            </div>
                <textarea placeholder='Message...' className='msg-box'/>
        </div>

    </div>
  )
}

export default Abtusp2