import React from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
  import './Header.css'
  

function Header() {
  return (
    <div><MDBNavbar light bgColor='dark'>
    <MDBContainer>
      <MDBNavbarBrand href='#'style={{color:'white'}}>
        <img
          src='https://www.bankrate.com/2023/01/09102018/Loans-How-to-calculate-loan-interest.jpg?auto=webp&optimize=high&crop=16:9'
          height='30'
          alt=''
          loading='lazy'
        />FindSI
      </MDBNavbarBrand>
    </MDBContainer>
  </MDBNavbar></div>
  )
}

export default Header