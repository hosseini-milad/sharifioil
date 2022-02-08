
function SearchPhase3(props){
    return(<div className="searchPhase1 searchPhase3">
            <ul className="vehiclePart"><li dangerouslySetInnerHTML={{__html:props.vehicle.innerHTML}}></li>
            <li dangerouslySetInnerHTML={{__html:props.model.innerHTML}}></li>
            </ul>
            <ul>
                <li>سینتتیک</li>
                <li>نیمه سینتتیک</li>
            </ul>
        </div>)
}
export default SearchPhase3