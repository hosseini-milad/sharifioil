import { normalPrice } from "../../env";

function CartMainPart(props){
    const cart= props.cart;
    return(<>
        <div className="cartTable">
            <table>
            <tbody>
                <tr className="cartTableHeader">
                    <th className="cartMainTH">جزئیات محصول</th>
                    <th className="cartAltTH mobileHide">قیمت</th>
                    <th className="cartAltTH mobileHide">تعداد</th>
                    <th className="cartAltTH mobileHide">مجموع</th>
                    <th className="cartAltTH"> </th>
                </tr>
                    {cart&&cart.cart.contents.nodes.map(cartItem=>(
                        <tr key={cartItem.key}>
                         <td>
                            <div className="inner-wrap">
                                <img alt={cartItem.product.node.name} title={cartItem.product.node.name} 
                                    src={cartItem.product.node.image.sourceUrl} 
                                    srcSet={cartItem.product.node.image.srcSet} 
                                    sizes={cartItem.product.node.image.sizes} />
                                <div className="item-minicart">
                                    <a href={"/product/"+cartItem.product.node.sku} 
                                    className="item-minicart-name">{cartItem.product.node.name}</a>
                                    <small>کد محصول: {cartItem.product.node.sku}</small>
                                    <div className="cartPrice">
                                        <span className="cartQty">تعداد :{cartItem.quantity}</span>
                                        <span className="base-price">{normalPrice(cartItem.total)}<sub className="base-Toman">تومان</sub></span>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td className="mobileHide">{normalPrice(cartItem.subtotal)}<sub className="base-Toman">تومان</sub></td>
                        <td className="mobileHide">{cartItem.quantity}</td>
                        <td className="mobileHide">{normalPrice(cartItem.total)}<sub className="base-Toman">تومان</sub></td>
                        <td><i className="icon-size fas fa-close"></i></td>
                    </tr>
                        ))}
                </tbody>
                </table>
        </div>
        <div className="shopCartBtn">
            <a className="btn-secondary" href="/c/products/1">
                ادامه خرید</a>
            <a href="/cart/removeAll" className="link_amsoil-large">
                خالی کردن سبد خرید</a>
            <a href="/checkout" className="modal-sub-btn cartCheckOut">نهایی کردن سفارش</a>
       </div>
        </>
    )
}
export default CartMainPart