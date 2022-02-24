import FetchGraph from "../../../components/fetchGraph"
import { PRODUCT_TAG_QUERY } from "../../../components/Query"
import {normalPrice} from '../../../env'
import ProductSingle from '../productSingle'

function SearchPList(props){
    const TagProduct = FetchGraph(PRODUCT_TAG_QUERY);
    console.log(TagProduct)
    return(<div className="searchPhase1 searchPhase3">
            <ul className="vehiclePart">
                <li dangerouslySetInnerHTML={{__html:props.vehicle.innerHTML}}></li>
                <li dangerouslySetInnerHTML={{__html:props.model.innerHTML}}></li>
                <li dangerouslySetInnerHTML={{__html:props.kind.innerHTML}}></li>
            </ul>
            <ul className="oilPart">
                {TagProduct&&TagProduct.products.nodes.map((product,i)=>(
                    <ProductSingle product = {product} key={i}/>
                ))}
                
                <div className="moreProductSearch"><a href="">...</a></div>
            </ul>
            
        </div>)
}
export default SearchPList