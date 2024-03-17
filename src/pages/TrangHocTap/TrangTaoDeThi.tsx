import MenuThi from "./MenuThi";
import TaoDeThi from "./TaoDeThi";

const TrangTaoDeThi = () => {
    return ( 
        <div style={{ backgroundColor: 'rgba(241, 243, 245, 1)', width: '100%', height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <MenuThi />
            <TaoDeThi />
        </div>
     );
}
 
export default TrangTaoDeThi;
