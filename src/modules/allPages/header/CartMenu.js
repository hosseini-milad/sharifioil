import FetchGraph from "../../../components/fetchGraph"
import simpleFetch from "../../../components/simpleFetch"
import env, {siteApi, normalPrice } from "../../../env";

function CartMenu(props){ 
    const cart = simpleFetch(siteApi+env.cartDetailApi);
    console.log(cart)
    return(
        <div className="minicartData">
            <div className="item-cart-quantity">
            <strong> {cart&&1} محصول </strong>
            در سبد خرید شماست</div>

<div className="mini-cart-table">
    {cart.cart&&cart.cart.contents.nodes.map(cartItem=>(
        <div className="productListHover" key={cartItem.key}>
        <div className="inner-wrap">
                <img alt={cartItem.product.node.name} title={cartItem.product.node.name} 
                src={cartItem.product.node.image.sourceUrl} 
                srcSet={cartItem.product.node.image.srcSet} 
                sizes={cartItem.product.node.image.sizes} />

            <div className="item-minicart">
                <a href={"/product/"+cartItem.product.node.sku} className="item-minicart-name">
                {cartItem.product.node.name}</a>
                <small>کد محصول: {cartItem.product.node.sku}</small>
                <div className="cartPrice"><span className="cartQty">تعداد :{cartItem.quantity}</span>
                <span className="base-price">{normalPrice(cartItem.total)}<sub className="base-Toman">تومان</sub></span></div>
            </div>
            <i className="icon-size fas fa-close"></i>
        </div>
    </div>
    ))}
    
</div>
<div className="cartpopup">
        جمع سبد خرید:<b> {normalPrice(25000)}
                <sub className="base-Toman">تومان</sub></b>
        <a href="/cart" className="modal-sub-btn">
            مشاهده سبد خرید</a>
    </div>



</div>)
}
export default CartMenu