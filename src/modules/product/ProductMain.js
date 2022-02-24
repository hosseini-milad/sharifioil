import { useState } from "react"
import PriceSelectPop from "./PriceSelectPop";
import ProductMainDetail from "./ProductMainDetail";

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
                    <img src={product.image.sourceUrl} />
                    <img src={product.image.sourceUrl} />
                    <img src={product.image.sourceUrl} />
                    <img src={product.image.sourceUrl} />
                </div>
                <div className="mainImg">
                    <img src={product.image.sourceUrl} />
                    
                </div>
               </div> 
              <div className="productSpec">
                  {/*<strong>مشخصات محصول برای {product.sku} <a>(مشخصات)</a> </strong>
                  <p dangerouslySetInnerHTML={{__html:product.shortDescription}}></p>
                    
                  <button className="productBtn">مشاهده الگوها برای {product.sku} <i className="fas fa-copy"></i></button>
                  <div className="twoCol">
                    <button className="productBtn">مقایسه جنس و قیمت</button>
                    <button className="productBtn">دستورالعمل چاپ</button>
    </div>*/}
              </div>
            </div>
            <div className="productMainDetail">
                <ProductMainDetail product={product}/>
            </div>
        </div>
        )
}
export default ProductMain