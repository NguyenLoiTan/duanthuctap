import MenuLogin from "./MenuLogin";
import ForgotPassword from "./forgotPassword";

const TrangQuenMk = () => {
    return ( 
        <div style={{ backgroundColor: 'rgba(241, 243, 245, 1)', width: '100%', height: '100vh', display: 'flex', flexDirection: 'column' }}> 
            <MenuLogin/>
            <ForgotPassword/>
        </div>
     );
}
 
export default TrangQuenMk;