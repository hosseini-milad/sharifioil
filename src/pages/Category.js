import { useState } from "react"
import FetchGraph from "../components/fetchGraph"
import { PRODUCT_LIST_QUERY } from "../components/Query"
import BreadCrumb from "../modules/allPages/BreadCrumb"
import FilterPart from "../modules/CategoryPage/filterPart"
import ProductList from "../modules/CategoryPage/ProductList"

function Category(){
    const productList = FetchGraph(PRODUCT_LIST_QUERY);
    console.log(productList)
    return(<>
        <div className="landingCat">
            <div className="landingText">
                <h1>برچسب بر اساس سایز</h1>
                <a href="#reviews" aria-label="View customer reviews">
                    <div class="p-review-stars">
                        <span class="p-review-stars__star-icon">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                        </span>
                        <span>
                        4.9 نمره <span class="show-for-medium">بر اساس</span> <span class="hide-for-medium">(</span>1,135 نظرات<span class="hide-for-medium">)</span>
                        </span>

                    </div>
                </a>
                <sub> برچسب‌های فروشگاه بر اساس اندازه پروژه شما مرتب شده‌اند.</sub>
                <small>از لغزنده ها و فیلترهای زیر برای یافتن اندازه برچسب مناسب برای برنامه خود استفاده کنید.</small>
            </div>
        </div>
        <main>
            <BreadCrumb pName=" لیبل در صفحه "/>
            <FilterPart />
            {productList&&<ProductList products={productList.products.nodes}/>}
        </main>
        </>
        )
}
export default Category