import CartMenu from "../modules/allPages/header/CartMenu"
import MetaTags from 'react-meta-tags';
import BreadCrumb from "../modules/allPages/BreadCrumb";
import CartMainPart from "../modules/CartPage/cartMainPart";
import CartSidePart from "../modules/CartPage/cartSidePart";

import FetchGraph from "../components/fetchGraph"
import { TOTAL_CART } from "../components/Query"

function Cart(){
    const cart= FetchGraph(TOTAL_CART);
    return(
    <main>
        <MetaTags>
            <title>روغن شریفی | سبد خرید</title>
            <meta name="description" content="فروشگاه تخصصی انواع روغن خودرو" />
            <meta property="og:title" content="شریفی روغن" />
            <meta property="og:image" content="path/to/image.jpg" />
          </MetaTags>
          <BreadCrumb pName={"  سبد خرید"}/>
          <h1 className="shoppingCartHeading">سبد خرید</h1>
          <div className="items-total"> مجموع اقلام سبد: 2</div>
          <div className="cartHandler">
                <div className="cartMain">
                    <CartMainPart cart={cart}/>
                </div>
                <div className="cartSide">
                    <CartSidePart cart={cart}/>
                </div>
          </div>
    </main>)
}
export default Cart