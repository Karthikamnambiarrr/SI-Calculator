import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'black'}}>
        <div id='main'>
            <h2 style={{marginTop:'50px',textAlign:'center',color:'hsl(210deg 100% 44%)'}}>What is Simple Interest,A = P (1+rt)</h2>
            <p>The rate at which you borrow or lend money is called the simple interest. If a borrower takes money from a lender, an extra amount of money is paid back to the lender. The borrowed money which is given for a specific period is called the principal. The extra amount which is paid back to the lender for using the money is called the interest.
            You calculate the simple interest by multiplying the principal amount by the number of periods and the interest rate. Simple interest does not compound, and you don’t have to pay interest on interest. In simple interest, the payment applies to the month’s interest, and the remainder of the payment will reduce the principal amount.</p>
            <Link to={'/Calculate'}><button style={{marginLeft:'400px'}}>Calculate</button></Link>
        </div>
    </div>
  )
}

export default Home