import {useState} from 'react'
import env,{normalPrice} from '../../env'
function Step2(props){
    const cart = props.cart;
    const price=cart.total.replace( /^\D+/g, '');
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    const sendToPay=()=>{
        const requestOptions = {
            method: 'GET',
            headers: {  
            'Content-Type': 'application/json' },
        };
        fetch(env.payApi+props.orderId+"/"+price.replace('.','')*10, requestOptions)
        .then(response => response.json())
        .then(data => setToken(data.token,data.url))
        .catch(err => {
            console.log(err);
        })
    }
    const [tokenUrl,setToken] = useState(()=>sendToPay())
    return(
        <div className="checkMain">
          
        <div className="mainCheck">
          <div className="checkTab">
            <h3>شیوه پرداخت</h3><p>پرداخت اینترنتی</p>
      </div>
      <div className="checkTab">
        <h3>کد تخفیف</h3>
        <div className="offHolder"><input type="text" className="offInput" placeholder="افزودن کد تخفیف" />
            <a className="registerCode" href="#" >ثبت</a> 
        </div>
        
      </div>
      <div className="checkTab">
      <h3>خلاصه سفارش</h3><ul style={{justifyContent: "space-between"}}>
          <li><span>مرسوله</span><small>{cart.contents.nodes.length} کالا</small></li>
    <li><span>زمان تقریبی دریافت</span><small>{userInfo.city==="تهران"?"تا 1 روز کاری":"تا 3 روز کاری"}</small></li>
          <li><span>مبلغ مرسوله</span><small>{normalPrice(price)} تومان</small></li>
      </ul>
      </div> 
      
      </div>
      <div className="cartSideBar">
          <div className="cartSidePrice">
              <div className="priceCalc">
                  <span>قیمت کالاها<br/>تخفیف کالاها
                  </span>
                  <div style={{textAlign:"left"}}>
                      <strong> {cart.total}
                      </strong>
                      <strong className="off" style={{display:"none"}}>
                      (12%) 936.000 تومان
                      </strong>
                  </div>
              </div>
              
              <div className="priceTotal">
                  <strong>
                      جمع سبد خرید
                  </strong>
                  <strong>
                  {normalPrice(price)+" تومان "}
                  </strong>
              </div>
              <form action="https://mipg.atipay.net/v1/redirect-to-gateway" method="POST">
                <input name="token" type="hidden" value={tokenUrl} />
                <input type="submit" value="پرداخت سفارش" className="modal-sub-btn btn100"/>
            </form> 
          </div>
      </div>
      </div>
        )
}
export default Step2