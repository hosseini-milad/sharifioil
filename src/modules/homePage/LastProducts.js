import { PRODUCT_NOT_LABEL_QUERY, PRODUCT_OFFER_QUERY } from '../../components/Query'

import FetchApi from '../../components/fetchGraph'
import { useState } from 'react';
import ProductSingle from '../allPages/productSingle';
function LastProducts(){
	const notLable= FetchApi(PRODUCT_NOT_LABEL_QUERY)
	const labels = FetchApi(PRODUCT_OFFER_QUERY);
	const [tabIndex,setTabIndex] = useState(0); 
    return(
        <section className="offerPart">
			<div className="offerTabs">
				<ul>
					<li onClick={()=>setTabIndex(0)} className={tabIndex===0?"offerActive":""}>پیشنهاد هفتگی ما</li>
					<li onClick={()=>setTabIndex(1)} className={tabIndex===1?"offerActive":""}>محبوب ترین روغن ها</li>
				</ul>
			</div>
			<div className="offerHolder" style={{display:tabIndex===0?"block":"none"}}>
				<div className="offerList">
					{notLable&&notLable.products.nodes.map((product,i)=>(
					<ProductSingle product = {product} key={i}/>
				))}</div>
				
			</div>
			<div className="offerHolder" style={{display:tabIndex===1?"block":"none"}}>
				<div className="offerList">
					{labels&&labels.products.nodes.map((product,i)=>(
					<ProductSingle product = {product} key={i}/>
				))}</div>
			</div>
		</section>
    )
}
export default LastProducts