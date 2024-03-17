import MenuSV from "../../components/MenuSV";
import RegisterPageSV from "./RegisterPageSV";
import Footer from '../../components/Footer';

const TrangDangKySV = () => {
    return ( 
        <div style={{ backgroundColor: 'rgba(241, 243, 245, 1)', width: '100%', height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <MenuSV/>
            <RegisterPageSV/>
            <Footer/>
        </div>
     );
}
 
export default TrangDangKySV;