import { useState } from "react"
import env from "../env"
import MegaMenuLable from "../modules/allPages/MegaMenuLable"

function Header(){
    const [lblMenu,setLblMenu] = useState("none")
    const handleLableMenuHover=()=>{
        setLblMenu("block")
	}
	const handleLableMenuOut=()=>{
        setLblMenu("none")
    }
    return(
        <header>
		<div className="topHeader">
			<a className="logo" href="/">
				<img src="/images/logo-hi.svg" alt="Hi Printer Logo" width="192px" height="54px"/>
			</a>
			<div className="search">
				<input type="text" placeholder="جستجو" className="v-auto-search__input" /> 
				<button title="Submit this search" className="v-auto-search__search-icon"><i className="fas fa-search"></i></button>
			</div>
			<div className="account">
				<div className="mainHolder">
					<i className="icon-size fas fa-user-circle"></i>
					<div className="account-heading">حساب کاربری</div>
					<i className="fas fa-angle-down"></i>
				</div>
			</div>
			<div className="cart">
				<div className="mainHolder">
					<i className="icon-size fas fa-shopping-cart"></i>
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