import env from "../env"
import SearchArea from "../modules/allPages/SearchPart/SearchArea"
import Categories from "../modules/homePage/Categories"
import LastProducts from "../modules/homePage/LastProducts"
import Posts from "../modules/homePage/Posts"
import Slider from "../modules/homePage/Slider"
import WhyUs from "../modules/homePage/WhyUs"

function Home(){
    return (
        <>
           <Slider/> 
           <div className="homeSideBar">
                <h3>پیدا کردن محصولات برای:</h3>
                <SearchArea />
            </div>
           <Categories/>
           <div className="bannerRow">
			    <img src={env.siteUrl+"/images/static/banner.jpg"} />
		   </div>
           <Posts/>
           <WhyUs/>
           <LastProducts />
        </>
    )
}
export default Home