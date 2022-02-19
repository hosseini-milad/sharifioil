import Popup from 'reactjs-popup';
import React ,{ useState } from 'react';
import CounterInput from "react-counter-input";
import { normalPrice } from '../../env';
import ProductMainDetail from '../product/ProductMainDetail';


function QuickView(props){
    const productInfo = props.product;
    return(
        <Popup trigger={<div className="buttonHandler"><img src="https://img.icons8.com/material-sharp/24/ffffff/fast-cart.png" /> </div>} modal nested>
            {close => (
            <div className="modal">
                <div className="modal-header"> <img src="https://sharifoilco.com/assets/imgs/header-logo.png"/> </div>
                <ProductMainDetail product={productInfo} />
                
                <a href={"/product/"+productInfo.sku} className="modal-product-detail" >جزئیات کامل محصول 
                <i className="fas fa-angle-left"></i></a>
            </div>
            )}
        </Popup>
        )
}
export default QuickView;