import SearchArea from "../modules/allPages/SearchPart/SearchArea"
import Categories from "../modules/homePage/Categories"
import LastProducts from "../modules/homePage/LastProducts"
import Posts from "../modules/homePage/Posts"
import Slider from "../modules/homePage/Slider"
import WhyUs from "../modules/homePage/WhyUs"
import MetaTags from 'react-meta-tags';
import env,{siteApi} from '../env'
import SimpleFetch from "../components/simpleFetch"
import QuickSearch from "../modules/allPages/SearchPart/quickSearch"

function Home(){
    const homeInfo = SimpleFetch(siteApi+env.mainPageApi)
    console.log(homeInfo)
    return (
        <>
        <MetaTags>
            <title>روغن شریفی</title>
            <meta name="description" content="فروشگاه تخصصی انواع روغن خودرو" />
            <meta property="og:title" content="شریفی روغن" />
            <meta property="og:image" content="path/to/image.jpg" />
          </MetaTags>
           <Slider/> 
           <div className="homeSideBar">
                <h3>پیدا کردن محصولات برای:</h3>
                <QuickSearch />
            </div>
           <Categories/>
           <div className="bannerRow">
			    <div className="catalogueText">
                    <h2 style={{marginRight: "20px"}}>دریافت کاتالوگ</h2>
                    <div style={{marginRight: "20px"}}><p>کاتالوگ محصولات روانکاران</p>
                    <a href="" className="catalogDl">
                        <i className="icon-size fas fa-swatch"></i> دریافت کاتالوگ </a>
                    </div>
                </div>
                <img src="https://www.amsoilcontent.com/ams/images/catalog-collage.png" />
                
		   </div>
           {/*<Posts/>
           <WhyUs/>
           {homeInfo&&<LastProducts catList={homeInfo.data.categories}/>}
           */}<Posts/>
        </>
    )
}
export default Home