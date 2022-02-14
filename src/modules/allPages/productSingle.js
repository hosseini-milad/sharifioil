import {normalPrice} from '../../env'
import QuickView from '../../modules/CategoryPage/QuickView'

function ProductSingle(props){
    const product = props.product
    return(
        <div className="offer" key={product.databaseId}>
					
            <div className="offerImg">
                <img src={product.image.sourceUrl} alt={product.name} />
            </div>
            <div className="offerText">
                <div className="offerTitle">
                    <a href={"/product/"+product.sku}><h4>{product.name}</h4></a>
                    <small> کد محصول: {product.sku}</small>
                    <div className="offerShare">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <sub>(19 دیدگاه)</sub>
                    </div>
                    <small><i className="fas fa-price"></i> قیمت: </small>
                    {product.price&&<strong>{normalPrice(product.price)} تومان</strong>}
                    {!product.price&&<strong>تماس بگیرید</strong>}
                    <div className="youSave">
                        <small>قیمت عمده: 200.000 تومان</small>
                        <span> تخفیف: <b>50.000</b> تومان</span>
                        <a href="" style={{textAlign: "left"}}><small>شرایط تخفیف</small></a>
                    </div>
                </div>
                <div className="offerButton">
                    <QuickView product={product} />
                </div>
            </div>
        </div>
    )
}
export default ProductSingle