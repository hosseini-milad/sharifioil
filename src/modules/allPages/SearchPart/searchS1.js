function SearchPhase1(props){
    return(
        <div className="searchPhase1">
            <ul>
                <li onClick={(e)=>props.vehicleHandler(e.target.parentNode.parentNode)}>
                    <div className="searchImgHolder">
                        <img src="http://oil.deleves.com/assets/icons/auto.png"/>
                    </div>
                    <div><span>خودروی سواری </span></div></li>
                <li onClick={(e)=>props.vehicleHandler(e.target.parentNode.parentNode)}>
                    <div className="searchImgHolder">
                    <img src="http://oil.deleves.com/assets/icons/heavy.png"/> </div>
                    <div><span>خودروی سنگین</span></div></li>
                <li onClick={(e)=>props.vehicleHandler(e.target.parentNode.parentNode)}>
                    <div className="searchImgHolder">
                    <img src="http://oil.deleves.com/assets/icons/utv.png"/> </div>
                    <div><span>وانت</span></div></li>
                <li onClick={(e)=>props.vehicleHandler(e.target.parentNode.parentNode)}>
                    <div className="searchImgHolder">
                    <img src="http://oil.deleves.com/assets/icons/motorcycle.png"/> </div>
                    <div><span>موتورسیکلت</span></div></li>
                
            </ul>
        </div>
    )
}
export default SearchPhase1