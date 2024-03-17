import CardGroups from "./CardGroup";
import Footer from "./Footer";
import MenuDN from "./MenuDN";
import SearchBar from "./SearchBar";

const Home2 = () => {
    return ( 
        <div style={{ backgroundColor: 'rgba(241, 243, 245, 1)', width: '100%', height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <MenuDN/>
            <SearchBar/>
            <CardGroups/>
            <Footer/>
        </div>
     );
}
 
export default Home2;