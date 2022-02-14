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
                <h1>محصول {product.sku} - {product.name} Labels </h1>
                <strong>Standard Matt White - 21 Per A4 Sheet</strong>
                <div className="starRate">
                    <i className="star-icon fas fa-star"></i>
                    <i className="star-icon fas fa-star"></i>
                    <i className="star-icon fas fa-star"></i>
                    <i className="star-icon fas fa-star"></i>
                    <i className="star-icon fas fa-star"></i>
                    <span>( 5.0 based on 47 reviews ) </span>
                </div>
            </div>
        </div>
        )
}
export default ProductMain