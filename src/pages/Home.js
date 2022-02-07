import env from "../env"
import Categories from "../modules/homePage/Categories"
import LastProducts from "../modules/homePage/LastProducts"
import Posts from "../modules/homePage/Posts"
import Slider from "../modules/homePage/Slider"
import WhyUs from "../modules/homePage/WhyUs"

function Home(){
    return (
        <>
           <Slider/> 
           <Categories/>
           <div class="bannerRow">
			    <img src={env.siteUrl+"/images/static/banner.jpg"} />
		   </div>
           <Posts/>
           <WhyUs/>
           <LastProducts />
        </>
    )
}
export default Home