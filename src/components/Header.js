import { useState } from "react"
import env from "../env"
import CartMenu from "../modules/allPages/header/CartMenu";
import LoginMenu from "../modules/allPages/header/loginMenu";
import MegaMenuAccessory from "../modules/allPages/MegaMenuAccessory";
import MegaMenuLubricant from "../modules/allPages/MegaMenuLubrican";
import MegaMenuOil from "../modules/allPages/MegaMenuOil";
import SearchArea from "../modules/allPages/SearchPart/SearchArea";

function Header(props){
	const [oilMenu,setOilMenu] = useState("none");
	const [lubMenu,setLubMenu] = useState("none");
	const [accMenu,setAccMenu] = useState("none");
	const [searchMenu,setSearch] = useState("hidden");
	const [cartMenu,setCartMenu] = useState("hidden");
	const [loginMenu,setLoginMenu] = useState("hidden");
	
	const handleOilMenuHover=()=>{setOilMenu("block")}
	const handleOilMenuOut=()=>{setOilMenu("none")}
	const handleLubMenuHover=()=>{setLubMenu("block")}
	const handleLubMenuOut=()=>{setLubMenu("none")}
	const handleAccMenuHover=()=>{setAccMenu("block")}
	const handleAccMenuOut=()=>{setAccMenu("none")}
	
	const handleSearchHover=()=>{setSearch("visible")}
	const handleSearchOut=()=>{setSearch("hidden")}
	
	const handleCartHover=()=>{setCartMenu("visible")}
	const handleCartOut=()=>{setCartMenu("hidden")}
	
	const handleLoginHover=()=>{setLoginMenu("visible")}
	const handleLoginOut=()=>{setLoginMenu("hidden")}

    return(
        <header>
			<div className="topTop">
				<span>باشگاه مشتریان روانکاران،  
					 به شما تخفیف ویژه مشتریان
					  و موارد دیگر را می دهد. <a href="/">همین حالا بپیوندید</a>  </span>
				<div className="topContact">
					<span>کمک نیاز دارید؟ با ما تماس بگیرید</span>
				</div>
				<div className="topSocial">
				<i className="fab fa-instagram share"></i>
				<i className="fab fa-whatsapp share"></i>
				</div>
			</div>
		<div className="topHeader">
			<a className="logo" href="/">
				<img src="https://sharifoilco.com/assets/imgs/header-logo.png" alt="Sharifi Oil Logo" width="192px" height="54px"/>
			</a>
			<div className="search">
				<input type="text" placeholder="جستجو" className="v-auto-search__input" /> 
				<button title="Submit this search" className="v-auto-search__search-icon">
					<i className="fas fa-search"></i></button>
			</div>
			<div className="icons">
			<div className="account">
				<div className="mainHolder" onMouseOver={handleSearchHover}
						onMouseOut={handleSearchOut}>
					<i className="icon-size circleIcon fas fa-car"></i>
					<div className="account-heading">جستجوی سریع</div>
					<i className="fas fa-angle-down"></i>
					<div className="megaMenuHeader" style={{visibility:searchMenu}}>
						<div className="megaSideBar">
							<h3>جستجوی خودرو</h3>
							<p>سریع ترین و ساده ترین راه برای تعیین اینکه به کدام محصولات نیاز دارید. مشاهده همه راهنماها ›</p>
						</div>
						<SearchArea />
					</div>
				</div>
			</div>
			<div className="cart hideMenu">
				<div className="mainHolder">
					<i className="icon-size circleIcon fas fa-book"></i>
					<span className="cart-heading">کاتالوگ</span>
				</div>
			</div>
			<div className="cart showMobile">
				<div className="mainHolder">
					<i className="icon-size circleIcon fas fa-address"></i>
				</div>
			</div>
			<div className="account">
				<div className="mainHolder" onMouseOver={handleLoginHover}
						onMouseOut={handleLoginOut}>
					<i className="icon-size circleIcon fas fa-user"></i>
					<div className="account-heading">حساب کاربری</div>
					<i className="fas fa-angle-down"></i>
					<div className="megaMenuHeader megaMenuSingle" style={{visibility:loginMenu}}>
						<LoginMenu />
					</div>
				</div>
			</div>
			<div className="cart">
				<div className="mainHolder" onMouseOver={handleCartHover}
						onMouseOut={handleCartOut}>
					<i className="icon-size circleIcon fas fa-shopping-cart"></i>
					<span className="cart-heading">سبد خرید</span>
					<div className="megaMenuHeader megaMenuSingle" style={{visibility:cartMenu}}>
						{props.cart&&<CartMenu cart={props.cart}/>}
					</div>
				</div>
			</div>
			</div>
		</div>
		<div className="menu">
			<div className="menuNavBar">
				<ul>
					<li className="menuItem" onMouseOver={handleOilMenuHover}
						onMouseOut={handleOilMenuOut}> روغن موتور
						<i className="fas fa-chevron-down"></i>
						<div className="MegaMenuLable" style={{display:oilMenu}}>
							<MegaMenuOil />
						</div>
					</li>
					<li className="menuItem" onMouseOver={handleLubMenuHover}
						onMouseOut={handleLubMenuOut}>
							<a href="/category/engine-lubricants">روان کننده موتور</a>
						{/*<i className="fas fa-chevron-down"></i>
						<div className="MegaMenuLable" style={{display:lubMenu}}>
							<MegaMenuLubricant />
						</div>*/}
						</li>
					<li className="menuItem hideMenu" onMouseOver={handleAccMenuHover}
						onMouseOut={handleAccMenuOut}>
							<a href="/category/accessories">محصولات جانبی</a>
						{/*<i className="fas fa-chevron-down"></i>
						<div className="MegaMenuLable" style={{display:accMenu}}>
							<MegaMenuAccessory />
					</div>*/}
						</li>
					<li className="menuItem hideMenu">راهنمای روغن</li>
				</ul>
			</div>
			<div className="contact">
				<a href=""><i className="icon-size fas fa-address"></i>
				<span>نزدیک ترین فروشگاه شریفی</span></a>
			</div>
		</div>
	</header>
    )
}
export default Header