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
           <div className="megaSideBar">
                <h3>Look Up a Vehicle</h3>
                <p>The fastest and easiest way to determine which AMSOIL products you need. View all guides ›</p>
            </div>
            <SearchArea />
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