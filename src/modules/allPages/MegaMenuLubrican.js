import { PRODUCT_LIST_QUERY } from "../../components/Query"
import FetchApi from '../../components/fetchGraph'

function MegaMenuLubricant(){
    const popLable = FetchApi(PRODUCT_LIST_QUERY())
    return(
    <div className="menuMegaLable">
        <div className="menuMain">
            <div className="megaItems">
                <a className="megaItem" href="/category/labels">
                    <div className="megaItemText"><strong>نوع روان کننده</strong>
                    <small>فیلتر بر اساس نوع ماشین</small></div>
                    <img src="https://carinzo.com/storage/2021/05/%D8%B1%D9%88%D8%BA%D9%86-%D9%85%D9%88%D8%AA%D9%88%D8%B1-%D8%A2%D8%B1%DB%8C%D8%A7-%D8%A7%D8%B3-%D8%A7%D9%85-%D9%81%D8%B1%D9%88%D8%B4%DA%AF%D8%A7%D9%87-%D8%A7%DB%8C%D9%86%D8%AA%D8%B1%D9%86%D8%AA%DB%8C-%DA%A9%D8%A7%D8%B1%DB%8C%D9%86%D8%B2%D9%88-600x600.jpg?v=1628580273" />
                </a>
                <div className="megaItem">
                    <div className="megaItemText"><strong>نوع روغن</strong>
                    <small>فیلتر بر اساس جنس</small></div>
                    <img src="https://cdn.ilna.news/thumbnail/tKEqjWL7reIe/XWHCw76VBsxV-gjMD_1vCetw5eCq7S04hX6xsI6ISfTD_yl-j66fW7VVozzx0Z7LaClO0doGL7c,/%D8%B1%D9%88%D8%BA%D9%86+%D8%A7%D8%AA%D9%88%D9%85%D8%A8%DB%8C%D9%84.jpg" />
                </div>
                <div className="megaItem">
                    <div className="megaItemText"><strong>دسته بندی برند</strong>
                    <small>فیلتر بر اساس برند</small></div>
                    <img src="https://revitakhodro.com/wp-content/uploads/2021/02/%D8%B1%D9%88%D8%B4%D9%86-%D8%B4%D8%AF%D9%86-%DA%86%D8%B1%D8%A7%D8%BA-%D8%B1%D9%88%D8%BA%D9%86-6.jpg" />
                </div>
            </div>
            <div className="megaMainSub hideMenu">
                <a className="blueA" >فهرست مرجع متقابل برند</a>
                <a className="blueA" >اندازه های برچسب ورق سفارشی</a>
                <a className="blueA" >برچسب های برگه در ترخیص کالا</a>
            </div>
            <div className="megaMenuBanner hideMenu">
                <h3>راندمان را با برچسب های حرارتی مستقیم روی رول ها افزایش دهید.</h3>
    
                <a className="blueA">اکنون خرید کنید <span className="u-font-size--small">►</span></a>

            </div>
        </div>
        <div className="menuSideBar">
            <strong>پرفروش ترین روغن ها</strong>
            {popLable&&popLable.products.nodes.slice(0, 3).map((product,i)=>(
                <div className="menuSideBarItem" key={i}>
                <img src={product.image.sourceUrl}/>
                <div className="mySideBarItemText">
                    <a className="blueA">{product.name}</a>
                    <small>{product.productCategories.nodes[0].name}</small>
                    <small>4 برچسب در صفحه</small>
                </div>
            </div>
            ))}
            
            <a className="blueA">مشاهده همه روغن ها</a>
        </div>
    </div>
        )
}
export default MegaMenuLubricant