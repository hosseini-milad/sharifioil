import { useState } from "react"
import env from "../env"
import MegaMenuLable from "../modules/allPages/MegaMenuLable"
import SearchArea from "../modules/allPages/SearchPart/SearchArea";

function Header(){
	const [lblMenu,setLblMenu] = useState("none");
	const [searchMenu,setSearch] = useState("0")
    const handleLableMenuHover=()=>{
        setLblMenu("block")
	}
	const handleLableMenuOut=()=>{
        setLblMenu("none")
	}
	const handleSearchHover=()=>{
        setSearch("100")
	}
	const handleSearchOut=()=>{
        setSearch("0")
	}
    return(
        <header>
		<div className="topHeader">
			<a className="logo" href="/">
				<img src="https://www.amsoil.com/medias/logo-amsoil.png?context=bWFzdGVyfGltYWdlc3w0NjgzfGltYWdlL3BuZ3xpbWFnZXMvaDg1L2gxZS84ODE0NzI3NDMwMTc0LnBuZ3w5NDUyODdiMWRlMGRiMTgxNTdkNmE0NTliYWVjOGMwNTY2YjE5MWM0NWE4ZGNhMGY4YzBmOWIwM2Q5NTFmNjI3" alt="Hi Printer Logo" width="192px" height="54px"/>
			</a>
			<div className="search">
				<input type="text" placeholder="جستجو" className="v-auto-search__input" /> 
				<button title="Submit this search" className="v-auto-search__search-icon"><i className="fas fa-search"></i></button>
			</div>
			<div className="account">
				<div className="mainHolder" onMouseOver={handleSearchHover}
						onMouseOut={handleSearchOut}>
					<i className="icon-size circleIcon fas fa-car"></i>
					<div className="account-heading">جستجوی برند</div>
					<i className="fas fa-angle-down"></i>
					<div className="megaMenuHeader" style={{opacity:searchMenu}}>
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
				<div className="mainHolder">
					<i className="icon-size circleIcon fas fa-shopping-cart"></i>
					<span className="cart-heading">سبد خرید</span>
				</div>
			</div>
		</div>
		<div className="menu">
			<div className="menuNavBar">
				<ul>
					<li className="menuItem" onMouseOver={handleLableMenuHover}
						onMouseOut={handleLableMenuOut}>
						<i className="fas fa-chevron-down"></i> دسته بندی برچسب
						<div className="MegaMenuLable" style={{display:lblMenu}}>
							<MegaMenuLable />
						</div>
					</li>
					<li className="menuItem">ریبون</li>
					<li className="menuItem">رول حرارتی</li>
					<li className="menuItem">راهنمایی</li>
				</ul>
			</div>
			<div className="contact">
			
			</div>
		</div>
	</header>
    )
}
export default Header