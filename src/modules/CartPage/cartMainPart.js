function CartMainPart(){
    return(<>
        <div className="cartTable">
            <table>
                <tr className="cartTableHeader">
                    <th className="cartMainTH">جزئیات محصول</th>
                    <th className="cartAltTH mobileHide">قیمت</th>
                    <th className="cartAltTH mobileHide">تعداد</th>
                    <th className="cartAltTH mobileHide">مجموع</th>
                    <th className="cartAltTH"> </th>
                </tr>
                <tr>
                    <td>
                    <div className="inner-wrap">
                        <img alt="Synthetic 0W20 SS Motor Oil" title="Synthetic 0W20 SS Motor Oil" src="https://roghankala.com/28-large_default/%D8%B1%D9%88%D8%BA%D9%86-%D9%85%D9%88%D8%AA%D9%88%D8%B1-%D9%BE%D8%A7%D8%B1%D8%B3-%D8%B3%D9%88%D9%BE%D8%B1-%D9%BE%D8%A7%DB%8C%D8%A7-10w40-%DA%86%D9%87%D8%A7%D8%B1-%D9%84%D9%8A%D8%AA%D8%B1%D9%8A.jpg" />
                        <div className="item-minicart">
                            <span className="item-minicart-name">بهران اتوماتیک cvt</span>
                            <small>کد محصول: ASMQT-EA</small>
                            <div className="cartPrice">
                                <span className="cartQty">تعداد :2</span>
                                <span className="base-price">$14.79</span>
                            </div>
                        </div>
                    </div>
                    </td>
                    <td className="mobileHide">250.000 تومان</td>
                    <td className="mobileHide">2</td>
                    <td className="mobileHide">500.000 تومان</td>
                    <td><i className="icon-size fas fa-close"></i></td>
                </tr>
                <tr>
                    <td>
                    <div className="inner-wrap">
                        <img alt="Synthetic 0W20 SS Motor Oil" title="Synthetic 0W20 SS Motor Oil" src="https://roghankala.com/28-large_default/%D8%B1%D9%88%D8%BA%D9%86-%D9%85%D9%88%D8%AA%D9%88%D8%B1-%D9%BE%D8%A7%D8%B1%D8%B3-%D8%B3%D9%88%D9%BE%D8%B1-%D9%BE%D8%A7%DB%8C%D8%A7-10w40-%DA%86%D9%87%D8%A7%D8%B1-%D9%84%D9%8A%D8%AA%D8%B1%D9%8A.jpg" />
                        <div className="item-minicart">
                            <span className="item-minicart-name">بهران اتوماتیک cvt</span>
                            <small>کد محصول: ASMQT-EA</small>
                            <div className="cartPrice">
                                <span className="cartQty">تعداد :2</span>
                                <span className="base-price">$14.79</span>
                            </div>
                        </div>
                    </div>
                    </td>
                    <td className="mobileHide">250.000 تومان</td>
                    <td className="mobileHide">2</td>
                    <td className="mobileHide">500.000 تومان</td>
                    <td><i className="icon-size fas fa-close"></i></td>
                </tr><tr>
                    <td>
                    <div className="inner-wrap">
                        <img alt="Synthetic 0W20 SS Motor Oil" title="Synthetic 0W20 SS Motor Oil" src="https://roghankala.com/28-large_default/%D8%B1%D9%88%D8%BA%D9%86-%D9%85%D9%88%D8%AA%D9%88%D8%B1-%D9%BE%D8%A7%D8%B1%D8%B3-%D8%B3%D9%88%D9%BE%D8%B1-%D9%BE%D8%A7%DB%8C%D8%A7-10w40-%DA%86%D9%87%D8%A7%D8%B1-%D9%84%D9%8A%D8%AA%D8%B1%D9%8A.jpg" />
                        <div className="item-minicart">
                            <span className="item-minicart-name">بهران اتوماتیک cvt</span>
                            <small>کد محصول: ASMQT-EA</small>
                            <div className="cartPrice">
                                <span className="cartQty">تعداد :2</span>
                                <span className="base-price">$14.79</span>
                            </div>
                        </div>
                    </div>
                    </td>
                    <td className="mobileHide">250.000 تومان</td>
                    <td className="mobileHide">2</td>
                    <td className="mobileHide">500.000 تومان</td>
                    <td><i className="icon-size fas fa-close"></i></td>
                </tr>
                </table>
        </div>
        <div className="shopCartBtn">
            <a className="btn-secondary" href="/c/products/1">
                ادامه خرید</a>
            <a href="/cart/removeAll" className="link_amsoil-large">
                خالی کردن سبد خرید</a>
            <a className="modal-sub-btn cartCheckOut">نهایی کردن سفارش</a>
       </div>
        </>
    )
}
export default CartMainPart