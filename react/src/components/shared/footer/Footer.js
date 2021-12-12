import React from 'react';
import logo from "../../../images/logo.png";
import "./footer.css"

function Footer() {
    return (
            <>
        <div className='container footer'>
            <div className='row'>
                  <div className='col-xl-4 col-lg-4  footer-sec-1 '>
                    <img src={logo} alt="logo"/>
                    <p>The release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop</p>
                  </div>

                  <div className='col-xl-2 col-lg-2  footer-sec-2 '>
                  
                   <h4>Links</h4>
                   <p>Our Clients</p>
                   <p>Privacy Policy</p>
                   <p>Our Benifits</p>
                  </div>

                  <div className='col-xl-2 col-lg-2  footer-sec-3 '>
                  
                  <h4>Information</h4>
                  <p>Our Clients</p>
                  <p>Privacy Policy</p>
                  <p>Our Benifits</p>
                 </div>

                 <div className='col-xl-4 col-lg-4  footer-sec-4 '>
                  
                  <h4>Contact us</h4>
                  <p>+91 9711999770 , +1833-880-3355</p>
                  <p>info@byteQuests.com</p>
                  <p>84, Block A, Sector 4,Noida,Up,201301</p>
                 </div>
            </div>

            
        </div>

<div className='footer-copyright'>copyright ©2021 ByteQuest Software Private Limited. All Rights Reserved</div>
</>
    )
}

export default Footer
