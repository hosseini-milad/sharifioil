import env from "../../env"
function Slider(){
    return(
        <section className="banner">
		  <div className="bannerOverlay">
			<img src={env.siteUrl+"/images/static/slider.png"} />
		  </div>
			<div className="bannerText">
				<div className="bannerTitle">بهترین برچسب را پیدا کنید</div>
				<h1 className="bannerSubtitle">
					جستجو بر اساس سایز، جنس برچسب و کاربرد
				</h1>
			</div>
			<div className="filter">
				<div className="filterField">
					<div className="filterTitle">سایز </div> 
					<div className="filterSubTitle">سایز برچسب را انتخاب کنید</div>
					<i className="filterArrow fas fa-chevron-down"></i>
				</div> 
				<div className="filterField">
					<div className="filterTitle">جنس </div> 
					<div className="filterSubTitle">جنس برچسب</div>
					<i className="filterArrow fas fa-chevron-down"></i>
				</div> 
				<div className="filterField">
					<div className="filterTitle">شکل </div> 
					<div className="filterSubTitle">شکل برچسب</div>
					<i className="filterArrow fas fa-chevron-down"></i>
				</div> 
				<div className="filterButton">
					<a className="filterBtn" href="/">نمایش برچسب های موجود</a>
				</div> 
			</div>
			<div className="bannerPromises">
				
			</div>
		</section>
    )
}
export default Slider