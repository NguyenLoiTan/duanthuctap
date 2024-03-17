import React from 'react';
import "./App.css";
// import MenuSV from './components/MenuSV';
// import SearchBar from './components/SearchBar';
// import Footer from './components/Footer';

// import { Route, Routes } from 'react-router-dom';
// import Test from './pages/Test';
// import ABC from './pages/ABC';
// import DefaultMain from './HomeMain';
import { Route, Routes } from 'react-router-dom';
import TrangDangNhap from './pages/TrangDangNhap/TrangDangNhap';
import TrangQuenMk from './pages/TrangDangNhap/TrangQuenMk';
import TrangTaoLaiMk from './pages/TrangDangNhap/TrangTaoLaiMk';
import TrangDangKyDN from './pages/TrangDangKy/TrangDangKyDN';
import TrangDangKySV from './pages/TrangDangKy/TrangDangKySV';
import TrangHocTap from './pages/TrangHocTap/TrangHocTap';
import TrangTaoDeThi from './pages/TrangHocTap/TrangTaoDeThi';
import TrangTienTrinhHocTap from './pages/TrangHocTap/TrangTienTrinhHocTap';
import Home from './components/Home';
import Home2 from './components/Home2';

function App() {
  return (
        <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/JD' element={<Home2/>}/>

                <Route path='/forgotPassword' element={<TrangQuenMk/>}></Route>
                <Route path='/login' element={<TrangDangNhap/>}></Route>
                <Route path='/RegeneratePassword' element={<TrangTaoLaiMk/>}></Route>

                <Route path='/TrangDangKySV' element={<TrangDangKySV/>}></Route>
                <Route path='/TrangDangKyDN' element={<TrangDangKyDN/>}></Route>

                <Route path='/TrangTienTrinhHocTap' element={<TrangTienTrinhHocTap/>}></Route>
                <Route path='/TrangTaoDeThi' element={<TrangTaoDeThi/>}></Route>
                <Route path='/TrangHocTap' element={<TrangHocTap/>}></Route>
        </Routes>
  );
}

export default App;
