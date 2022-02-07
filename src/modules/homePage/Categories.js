import env from "../../env"
function Categories(){
    return(
        <section className="products">
		  <div className="productHolder">
			  <div className="productList">
				<div className="product3">
					<img src={env.siteUrl+"/images/static/cat1.jpg"} alt="Shop by Size" />
					<h3>لیبل</h3>
				</div>
				<div className="product3">
					<img src={env.siteUrl+"/images/static/cat2.jpg"} alt="Shop by Size" />
					<h3>رول حرارتی</h3>
				</div>
				<div className="product3">
					<img src={env.siteUrl+"/images/static/cat3.jpg"} alt="Shop by Size" />
					<h3>ریبون</h3>
				</div>
			  </div>
		  </div>
		</section>
    )
}
export default Categories