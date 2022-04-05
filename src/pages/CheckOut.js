import { useState } from "react";
import FetchGraph from "../components/fetchGraph";
import { TOTAL_CART ,USER_QUERY} from "../components/Query";
import Step1 from "../modules/CartPage/Step1";
import '../css/cart.css'

function Checkout(){
    const cart = FetchGraph(TOTAL_CART);
    //const [tokenUrl,setToken] = useState('')
    const token=JSON.parse(localStorage.getItem('oil-login'))
    //const userQuery = findUser(JSON.parse(token).user.username)
    //console.log(JSON.parse(token.user))
    //const user = FetchGraph(USER_QUERY);
    
    return(
        <><div className="mainHeader cartHeader" >
          
          <div className="checkoutSteps">
              <div className="steps activeStep">
                  <strong>اطلاعات ارسال</strong>
                  <div className="circleCheck"></div>
              </div>
              <div className="steps">
                  <strong>پرداخت</strong>
                  <div className="circleCheck"></div>
              </div>
              <div className="steps">
                  <strong>اتمام خرید و ارسال</strong>
                  <div className="circleCheck"></div>
              </div>
          </div>
          
          </div>
          {cart&&token&&<Step1 cart={cart} mobile={token.user.name}/> }
        {cart&&localStorage.setItem('oil-cart', JSON.stringify(cart.cart))}
          </>
    )
}
export default Checkout