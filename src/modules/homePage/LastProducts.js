import { PRODUCT_NOT_LABEL_QUERY, PRODUCT_OFFER_QUERY } from '../../components/Query'
import env from '../../env'
import FetchApi from '../../components/fetchGraph'
import { useState } from 'react';
function LastProducts(){
	const notLable= FetchApi(PRODUCT_NOT_LABEL_QUERY)
	const labels = FetchApi(PRODUCT_OFFER_QUERY);
	const [tabIndex,setTabIndex] = useState(0);
    return(
        <section className="offerList">
			<div className="offerTabs">
				<ul>
					<li onClick={()=>setTabIndex(0)} className={tabIndex===0?"offerActive":""}>پیشنهاد هفتگی Hiprinter</li>
					<li onClick={()=>setTabIndex(1)} className={tabIndex===1?"offerActive":""}>محبوب ترین برچسب ها</li>
				</ul>
			</div>
			<div className="offerHolder" style={{display:tabIndex===0?"flex":"none"}}>
				{notLable&&notLable.products.nodes.map(product=>(
					<div className="offer" key={product.databaseId}>
					<div className="offerShare">
						<i className="fas fa-shopping-cart"></i>
						<i className="fas fa-star"></i>
					</div>
					<div className="offerImg">
						<img src={product.image.sourceUrl} alt="Shop by Size" />
					</div>
					<div className="offerText">
						<div className="offerTitle">
							<h4>{product.name}</h4>
							<small><i className="fas fa-price"></i> قیمت: </small>
							<strong>125.000 تومان</strong>
						</div>
						<div className="offerButton">
							<a href="">خرید محصول</a>
						</div>
					</div>
				</div>
				))}
				
			</div>
			<div className="offerLabels" style={{display:tabIndex===1?"inherit":"none"}}>
				<div className="offerLabelsHolder">
					{labels&&labels.products.nodes.map(label=>(
						<div className="offerLabel" key={label.databaseId}>
						<img src={label.image.sourceUrl} />
						<h2 className="offerLabelTitle">{label.name}</h2>
						<div>
							<i className="fa fa-star" />
							<small>(33 Reviews)</small>
						</div>
						<select>
							<option>1</option>
							<option>2</option>
							<option>3</option>
						</select>
						<select>
							<option>1</option>
							<option>2</option>
							<option>3</option>
						</select>
						<a href="/" className="productOption offerBtn">افزودن به سبد خرید - قیمت</a>
					</div>
					))}
				</div>
			</div>
		</section>
    )
}
export default LastProducts