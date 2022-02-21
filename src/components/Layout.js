import FetchGraph from './fetchGraph';
import Footer from './Footer'
import Header from './Header'
import { AppProvider } from './AppContext';
import { TOTAL_CART } from './Query';
var fetchStep = 0;
function Layout(props){
    
    const cart = FetchGraph(TOTAL_CART);
    
    console.log(cart)
    return(
        <AppProvider>
            {cart&&<Header cart={cart}/>}
            {props.children}
            <Footer />
        </AppProvider>
    )
}
export default Layout