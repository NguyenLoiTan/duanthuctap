import React from 'react';
import MenuThi from './MenuThi';
import LamBaiThi from './LamBaiThi';
import CauHoi from "./CauHoi";
import Footer from '../../components/Footer';

const TrangHocTap = () => {
    return ( 
        <div style={{ backgroundColor: 'rgba(241, 243, 245, 1)', width: '100%', height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <MenuThi/>
            <LamBaiThi/>
            <CauHoi/>
            <Footer/>
        </div>
     );
}
 
export default TrangHocTap;