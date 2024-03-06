import React from 'react';
import "./App.css";
// import MenuSV from './components/MenuSV';
// import SearchBar from './components/SearchBar';
// import Footer from './components/Footer';

// import { Route, Routes } from 'react-router-dom';
// import Test from './pages/Test';
// import ABC from './pages/ABC';
 import Login from './pages/TrangDangNhap/Login';
// import DefaultMain from './HomeMain';
import { Route, Routes } from 'react-router-dom';
import ForgotPassword from './pages/TrangDangNhap/forgotPassword';
import DefaultMain from './HomeMain';

function App() {
  return (
   <div className=''>
      
    
        <Routes>
                <Route path='/' element={<DefaultMain/>}></Route>
                <Route path='/forgotPassword' element={<ForgotPassword/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
        </Routes>
    
   </div>
       
       
      
    
  );
}

export default App;
