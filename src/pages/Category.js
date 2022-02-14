import { useState } from "react"
import FetchGraph from "../components/fetchGraph"
import { PRODUCT_LIST_QUERY } from "../components/Query"
import BreadCrumb from "../modules/allPages/BreadCrumb"
import FilterPart from "../modules/CategoryPage/filterPart"
import ProductList from "../modules/CategoryPage/ProductList"
import SideBar from "../modules/CategoryPage/SideBar"
import MetaTags from 'react-meta-tags';

function Category(){
    const productList = FetchGraph(PRODUCT_LIST_QUERY);
    return(<>
        <MetaTags>
            <title>روغن شریفی|لیست محصولات</title>
            <meta name="description" content="فروشگاه تخصصی انواع روغن خودرو" />
            <meta property="og:title" content="شریفی روغن" />
            <meta property="og:image" content="path/to/image.jpg" />
          </MetaTags>
        <div className="landingCat">
            <div className="landingText">
                <h1> روغن موتور </h1>
                <a href="#reviews" aria-label="View customer reviews">
                    <div className="p-review-stars">
                        <span className="p-review-stars__star-icon">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                        </span>
                        <span>
                        4.9 نمره <span className="show-for-medium">بر اساس</span> <span className="hide-for-medium">(</span>1,135 نظرات<span className="hide-for-medium">)</span>
                        </span>

                    </div>
                </a>
                <sub> روغن موتور فروشگاه بر اساس اندازه پروژه شما مرتب شده‌اند.</sub>
                <small>از لغزنده ها و فیلترهای زیر برای یافتن اندازه روغن موتور مناسب برای برنامه خود استفاده کنید.</small>
            </div>
        </div>
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