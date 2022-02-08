
function SearchPhase2(props){
    return(<div className="searchPhase1 searchPhase2">
            <ul className="vehiclePart"><li dangerouslySetInnerHTML={{__html:props.vehicle.innerHTML}}></li>
            </ul>
            <ul className="brandPart">
                <li onClick={(e)=>props.modelHandler(e.target.parentNode)}>
                    <img src="https://mashinno.com/uploads/menu_items/thumb_125-85_menu_items-106-irankhodro.jpg"/><span>ایران خودرو</span></li>
                <li onClick={(e)=>props.modelHandler(e.target.parentNode)}>
                    <img src="https://mashinno.com/uploads/menu_items/thumb_125-85_menu_items-106-irankhodro.jpg"/><span>ایران خودرو</span></li>
                <li onClick={(e)=>props.modelHandler(e.target.parentNode)}>
                    <img src="https://mashinno.com/uploads/menu_items/thumb_125-85_menu_items-106-irankhodro.jpg"/><span>ایران خودرو</span></li>
                <li onClick={(e)=>props.modelHandler(e.target.parentNode)}>
                    <img src="https://mashinno.com/uploads/menu_items/thumb_125-85_menu_items-106-irankhodro.jpg"/><span>ایران خودرو</span></li>
                <li onClick={(e)=>props.modelHandler(e.target.parentNode)}>
                    <img src="https://mashinno.com/uploads/menu_items/thumb_125-85_menu_items-106-irankhodro.jpg"/><span>ایران خودرو</span></li>
                <li onClick={(e)=>props.modelHandler(e.target.parentNode)}>
                    <img src="https://mashinno.com/uploads/menu_items/thumb_125-85_menu_items-106-irankhodro.jpg"/><span>ایران خودرو</span></li>
                <li onClick={(e)=>props.modelHandler(e.target.parentNode)}>
                    <img src="https://mashinno.com/uploads/menu_items/thumb_125-85_menu_items-106-irankhodro.jpg"/><span>ایران خودرو</span></li>
                <li onClick={(e)=>props.modelHandler(e.target.parentNode)}>
                    <img src="https://mashinno.com/uploads/menu_items/thumb_125-85_menu_items-106-irankhodro.jpg"/><span>ایران خودرو</span></li>
                <li onClick={(e)=>props.modelHandler(e.target.parentNode)}>
                    <img src="https://mashinno.com/uploads/menu_items/thumb_125-85_menu_items-106-irankhodro.jpg"/><span>ایران خودرو</span></li>
                <li onClick={(e)=>props.modelHandler(e.target.parentNode)}>
                    <img src="https://mashinno.com/uploads/menu_items/thumb_125-85_menu_items-106-irankhodro.jpg"/><span>ایران خودرو</span></li>

            </ul>
        </div>)
}
export default SearchPhase2