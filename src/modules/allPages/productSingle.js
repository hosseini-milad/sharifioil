import { useState } from 'react'
import FetchGraph from '../../components/fetchGraph';
import { TOTAL_CART } from '../../components/Query';
import {normalPrice} from '../../env'
import QuickView from '../../modules/CategoryPage/QuickView'

    const siteWidth = window.innerWidth;
function ProductSingle(props){
    const product = props.product 
    const [showMobileIcon,setMobileIcon] = useState(0);
    return(
        <div className="offer" key={product.databaseId} 
            onMouseOver={()=>setMobileIcon(1)}
            onMouseOut={()=>setMobileIcon(0)}>
					
            <div className="offerImg">
                <img src={product.image.sourceUrl} alt={product.name} />
            </div>
            <div className="offerText">
                <div className="offerTitle">
                    <a href={"/product/"+product.sku}><h4>{product.name}</h4></a>
                    <small> <i>کد محصول:</i> {product.sku}</small>
                    <div className="offerShare">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <sub>(19 دیدگاه)</sub>
                    </div>
                    <div className="mainPrice">
                        <div className="offPriceHolder">
                        <small>250000</small>
                        <b>10%</b></div>
                        {product.price&&<strong>{normalPrice(product.price)} <sub>تومان</sub></strong>}
                        {!product.price&&<strong>تماس بگیرید</strong>}
                        
                    </div>
                    {/*<div className="youSave">
                        <span> تخفیف: <b>50.000</b> تومان</span>
                        <a href="" className="saveButton"><small>شرایط تخفیف</small></a>
    </div>*/}
                </div>
                <div className="offerButton" 
                    style={{display:showMobileIcon||siteWidth>700?"block":"none"}}>
                    <QuickView product={product} cart={props.cart}/>
                </div>
            </div>
        </div>
    )
}
export default ProductSingle