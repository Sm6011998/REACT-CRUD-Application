import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Common/Navbar'
import AdduserData from './Components/AdduserData'
import ShowUserData from './Components/ShowUserData'
import EditUser from './Components/EditUser'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';




const App = () => {
  return (
    <>
    <ToastContainer/>
    <Router>
    <ToastContainer/>
      <Navbar/>
      <Routes>
        <Route path='/adduserdata' element={<AdduserData/>}/>
         <Route path='/showuserdata' element={<ShowUserData/>}/>
        <Route path='/edituser/:id' element={<EditUser/>}/> 
      </Routes>
    </Router>
    
    </>
  )
}

export default App