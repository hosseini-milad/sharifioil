import BreadCrumb from "../modules/allPages/BreadCrumb"
import FetchGraph from "../components/fetchGraph"
import ProductDetail from "../modules/product/ProductDetail"
import ProductMain from "../modules/product/ProductMain"
import { PRODUCT_QUERY } from "../components/Query"
import MetaTags from 'react-meta-tags';

function Product(){
    const sku= (window.location.pathname.split('/')[2]).match(/\d+/)[0];
    const ProductData = FetchGraph(PRODUCT_QUERY(sku)) 
    
    return(
        <>
        <MetaTags>
            <title>روغن شریفی | {ProductData.products&&ProductData.products.nodes[0].name}</title>
            <meta name="description" content="فروشگاه تخصصی انواع روغن خودرو" />
            <meta property="og:title" content="شریفی روغن" />
            <meta property="og:image" content="path/to/image.jpg" />
          </MetaTags>
        {ProductData&&<div><main>
            <BreadCrumb pName={" محصولات / "+ProductData.products.nodes[0].sku}/>
            
            <ProductMain product={ProductData.products.nodes[0]}/>
        </main>
        <ProductDetail product={ProductData.products.nodes[0]}/></div>}
        </>
    )
}
export default Product