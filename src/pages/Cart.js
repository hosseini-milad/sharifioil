import CartMenu from "../modules/allPages/header/CartMenu"
import MetaTags from 'react-meta-tags';
import BreadCrumb from "../modules/allPages/BreadCrumb";
import CartMainPart from "../modules/CartPage/cartMainPart";
import CartSidePart from "../modules/CartPage/cartSidePart";
function Cart(){
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
                    <CartMainPart />
                </div>
                <div className="cartSide">
                    <CartSidePart />
                </div>
          </div>
    </main>)
}
export default Cart