import FetchGraph from "../../../components/fetchGraph"
import { TOTAL_CART } from "../../../components/Query"

function CartMenu(props){
    const cart = props.cart;
    return(
        <div className="minicartData">
            <div className="item-cart-quantity">
            <strong> 2 محصول </strong>
            در سبد خرید شماست</div>

<div className="mini-cart-table">
<div className="productListHover">
        <div className="inner-wrap">
                <img alt="Synthetic 0W20 SS Motor Oil" title="Synthetic 0W20 SS Motor Oil" 
                src="https://roghankala.com/28-large_default/%D8%B1%D9%88%D8%BA%D9%86-%D9%85%D9%88%D8%AA%D9%88%D8%B1-%D9%BE%D8%A7%D8%B1%D8%B3-%D8%B3%D9%88%D9%BE%D8%B1-%D9%BE%D8%A7%DB%8C%D8%A7-10w40-%DA%86%D9%87%D8%A7%D8%B1-%D9%84%D9%8A%D8%AA%D8%B1%D9%8A.jpg" />

            <div className="item-minicart">
                <span className="item-minicart-name">
                بهران اتوماتیک cvt</span>
                <small>کد محصول: ASMQT-EA</small>
                <div className="cartPrice"><span className="cartQty">تعداد :2</span>
                <span className="base-price">$14.79</span></div>
            </div>
            <i className="icon-size fas fa-close"></i>
        </div>
    </div>
    <div className="productListHover">
        <div className="inner-wrap">
                <img alt="Synthetic 0W20 SS Motor Oil" title="Synthetic 0W20 SS Motor Oil" 
                src="https://roghankala.com/28-large_default/%D8%B1%D9%88%D8%BA%D9%86-%D9%85%D9%88%D8%AA%D9%88%D8%B1-%D9%BE%D8%A7%D8%B1%D8%B3-%D8%B3%D9%88%D9%BE%D8%B1-%D9%BE%D8%A7%DB%8C%D8%A7-10w40-%DA%86%D9%87%D8%A7%D8%B1-%D9%84%D9%8A%D8%AA%D8%B1%D9%8A.jpg" />

            <div className="item-minicart">
                <span className="item-minicart-name">
                بهران اتوماتیک cvt</span>
                <small>کد محصول: ASMQT-EA</small>
                <div className="cartPrice"><span className="cartQty">تعداد :2</span>
                <span className="base-price">$14.79</span></div>
            </div>
            <i className="icon-size fas fa-close"></i>
        </div>
    </div>
</div>
<div className="cartpopup">
        جمع سبد خرید:<b> 250.000 تومان</b>
        <a href="/cart" className="modal-sub-btn">
            مشاهده سبد خرید</a>
    </div>



</div>)
}
export default CartMenu