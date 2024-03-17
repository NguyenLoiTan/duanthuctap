import Footer from "../../components/Footer";
import MenuDN from "../../components/MenuDN";
import RegisterPageDN from "./RegisterPageDN";

const TrangDangKyDN = () => {
    return ( 
        <div style={{ backgroundColor: 'rgba(241, 243, 245, 1)', width: '100%', height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <MenuDN/>
            <RegisterPageDN/>
            <Footer/>
        </div>
     );
}
 
export default TrangDangKyDN;