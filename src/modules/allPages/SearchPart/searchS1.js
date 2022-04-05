function SearchPhase1(props){
    const vehicleHandler=(e)=>{
        props.vehicleHandler(e);
        props.setStep(2);
    }
    return(
        <div className="searchPhase1">
            <ul>
                <li onClick={(e)=>vehicleHandler(e.target.parentNode.parentNode)}>
                    <div className="searchImgHolder">
                        <img src="https://sharifoilco.com/assets/icons/auto.png"/>
                    </div>
                    <div><span>خودروی سواری </span></div></li>
                <li onClick={(e)=>vehicleHandler(e.target.parentNode.parentNode)}>
                    <div className="searchImgHolder">
                    <img src="https://sharifoilco.com/assets/icons/heavy.png"/> </div>
                    <div><span>خودروی سنگین</span></div></li>
                <li onClick={(e)=>vehicleHandler(e.target.parentNode.parentNode)}>
                    <div className="searchImgHolder">
                    <img src="https://sharifoilco.com/assets/icons/utv.png"/> </div>
                    <div><span>وانت</span></div></li>
                <li onClick={(e)=>vehicleHandler(e.target.parentNode.parentNode)}>
                    <div className="searchImgHolder">
                    <img src="https://sharifoilco.com/assets/icons/motorcycle.png"/> </div>
                    <div><span>موتورسیکلت</span></div></li>
                
            </ul>
        </div>
    )
}
export default SearchPhase1