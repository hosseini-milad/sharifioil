import { PRODUCT_LIST_QUERY } from "../../components/Query"
import FetchApi from '../../components/fetchGraph'
import {normalPrice} from '../../env'

function MegaMenuOil(){
    const popLable = FetchApi(PRODUCT_LIST_QUERY("motor-oil")) 
    
    return(
    <div className="menuMegaLable">
        <div className="menuMain">
            <div className="megaItems">
                <a className="megaItem" href="/category/motor-oil">
                    <div className="megaItemText"><strong>نوع وسیله نقلیه</strong>
                    <small>فیلتر بر اساس نوع ماشین</small></div>
                    <img src="https://carinzo.com/storage/2021/05/%D8%B1%D9%88%D8%BA%D9%86-%D9%85%D9%88%D8%AA%D9%88%D8%B1-%D8%A2%D8%B1%DB%8C%D8%A7-%D8%A7%D8%B3-%D8%A7%D9%85-%D9%81%D8%B1%D9%88%D8%B4%DA%AF%D8%A7%D9%87-%D8%A7%DB%8C%D9%86%D8%AA%D8%B1%D9%86%D8%AA%DB%8C-%DA%A9%D8%A7%D8%B1%DB%8C%D9%86%D8%B2%D9%88-600x600.jpg?v=1628580273" />
                </a>
                <div className="megaItem">
                    <div className="megaItemText"><strong>نوع روغن</strong>
                    <small>فیلتر بر اساس خودرو</small></div>
                    <img src="https://sharifoilco.com/backend/wp-content/uploads/2022/02/110394746.jpg" />
                </div>
                <div className="megaItem">
                    <div className="megaItemText"><strong>دسته بندی برند</strong>
                    <small>فیلتر بر اساس برند</small></div>
                    <img src="https://sharifoilco.com/backend/wp-content/uploads/2022/01/روغن-موتور-پارس-سوپر-پایا-10w40-چهار-ليتري.jpg" />
                </div>
            </div>
            <div className="megaMainSub hideMenu">
                <a className="blueA" >فهرست مرجع متقابل برند</a>
                <a className="blueA" >اندازه های روغن سفارشی</a>
                <a className="blueA" >روغن وارداتی در ترخیص کالا</a>
            </div>
            <div className="megaMenuBanner hideMenu">
                <h3>راندمان ماشین خود را با فیلترهای سرکان بهبود بخشید.</h3>
    
                <a className="blueA">اکنون خرید کنید <span className="u-font-size--small">►</span></a>

            </div>
        </div>
        <div className="menuSideBar">
            <strong>پرفروش ترین روغن ها</strong>
            {popLable&&popLable.products.nodes.slice(0, 3).map((product,i)=>(
                <div className="menuSideBarItem" key={i}>
                <img src={product.image.sourceUrl}/>
                <div className="mySideBarItemText">
                    <a href={"/product/"+product.sku} className="blueA">{product.name}</a>
                    <small>{product.productCategories.nodes[0].name}</small>
                    <small>{normalPrice(product.price)}<sub> تومان </sub></small>
                </div>
            </div>
            ))}
            
            <a href="/category/motor-oil" className="blueA">مشاهده همه روغن موتورها</a>
        </div>
    </div>
        )
}
export default MegaMenuOil