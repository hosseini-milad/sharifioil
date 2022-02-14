import Popup from 'reactjs-popup';
import React ,{ useState } from 'react';
import CounterInput from "react-counter-input";
import { normalPrice } from '../../env';


function QuickView(props){
    const productInfo = props.product;
    return(
        <Popup trigger={<div className="buttonHandler"><img src="https://img.icons8.com/material-sharp/24/ffffff/fast-cart.png" /> </div>} modal nested>
            {close => (
            <div className="modal">
                <div className="modal-header"> <img src="https://sharifoilco.com/assets/imgs/header-logo.png"/> </div>
                <div className="modal-content">
                    <div className="modal-product">
                        <div style={{display:"grid"}}>
                            {/*productInfo.image&&<img className="modal-img" src={productInfo.image.sourceUrl} />*/}
                            <h3>{productInfo.name}</h3>
                            <small >{"کد محصول: "+productInfo.sku}</small>
                            <i>{productInfo.productCategories.nodes[0].name}</i>
                            <p class="modal-product-content" dangerouslySetInnerHTML={{__html:productInfo.shortDescription}}></p>
                            </div>
                            <div style={{display:"none"}}>
                        <a className="modal-sub-btn" href="/checkout">مشاهده سبد خرید</a>
                        <a className="modal-sub-btn enterAccount modal-content-button" onClick={close}>جزئیات محصول</a>
                        </div>
                    </div>
                    <div className="pop-xtra-content">
                    <div className="selectPart">
                            <strong className="pricePop">{normalPrice(productInfo.price)+ " تومان "}</strong>
                            <div class="youSave">
                                <small>قیمت عمده: 200.000 تومان</small>
                                <span> تخفیف: <b>50.000</b> تومان</span>
                                <a href="" style={{textAlign: "left"}}><small>شرایط تخفیف</small></a>
                            </div>
                            <div className="mobileFlex"><label>اندازه بسته:</label>
                            <select className="filterSort" >
                                <option>نیم لیتری</option>
                                <option>یک لیتری</option>
                                <option>دو لیتری</option>
                                <option>چهار لیتری</option>
                                <option>ده لیتری</option>
                            </select></div>
                            <div className="mobileFlex">
                                <label>تعداد محصول:</label>
                                <CounterInput
                                    min={1}
                                    max={10}
                                    onCountChange={count => console.log(count)}
                                />
                            </div>
                            <a className="modal-sub-btn" href="/cart">افزودن به سبد خرید</a>
                        </div>
                        
                    </div>
                </div>
            </div>
            )}
        </Popup>
        )
}
export default QuickView;