import BreadCrumb from "../modules/allPages/BreadCrumb"
import MainDesc from "../modules/shopPage/MainDesc"
import ProductList from "../modules/shopPage/ProductList"
import SubCat from "../modules/shopPage/SubCat"

function Shop(){
    return(
        <main>
            <BreadCrumb pName=" فروشگاه "/>
            <MainDesc />
            <SubCat />
            <ProductList />
        </main>
    )
}
export default Shop