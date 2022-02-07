function ProductList(props){
    return(
    <div className="productsLists">
        {props.products.map(product=>(
            <a class="productItem" key={product.databaseId} href={"/product/"+product.sku} >
            <div class="imageContainer">
                <img class="productImage" alt={product.name} src={product.image.sourceUrl} />
            </div>
            <div class="productContent">
                    <div class="productTitle">{product.name}
                    </div>
                    <div class="productSubTitle">
                        <strong>{product.sku}</strong>
                    </div>
                    <div class="productContent">
                    12 برچسب در هر صفحه
                    </div>
                    <div class="productCategory">
                        A4 دسته بندی کاغذ
                    </div>
                    <button class="productOption">انتخاب آپشن ها</button>
            </div>
        </a>
        ))}
        
        
    </div>
    )
}
export default ProductList