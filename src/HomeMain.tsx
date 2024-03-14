import React from 'react';
import "./App.css";
import MenuSV from './components/MenuSV';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';

import { Route, Routes } from 'react-router-dom';
import Test from './pages/Test';
import ABC from './pages/ABC';
import CardGroups from './components/CardGroup';



const DefaultMain = () => {
    return ( 
        <>
        <MenuSV/>

<SearchBar/>
<CardGroups/>
<Routes>
    <Route path='/test' element={<Test/>}></Route>
    <Route path='/ABC' element={<ABC/>}></Route>
    
</Routes>

<Footer/>
        </>
            
        
     );
}
 
export default DefaultMain;