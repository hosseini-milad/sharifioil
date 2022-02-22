import FetchGraph from "../../../components/fetchGraph"
import { TOTAL_CART } from "../../../components/Query"
import { normalPrice } from "../../../env";

function CartMenu(props){ 
    const cart = props.cart;
    return(
        <div className="minicartData">
            <div className="item-cart-quantity">
            <strong> 2 محصول </strong>
            در سبد خرید شماست</div>

<div className="mini-cart-table">
    {cart.cart.contents.nodes.map(cartItem=>(
        <div className="productListHover" key={cartItem.key}>
        <div className="inner-wrap">
                <img alt={cartItem.product.node.name} title={cartItem.product.node.name} 
                src={cartItem.product.node.image.sourceUrl} 
                srcSet={cartItem.product.node.image.srcSet} 
                sizes={cartItem.product.node.image.sizes} />

            <div className="item-minicart">
                <span className="item-minicart-name">
                {cartItem.product.node.name}</span>
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
        جمع سبد خرید:<b> {normalPrice(cart.cart.total)}
                <sub className="base-Toman">تومان</sub></b>
        <a href="/cart" className="modal-sub-btn">
            مشاهده سبد خرید</a>
    </div>



</div>)
}
export default CartMenu