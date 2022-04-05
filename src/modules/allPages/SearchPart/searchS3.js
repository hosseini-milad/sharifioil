
function SearchPhase3(props){ 
    //console.log(props.carName)
    const handleBack=()=>{
        console.log(props.carHandler)
        props.carHandler(0)
    }
    return(<div className="searchPhase1 searchPhase3">
            
            <ul className="oilPart">
                {props.carName&&props.carName.map((carName,i)=>(
                    <li key={i} onClick={(e)=>{props.findCar(e.target.parentNode);props.setStep(4)}}>
                    <span>{carName.name}</span></li>
                ))}
            </ul>
        </div>)
}
export default SearchPhase3