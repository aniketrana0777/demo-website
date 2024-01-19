import React from 'react'
import '../Compunats/Footer.css'
function Footer() {
  return (
    <div>
    <div className='footer'>
    
          <div className='ff'>
            <form id="form">
              <br></br>
              <br></br>
              <h3>Newsletter</h3>
              <br></br>
              <br></br>
              <p>Join my monthly newsletter with tips and free content, no spam promise ;</p>
              <br></br>
              <br></br>
              <label>Email address </label>
              <br></br>
              <input type="email" placeholder=" Enter Email address" />
              <br></br>
              <br></br>
              <center>
                <button id="button">Subscribe</button>
              </center>
              <br></br>
            </form>
            <div className='text3'>
                <br></br>
                <br></br>
                <br></br>
                <h3 className='ul'>Pages</h3>
                <ul className='ul'>
                    <li>Resources</li>
                    <li>Resources</li>
                    <li>Resources</li>
                    <li>Resources</li>
                    <li>Resources</li>
                </ul>
            </div>
            <div className='text4'>
                <h3 className='li'>Resources</h3>
                <ul className='li'>
                <li>Resources</li>
                <li>Resources</li>
                <li>Resources</li>
                <li>Resources</li>
                <li>Resources</li>
                </ul>
            </div>
            <div className='mayuri'>
                <img src='https://thelogocompany.net/wp-content/uploads/2023/05/tlc-icon.jpg' alt='' id='logo'/>
                <h2>Mayuri</h2>
                <ul id='facebook'> 
                    <li><img src='https://cdn-icons-png.flaticon.com/128/13480/13480297.png' alt='' height={14} width={18}/></li>
                    
                    <li><img src='https://cdn-icons-png.flaticon.com/128/3670/3670151.png' alt='' height={14} width={18}/></li>
                    
                    <li><img src='https://cdn-icons-png.flaticon.com/128/145/145807.png' alt='' height={14} width={18}/></li>
                    
                    <li><img src='https://cdn-icons-png.flaticon.com/128/4138/4138124.png' alt='' height={14} width={18}/></li>
                </ul>
            </div>
            
          </div>
         
                <p id='last'>© 2023 All rights reserved Mayuri Sharma</p>
            
        </div>
    </div>
   
  )
}

export default Footer
