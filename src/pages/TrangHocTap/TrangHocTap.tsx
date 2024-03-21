import React from 'react';
import MenuThi from './MenuThi';
import LamBaiThi from './LamBaiThi';
import Footer from '../../components/Footer';
import ExercisePage from './ExercisePage';

const TrangHocTap = () => {
    return ( 
        <div style={{ backgroundColor: 'rgba(241, 243, 245, 1)', width: '100%', height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <MenuThi/>
            <LamBaiThi/>
            <ExercisePage/>
            <Footer/>
        </div>
     );
}
 
export default TrangHocTap;