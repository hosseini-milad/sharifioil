import env from "../../env"

function SubCat(){
    return(
        <>
            <div className="subCatTitle">
                <h4><img src={env.siteUrl+"/images/static/catIcon.png"} />
                    انواع ریبون</h4>
            </div>
            <div className="subCategoryLists">
                <div className="subCategoryPlace">
                    <img src={env.siteUrl+"/images/static/product1.jpg"} />
                    <h4>ریبون سوپر زرین</h4>
                </div>
                <div className="subCategoryPlace">
                    <img src={env.siteUrl+"/images/static/product2.jpg"} />
                    <h4>ریبون سوپر زرین</h4>
                </div>
                <div className="subCategoryPlace">
                    <img src={env.siteUrl+"/images/static/product3.jpg"} />
                    <h4>ریبون سوپر زرین</h4>
                </div>
                <div className="subCategoryPlace">
                    <img src={env.siteUrl+"/images/static/product1.jpg"} />
                    <h4>ریبون سوپر زرین</h4>
                </div>
            </div>
        </>
    )
}
export default SubCat