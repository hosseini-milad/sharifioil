import CounterInput from "react-counter-input";
import { normalPrice } from "../../env";

function ProductMainDetail(props){
    const product = props.product;
    return(
        <div className="modal-content">
        <div className="modal-product">
            <div style={{display:"grid"}}>
                {/*productInfo.image&&<img className="modal-img" src={productInfo.image.sourceUrl} />*/}
                <h3>{product.name}</h3>
                <small >{"کد محصول: "+product.sku}</small>
                <i>{product.productCategories.nodes[0].name}</i>
                <p class="modal-product-content" dangerouslySetInnerHTML={{__html:product.shortDescription}}></p>
                </div>
                
        </div>
        <div className="pop-xtra-content">
        <div className="selectPart">
                <strong className="pricePop">{normalPrice(product.price)+ " تومان "}</strong>
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
    )
}
export default ProductMainDetail