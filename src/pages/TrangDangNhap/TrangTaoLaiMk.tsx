import MenuLogin from "./MenuLogin";
import RegeneratePassword from "./RegeneratePassword";

const TrangTaoLaiMk = () => {
    return ( 
        <div style={{ backgroundColor: 'rgba(241, 243, 245, 1)', width: '100%', height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <MenuLogin/>
            <RegeneratePassword/>
        </div>
     );
}
 
export default TrangTaoLaiMk;