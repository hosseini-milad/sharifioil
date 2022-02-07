import BreadCrumb from "../modules/allPages/BreadCrumb"
import FetchGraph from "../components/fetchGraph"
import ProductDetail from "../modules/product/ProductDetail"
import ProductMain from "../modules/product/ProductMain"
import { PRODUCT_QUERY } from "../components/Query"

function Product(){
    const sku= (window.location.pathname.split('/')[2]).match(/\d+/)[0];
    const ProductData = FetchGraph(PRODUCT_QUERY(sku))
    
    return(
        <>
        {ProductData&&<div><main>
            <BreadCrumb pName={" لیبل در صفحه > "+ProductData.products.nodes[0].sku}/>
            <h1>محصول {ProductData.products.nodes[0].sku} - {ProductData.products.nodes[0].name} Labels </h1>
            <strong>Standard Matt White - 21 Per A4 Sheet</strong>
            <div className="starRate">
                <i className="star-icon fas fa-star"></i>
                <i className="star-icon fas fa-star"></i>
                <i className="star-icon fas fa-star"></i>
                <i className="star-icon fas fa-star"></i>
                <i className="star-icon fas fa-star"></i>
                <span>( 5.0 based on 47 reviews ) </span>
            </div>
            <ProductMain product={ProductData.products.nodes[0]}/>
        </main>
        <ProductDetail product={ProductData.products.nodes[0]}/></div>}
        </>
    )
}
export default Product