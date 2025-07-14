
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'
import Register from './components/Register';
import Home from './components/Home';
import Login from './components/Login';
import Forgot from './components/Forgot';
import OtpForm from './components/OtpForm';
import ResetPassword from './components/ResetPassword';
import RegistrationSuccess from './components/RegistrationSuccess';
import LoginSuccess from './components/LoginSuccess';
import Profile from './components/Profile';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/forgot' element={<Forgot />} />
          <Route path='/otp-form/:email' element={<OtpForm />} />
          <Route path='/reset-password-form' element={<ResetPassword />} />
          <Route path="/success" element={<RegistrationSuccess />} />
           <Route path="/login-success" element={<LoginSuccess />} />
          <Route path='/profile' element={<Profile />} />
          
          





          {/* <Route path='/register' element = {<Register />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
