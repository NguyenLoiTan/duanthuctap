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
import DefaultMain from './HomeMain';
import MenuTienTrinhHocTap from './pages/TrangHocTap/MenuTienTrinhHocTap';
import TrangDangNhap from './pages/TrangDangNhap/TrangDangNhap';
import TrangQuenMk from './pages/TrangDangNhap/TrangQuenMk';
import TrangTaoLaiMk from './pages/TrangDangNhap/TrangTaoLaiMk';
import TrangDangKyDN from './pages/TrangDangKy/TrangDangKyDN';
import TrangDangKySV from './pages/TrangDangKy/TrangDangKySV';
import TaoDeThi from './pages/TrangHocTap/TaoDeThi';

function App() {
  return (
        <Routes>
                <Route path='/' element={<DefaultMain/>}></Route>
                <Route path='/forgotPassword' element={<TrangQuenMk/>}></Route>
                <Route path='/login' element={<TrangDangNhap/>}></Route>
                <Route path='/RegeneratePassword' element={<TrangTaoLaiMk/>}></Route>
                <Route path='/RegisterPageSV' element={<TrangDangKySV/>}></Route>
                <Route path='/RegisterPageDN' element={<TrangDangKyDN/>}></Route>
                <Route path='/MenuTienTrinhHocTap' element={<MenuTienTrinhHocTap/>}></Route>
                <Route path='/TaoDeThi' element={<TaoDeThi/>}></Route>
        </Routes>
  );
}

export default App;
