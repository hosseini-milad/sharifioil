import env from "../../env"
import '../../css/slider.css'
import ImageGallery from 'react-image-gallery';
function Slider(){
	const linkNow=(e)=>{
		console.log(e)
	}
	const images = [
		{
		  original: 'http://oil.deleves.com/images/slider1.jpg',
		},
		{
		  original: 'http://oil.deleves.com/images/slider2.jpg',
		},
		{
		  original: 'http://oil.deleves.com/images/slider1.jpg',
		},
	  ];
    return(
        <section className="banner">
		  <ImageGallery 
			showFullscreenButton={false} 
			showPlayButton={false} 
			showThumbnails={false} 
			onClick={(e)=>linkNow(e)}
			items={
				images	
			}
			/>
			{/*<div className="bannerOverlay">
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
				
		</div>*/}
		</section>
    )
}
export default Slider