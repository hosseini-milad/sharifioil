import { useState } from "react"
import PriceSelectPop from "./PriceSelectPop";

const { default: ProductSelectPop } = require("./ProductSelectPop")

function ProductMain(props){
    const [pop1,setPop1] = useState("none");
    const [pop2,setPop2] = useState("none");
    
    const product = props.product;
    const handleDataField=()=>{
        setPop2("none");
        pop1==="none"?setPop1("block"):setPop1("none")
    }
    const handlePriceField=()=>{
        setPop1("none");
        pop2==="none"?setPop2("block"):setPop2("none")
    }
    return(
        <div className="productMainHolder">
            <div className="productSData">
              <div className="productImg">
                <div className="galleryImg">
                    <img src="https://images.uk.onlinelabels.com/images/Products/EU30015/EU30015wx.png" />
                    <img src="https://images.uk.onlinelabels.com/images/Products/EU30015/EU30015wx.png" />
                    <img src="https://images.uk.onlinelabels.com/images/Products/EU30015/EU30015wx.png" />
                    <img src="https://images.uk.onlinelabels.com/images/Products/EU30015/EU30015wx.png" />
                </div>
                <div className="mainImg">
                    <img src={product.image.sourceUrl} />
                    <img className="imgSize" src="https://images.uk.onlinelabels.com/images/productPage/a4-dimensions-metric.svg" />
                </div>
               </div> 
              <div className="productSpec">
                  <strong>مشخصات محصول برای {product.sku} <a>(مشخصات)</a> </strong>
                  <p dangerouslySetInnerHTML={{__html:product.shortDescription}}></p>
                    
                  <button className="productBtn">مشاهده الگوها برای {product.sku} <i className="fas fa-copy"></i></button>
                  <div className="twoCol">
                    <button className="productBtn">مقایسه جنس و قیمت</button>
                    <button className="productBtn">دستورالعمل چاپ</button>
                  </div>
              </div>
            </div>
            <div className="productMainDetail">
                <div className="mainDetail">
                    <div className="mainTitle">
                        <h3>
                            <span className="stepNumber">1</span>
                            انتخاب جنس برچسب:</h3>
                        <a href="">راهنمایی پیدا کردن جنس؟</a>
                    </div>
                    <div className="mainDataField" onClick={handleDataField}>
                        <div className="swatchIcon"></div>
                        <div className="fieldName">
                            <strong>سفید استاندارد مت</strong>
                            <small>(برای چاپگرهای لیزر و جوهرافشان)</small>
                        </div>
                        <a href="">جزئیات</a>
                        <i className="fas fa-chevron-down"></i>
                        
                        <div className="mainSelectPop" style={{display:pop1}} onClick={handleDataField}>
                            <ProductSelectPop />
                        </div>
                    </div>
                    <div className="mainTitle">
                        <h3>
                            <span className="stepNumber">2</span>
                            انتخاب تعداد برچسب:</h3>
                            <select name="vat" id="vats">
                                <option value="vatIn">قیمت با مالیات (20%)</option>
                                <option value="vatEx">قیمت بدون مالیات</option>
                            </select>
                    </div>
                    <div className="mainDataField" onClick={handlePriceField}>
                        <div className="fieldName">
                            <strong>100 صفحه /2.100 برچسب</strong>
                            <small>(200 تومان / صفحه)</small>
                        </div>
                        <span className="priceFieldProduct">15000 تومان</span>
                        <i className="fas fa-chevron-down"></i>
                        <div className="mainSelectPop" style={{display:pop2}} onClick={handleDataField}>
                            <PriceSelectPop />
                        </div>
                    </div>
                    <div className="stock">
                        <strong>موجود در انبار</strong>
                        <span>در صورت ارسال قبل از ساعت 16:00 در همان روز ارسال می شود</span>
                    </div>
                    <a className="addToCartButton"><i className="fas fa-shopping-cart"></i>
                        افزودن به سبد خرید
                    </a>
                </div>
            </div>
        </div>
        )
}
export default ProductMain