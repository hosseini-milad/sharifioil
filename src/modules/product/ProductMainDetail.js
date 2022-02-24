import { useMutation } from "@apollo/client";
import { useState ,useContext} from "react";
import CounterInput from "react-counter-input";
import { ADD_TO_CART ,TOTAL_CART} from "../../components/Query";
import { normalPrice } from "../../env";
import {AppContext} from "../../components/AppContext";
import FetchGraph from "../../components/fetchGraph";

function ProductMainDetail(props){
    const product = props.product;
    const [cart, setCart] = useContext(AppContext);
    const updatedCart = props.cart;
    //console.log(updatedCart)
   // const [cartAdd,setCartAdd] = useState('');
    const [addToCart] = useMutation(ADD_TO_CART(product.databaseId), {
        
        onCompleted: (data) => {
          console.log('item added',data);
          //setCartAdd(data);
          localStorage.setItem('oil-cart', JSON.stringify(updatedCart));
          setCart(updatedCart)
          //cartAdded(1)
          //history.push("/cart")
          //window.open("/cart").focus(); 
  
            
        },
        onError: (error) => {
          console.log("Error!",error)
        }
      });
    const handleAddToCart=(productId)=>{
        const result = addToCart();
    }
    //console.log(cartAdd)
    return(
        <div className="modal-content">
        <div className="modal-product">
            <div style={{display:"grid"}}>
                {/*productInfo.image&&<img className="modal-img" src={productInfo.image.sourceUrl} />*/}
                <h3>{product.name}</h3>
                <small >{"کد محصول: "+product.sku}</small>
                <i>{product.productCategories.nodes[0].name}</i>
                <p className="modal-product-content" dangerouslySetInnerHTML={{__html:product.shortDescription}}></p>
                </div>
                
        </div>
        <div className="pop-xtra-content">
        <div className="selectPart">
                <div className="offerText">
                <div className="offerTitle">
                    <div className="mainPrice">
                        <div className="offPriceHolder">
                        <small>250000</small>
                        <b>10%</b></div>
                        {product.price&&<strong >
                            {normalPrice(product.price)} <sub>تومان</sub></strong>}
                        {!product.price&&<strong>
                            تماس بگیرید</strong>}
                        
                    </div>
                    </div>
                    </div>
                <div className="mobileFlex"><label>اندازه بسته:</label>
                <select className="filterSort" >
                    <option>نیم لیتری</option>
                    <option>یک لیتری</option>
                    <option>دو لیتری</option>
                    <option>چهار لیتری</option>
                    <option>ده لیتری</option>
                </select></div>
                <div className="mobileFlex">
                    <label>تعداد محصول:</label>
                    <CounterInput
                        min={1}
                        max={10}
                        onCountChange={count => console.log(count)}
                    />
                </div>
                <a className="modal-sub-btn" onClick={()=>handleAddToCart()}>افزودن به سبد خرید</a>
            </div>
            
        </div>
    </div>
    )
}
export default ProductMainDetail