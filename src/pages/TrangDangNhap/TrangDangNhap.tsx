import Login from "./Login";
import MenuLogin from "./MenuLogin";

const TrangDangNhap = () => {
    return ( 
        <div style={{ backgroundColor: 'rgba(241, 243, 245, 1)', width: '100%', height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <MenuLogin/>
            <Login/>
        </div>
     );
}
 
export default TrangDangNhap;