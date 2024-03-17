import MenuTienTrinhHocTap from "./MenuTienTrinhHocTap";
import TienTrinhHocTap from "./TienTrinhHocTap";

const TrangTienTrinhHocTap = () => {
    return ( 
        <div style={{ backgroundColor: 'rgba(241, 243, 245, 1)', width: '100%', height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <MenuTienTrinhHocTap/>
            <TienTrinhHocTap/>
        </div>
     );
}
 
export default TrangTienTrinhHocTap;