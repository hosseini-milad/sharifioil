import ProductMain from "./ProductMain"

function ProductDetail(props){
    const product = props.product;
    return(
        <section className="productDetailSection">
            <div className="productPromises">
                <div className="productPromise">
                    <i className="fas fa-copy promiseIcon"></i>
                    <div className="productPromiseText">
                        <strong>بدون حداقل سفارش</strong>
                        <span>ما می توانیم سفارشات با هر اندازه ای را در محصولات موجود انجام دهیم - هیچ مقداری خیلی بزرگ یا کوچک نیست.</span>
                    </div>
                </div>
                <div className="productPromise">
                    <i className="fas fa-truck promiseIcon"></i>
                    <div className="productPromiseText">
                        <strong>زمان چرخش سریع</strong>
                        <span>ما می توانیم سفارشات با هر اندازه ای را در محصولات موجود انجام دهیم - هیچ مقداری خیلی بزرگ یا کوچک نیست.</span>
                    </div>
                </div>
                <div className="productPromise">
                    <i className="fas fa-star promiseIcon"></i>
                    <div className="productPromiseText">
                        <strong>ابزار و الگوهای طراحی</strong>
                        <span>ما می توانیم سفارشات با هر اندازه ای را در محصولات موجود انجام دهیم - هیچ مقداری خیلی بزرگ یا کوچک نیست.</span>
                    </div>
                </div>
                
            </div>
            <div className="cPanel">
            <strong>مشخصات محصول {product.sku}</strong>
            <p dangerouslySetInnerHTML={{__html:product.description}}></p>
                
            </div>
        </section>
    )
}
export default ProductDetail