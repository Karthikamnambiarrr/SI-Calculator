
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Calculate from './Components/Calculate/Calculate'
import Footers from './Components/Footers/Footers'

function App() {
  

  return (
    <>
       <Header/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Calculate' element={<Calculate/>}/>
      </Routes>
      <Footers/>
       
    </>
  )
}

export default App
