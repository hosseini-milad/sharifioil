import { PRODUCT_NOT_LABEL_QUERY, PRODUCT_OFFER_QUERY, TOTAL_CART } from '../../components/Query'

import FetchApi from '../../components/fetchGraph'
import { useState } from 'react';
import ProductSingleApi from '../allPages/productSingleApi';
function LastProducts(props){
	const notLable= FetchApi(PRODUCT_NOT_LABEL_QUERY)
	const labels = FetchApi(PRODUCT_OFFER_QUERY);
	const cart = FetchApi(TOTAL_CART);
	const categoryList = props.catList;
	const [tabIndex,setTabIndex] = useState(0); 
    return(
        <section className="offerPart">
			<div className="offerTabs">
				<ul>
					{categoryList.map((cats,i)=>(i<3&&
						<li key={i} onClick={()=>setTabIndex(i)} className={tabIndex===i?"offerActive":""}>{cats.payload.title}</li>
					))}
				</ul>
			</div>
			{categoryList.map((cats,i)=>(i<3&&
				<div key={i} className="offerHolder" style={{display:tabIndex===i?"block":"none"}}>
				<div className="offerList">
					{cats.payload.products.map((product,j)=>(j<5&&
					<ProductSingleApi product = {product.payload} key={j} cart={cart}/>
				))}</div>
				
				</div>
			))}
			
		</section>
    )
}
export default LastProducts