import { useState } from "react";
import env,{siteApi} from "../../../env";

function LoginMenu(){
    const [mobile_phone, setMobile] = useState('');
    const [privateOtp, setPrivOTP] = useState('');
    const [otp, setOTP] = useState('');
    //const [mobileEnter , setMobileEnter] = useState('');
    const [token,setToken] = useState();
    const [login,setLogin] = useState();
    
    const handleSendCode=()=>{
        const postOptions={
          method:'post',
          headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ phone_numbers: mobile_phone})
        }
        fetch(siteApi+"/authentication/login",postOptions)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          setToken(result.data.token)
        },
        (error) => {
          console.log(error);
        }
      );
    }
    const handleLogin=()=>{
      const postOptions={
        method:'post',
        headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ verification_code: otp,
            token:token})
      }
      //console.log(postOptions)
      fetch(siteApi+"/authentication/verify-user-by-sms",postOptions)
    .then(res => res.json())
    .then(
      (result) => {
        //console.log(result)
        setLogin(1)
        localStorage.setItem('token-oil',JSON.stringify(
          {"token":result.data.access_token,
          "mobile":mobile_phone}))
      },
      (error) => {
        console.log(error);
      }
    );
    }
    const logOut=()=>{
      
    }
    
    return(<>
    {!login&&<div className="notLogin">
        {!token&&
        <div className="minicartData">
            <div className="item-cart-quantity" style={{display:"grid"}}>
                <strong>ورود/ثبت نام</strong>
                <small>شماره موبایل خود را وارد کنید</small>
            
                <input type="text" onChange={event=>setMobile(event.target.value)}/>
            </div>
            <div className="cartpopup">
                <a onClick={handleSendCode} className="modal-sub-btn">
                دریافت کد</a>
            </div>
        </div>}
        {token&&
            <div className="minicartData">
            <div className="item-cart-quantity" style={{display:"grid"}}>
            <strong>ورود/ثبت نام</strong>
            <span>کد تایید را وارد نمایید</span>
            <small>کد تایید برای شماره {mobile_phone} ارسال گردید</small>
            <input type="otp" placeholder="کد یکبار مصرف" 
            onChange={event=>setOTP(event.target.value)}></input>
            <div className="cartpopup">
                <a onClick={handleLogin} className="modal-sub-btn">
                تایید</a>
            </div>
            </div> 
        </div>  
        
    }
        {otp === 1?handleLogin():''}
        </div>}
        {login&&<div className="Loggedin">
          کاربر {mobile_phone} 
          <a href="/profile" className="modal-sub-btn">
                حساب کاربری</a>
          <form>
            <input onClick={logOut} type="submit" value="خروج" className="modal-sub-btn logout"/>
          </form>
          </div>}

</>)
}
export default LoginMenu