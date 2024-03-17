import CardGroups from "./CardGroup";
import Footer from "./Footer";
import MenuSV from "./MenuSV";
import SearchBar from "./SearchBar";

const Home = () => {
    return ( 
        <div style={{ backgroundColor: 'rgba(241, 243, 245, 1)', width: '100%', height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <MenuSV/>
            <SearchBar/>
            <CardGroups/>
            <Footer/>
        </div>
     );
}
 
export default Home;