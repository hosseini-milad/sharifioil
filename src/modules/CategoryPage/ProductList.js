import ProductSingle from '../allPages/productSingle'
function ProductList(props){
    return(
    <div className="productsLists">
        {props.products&&props.products.map(product=>(
            <ProductSingle product={product} key={product.databaseId}/>
        ))}
        
        
    </div>
    )
}
export default ProductList