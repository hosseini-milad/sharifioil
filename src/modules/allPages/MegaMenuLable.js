import { PRODUCT_LIST_QUERY } from "../../components/Query"
import FetchApi from '../../components/fetchGraph'

function MegaMenuLable(){
    const popLable = FetchApi(PRODUCT_LIST_QUERY)
    return(
    <div className="menuMegaLable">
        <div className="menuMain">
            <div className="megaItems">
                <a className="megaItem" href="/category/labels">
                    <strong>دسته بندی سایز</strong>
                    <small>فیلتر بر اساس سایز</small>
                    <img src="https://assets.uk.onlinelabels.com/images/header/menu/shop-by-size-uk.svg" />
                </a>
                <div className="megaItem">
                    <strong>دسته بندی جنس</strong>
                    <small>فیلتر بر اساس جنس</small>
                    <img src="https://assets.uk.onlinelabels.com/images/header/menu/materials-spread-uk.png" />
                </div>
                <div className="megaItem">
                    <strong>دسته بندی کاربرد</strong>
                    <small>فیلتر بر اساس کاربرد</small>
                    <img src="https://assets.uk.onlinelabels.com/images/header/menu/shop-by-use.png" />
                </div>
            </div>
            <div className="megaMainSub">
                <a className="blueA" >فهرست مرجع متقابل برند</a>
                <a className="blueA" >اندازه های برچسب ورق سفارشی</a>
                <a className="blueA" >برچسب های برگه در ترخیص کالا</a>
            </div>
            <div className="megaMenuBanner">
                <h3>راندمان را با برچسب های حرارتی مستقیم روی رول ها افزایش دهید.</h3>
    
                <a class="blueA">اکنون خرید کنید <span class="u-font-size--small">►</span></a>

            </div>
        </div>
        <div className="menuSideBar">
            <strong>برچسب های محبوب</strong>
            {popLable&&popLable.products.nodes.slice(0, 3).map((product,i)=>(
                <div className="menuSideBarItem" key={i}>
                <img src={product.image.sourceUrl}/>
                <div className="mySideBarItemText">
                    <a class="blueA">{product.name}</a>
                    <small>{product.productCategories.nodes[0].name}</small>
                    <small>4 برچسب در صفحه</small>
                </div>
            </div>
            ))}
            
            <a className="blueA">مشاهده همه برچسب ها</a>
        </div>
    </div>
        )
}
export default MegaMenuLable