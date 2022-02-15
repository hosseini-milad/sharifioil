
function SearchPhase3(props){ 
    console.log(props.carName)
    return(<div className="searchPhase1 searchPhase3">
            <ul className="vehiclePart"><li dangerouslySetInnerHTML={{__html:props.vehicle.innerHTML}}></li>
            <li dangerouslySetInnerHTML={{__html:props.model.innerHTML}}></li>
            </ul>
            <ul className="oilPart">
                {props.carName.map((carName,i)=>(
                    <li key={i} onClick={(e)=>props.kindHandler(e.target.parentNode)}>
                    <span>{carName.name}</span></li>
                ))}
            </ul>
        </div>)
}
export default SearchPhase3