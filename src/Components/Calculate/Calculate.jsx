import React, { useState } from 'react'

function Calculate() {
  
  const[amount,setamount] = useState('');
  const[rate,setrate] = useState('');
  const[year,setyear] = useState('');
  const[interest,setinterest] = useState(0);
  //function to calculate interest
  const calculateInterest=()=>{
    let output = amount*rate*year/100;
    console.log(output);
    setinterest(output);

  }
  //function to reset
  const resetNow=()=>{
    setamount('');
    setrate('');
    setyear('');
    setinterest(0);
  }
  
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'black'}}>
        <div style={{height:'500px',width:'800px',backgroundColor:'#BAFFC9',margin:'20px'}}>
            <h3 className='text-center mt-2' style={{}}>SI Calculator</h3>
            <p style={{textAlign:'center'}}>Calculate your SI with us!!</p>
            <div style={{width:'400px',height:'100px',backgroundColor:'white',marginLeft:'200px',padding:'10px'}}>
             <h3 className='text-black text-center'>Rs{interest}</h3>
            <p className='text-black text-center'>Your total interest</p>
            </div>
            <input onChange={(e)=>setamount(e.target.value)} value={amount} type="text" style={{height:'40px',width:'400px',marginTop:'10px',marginLeft:'200px',backgroundColor:'#BAFFC9',fontSize:'15px'}} placeholder='Amount' />
            <input onChange={(e)=>setyear(e.target.value)} value={year} type="text" style={{height:'40px',width:'400px',marginTop:'10px',marginLeft:'200px',backgroundColor:'#BAFFC9',fontSize:'15px'}} placeholder='Year' />
            <input onChange={(e)=>setrate(e.target.value)} value={rate} type="text" style={{height:'40px',width:'400px',marginTop:'10px',marginLeft:'200px',backgroundColor:'#BAFFC9',fontSize:'15px'}} placeholder='Interest' />
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',margin:'20px'}}>
            <button style={{height:'30px', width:'100px',fontSize:'15px',margin:'10px'}} onClick={calculateInterest}>Calculate</button>
            <button style={{height:'30px', width:'100px',fontSize:'15px',margin:'10px'}} onClick={resetNow}>Reset</button>
            </div>
        </div>
    </div>
  )
}

export default Calculate