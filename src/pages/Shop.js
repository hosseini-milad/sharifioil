import BreadCrumb from "../modules/allPages/BreadCrumb"
import MainDesc from "../modules/shopPage/MainDesc"
import CatList from "../modules/shopPage/CatList"
import SideShop from "../modules/shopPage/SideShop"
import MetaTags from 'react-meta-tags'

import { CATEGORIES_QUERY } from "../components/Query";
import FetchGraph from "../components/fetchGraph"

function Shop(){
    const  category = FetchGraph(CATEGORIES_QUERY);
    return(
        <main>
            <MetaTags>
            <title>روغن شریفی| دسته بندی</title>
            <meta name="description" content="فروشگاه تخصصی انواع روغن خودرو" />
            <meta property="og:title" content="شریفی روغن" />
            <meta property="og:image" content="path/to/image.jpg" />
          </MetaTags>
            <BreadCrumb pName=" فروشگاه "/>
            {/*<MainDesc />*/}
            {category&&<div className="shopHolder">
                <SideShop category={category}/>
                <CatList category={category}/>
            </div>}
        </main>
    )
}
export default Shop