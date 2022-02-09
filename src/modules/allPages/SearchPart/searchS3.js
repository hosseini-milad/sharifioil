
function SearchPhase3(props){
    return(<div className="searchPhase1 searchPhase3">
            <ul className="vehiclePart"><li dangerouslySetInnerHTML={{__html:props.vehicle.innerHTML}}></li>
            <li dangerouslySetInnerHTML={{__html:props.model.innerHTML}}></li>
            </ul>
            <ul className="oilPart">
                <li onClick={(e)=>props.kindHandler(e.target.parentNode)}><span>سینتتیک</span></li>
                <li onClick={(e)=>props.kindHandler(e.target.parentNode)}><span>نیمه سینتتیک</span></li>
            </ul>
        </div>)
}
export default SearchPhase3