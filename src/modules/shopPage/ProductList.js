import env from "../../env"
function ProductList(){
    return(
        <>
            <div className="subCatTitle">
                <h4> همه محصولات </h4>
            </div>
            <div className="shopLists">
                <div className="shopPlace">
                    <img src={env.siteUrl+"/images/static/product1.jpg"} />
                    <div className="productText">
                        <h4>ریبون وکس</h4>
                        <p>سایز: 10×200<br/>
                        قیمت: 44.500 تومان</p>
                    </div>
                </div>
                <div className="shopPlace">
                    <img src={env.siteUrl+"/images/static/product2.jpg"} />
                    <div className="productText">ریبون سوپر زرین</div>
                </div>
                <div className="shopPlace">
                    <img src={env.siteUrl+"/images/static/product3.jpg"} />
                    <div className="productText">ریبون سوپر زرین</div>
                </div>
                <div className="shopPlace">
                    <img src={env.siteUrl+"/images/static/product2.jpg"} />
                    <div className="productText">ریبون سوپر زرین</div>
                </div>
                <div className="shopPlace">
                    <img src={env.siteUrl+"/images/static/product1.jpg"} />
                    <div className="productText">ریبون سوپر زرین</div>
                </div>
                <div className="shopPlace">
                    <img src={env.siteUrl+"/images/static/product2.jpg"} />
                    <div className="productText">ریبون سوپر زرین</div>
                </div>
            </div>
        </>
    )
}
export default ProductList