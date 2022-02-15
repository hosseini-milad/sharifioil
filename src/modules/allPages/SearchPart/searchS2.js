import FetchGraph from "../../../components/fetchGraph"
import {BRAND_QUERY} from '../../../components/Query'

function SearchPhase2(props){
    const BRANDS = FetchGraph(BRAND_QUERY);
    const handleBrand=(e,brands)=>{
        props.carHandler(brands.carnames.nodes);
        props.modelHandler(e);
    }
    return(<div className="searchPhase1 searchPhase2">
            <ul className="vehiclePart"><li dangerouslySetInnerHTML={{__html:props.vehicle.innerHTML}}></li>
            </ul>
            <ul className="brandPart">
                {BRANDS&&BRANDS.brands.nodes.map(((brands,i)=>(
                    <li onClick={(e)=>handleBrand(e.target.parentNode,brands)
                    } key={i}>
                        <img src={brands.featuredImage.node.sourceUrl}/>
                        <span>{brands.title}</span>
                    </li>
                )))}
                
            </ul>
        </div>)
}
export default SearchPhase2