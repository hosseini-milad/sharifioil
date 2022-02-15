import { useState } from "react"
import env from "../env"
import CartMenu from "../modules/allPages/header/CartMenu";
import MegaMenuLable from "../modules/allPages/MegaMenuLable"
import SearchArea from "../modules/allPages/SearchPart/SearchArea";

function Header(){
	const [lblMenu,setLblMenu] = useState("none");
	const [searchMenu,setSearch] = useState("hidden");
	const [cartMenu,setCartMenu] = useState("hidden");
    const handleLableMenuHover=()=>{
        setLblMenu("block")
	}
	const handleLableMenuOut=()=>{
        setLblMenu("none")
	}
	const handleSearchHover=()=>{
        setSearch("visible")
	}
	const handleSearchOut=()=>{
        setSearch("hidden")
	}
	const handleCartHover=()=>{
        setCartMenu("visible")
	}
	const handleCartOut=()=>{
        setCartMenu("hidden")
	}
    return(
        <header>
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
							<h3>Look Up a Vehicle</h3>
							<p>The fastest and easiest way to determine which AMSOIL products you need. View all guides ›</p>
						</div>
						<SearchArea />
					</div>
				</div>
			</div>
			<div className="account">
				<div className="mainHolder">
					<i className="icon-size circleIcon fas fa-user"></i>
					<div className="account-heading">حساب کاربری</div>
					<i className="fas fa-angle-down"></i>
				</div>
			</div>
			<div className="cart">
				<div className="mainHolder" onMouseOver={handleCartHover}
						onMouseOut={handleCartOut}>
					<i className="icon-size circleIcon fas fa-shopping-cart"></i>
					<span className="cart-heading">سبد خرید</span>
					<div className="megaMenuHeader megaMenuSingle" style={{visibility:cartMenu}}>
						<CartMenu />
					</div>
				</div>
			</div>
			</div>
		</div>
		<div className="menu">
			<div className="menuNavBar">
				<ul>
					<li className="menuItem" onMouseOver={handleLableMenuHover}
						onMouseOut={handleLableMenuOut}> دسته بندی روغن موتور
						<i className="fas fa-chevron-down"></i>
						<div className="MegaMenuLable" style={{display:lblMenu}}>
							<MegaMenuLable />
						</div>
					</li>
					<li className="menuItem hideMenu">ریبون</li>
					<li className="menuItem hideMenu">رول حرارتی</li>
					<li className="menuItem hideMenu">راهنمایی</li>
				</ul>
			</div>
			<div className="contact">
			
			</div>
		</div>
	</header>
    )
}
export default Header