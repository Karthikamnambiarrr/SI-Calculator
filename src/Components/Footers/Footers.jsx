import React from 'react'
import { MDBFooter } from 'mdb-react-ui-kit';

function Footers() {
  return (
    <div>
        <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <div className='text-center p-3' style={{ backgroundColor: 'grey' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-white' style={{textDecoration:'none'}} href='https://mdbootstrap.com/'>
          
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footers