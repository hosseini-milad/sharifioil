import { useState } from "react"
import FetchGraph from "../components/fetchGraph"
import { PRODUCT_LIST_QUERY ,CATEGORY_DESC} from "../components/Query"
import BreadCrumb from "../modules/allPages/BreadCrumb"
import FilterPart from "../modules/CategoryPage/filterPart"
import ProductList from "../modules/CategoryPage/ProductList"
import SideBar from "../modules/CategoryPage/SideBar"
import MetaTags from 'react-meta-tags';
import { findAddress } from "../env"

function Category(){
    const catPath= findAddress(document.location.pathname)
    const productList = FetchGraph(PRODUCT_LIST_QUERY(catPath));
    const catDesc = FetchGraph(CATEGORY_DESC(catPath))
    console.log(catDesc)
    return(<>
        <MetaTags>
            <title>روغن شریفی|لیست محصولات</title>
            <meta name="description" content="فروشگاه تخصصی انواع روغن خودرو" />
            <meta property="og:title" content="شریفی روغن" />
            <meta property="og:image" content="path/to/image.jpg" />
          </MetaTags>
          {catDesc&&<div className="landingCat" style={{backgroundImage:`url("${catDesc.catdescs.nodes[0].featuredImage.node.sourceUrl}")`}}>
            <div className="landingText">
                <h1> {catDesc.catdescs.nodes[0].title} </h1>
                <a href="#reviews" aria-label="View customer reviews">
                    
                </a>
                <p dangerouslySetInnerHTML={{__html: catDesc.catdescs.nodes[0].content}} ></p>
                
            </div>
        </div>}
        <main>
            <BreadCrumb pName=" محصولات / روغن موتور  "/>
            <FilterPart />
            <div className="categoryHolder">
                <div className="categorySide"><SideBar/></div>
                <div className="categoryMain">
                    {productList&&<ProductList products={productList.products.nodes}/>}</div>
            </div>
        </main>
        </>
        )
}
export default Category