import { useState } from "react";

function Login(){
    
    const [mobile_phone, setMobile] = useState('');
    const [privateOtp, setPrivOTP] = useState('');
    const [otp, setOTP] = useState('');
    const [token , setToken] = useState('');

    const handleSendCode=()=>{
        setToken(1);
        setPrivOTP('1234');
        //sendSms
    }
    return(<div className="">
        {!token&&<>
            <strong>ورود/ثبت نام</strong>
            <span>شماره موبایل خود را وارد کنید</span>
            <input type="text" placeholder="شماره تماس" onChange={event=>setMobile(event.target.value)}></input>
            <button className="modal-content-button" onClick={handleSendCode}>دریافت کد</button></>}
            
        {token&&<>
            <strong>کد تایید را وارد نمایید</strong>
            <span>کد تایید برای شماره {mobile_phone} ارسال گردید</span>
            <input type="otp" placeholder="کد یکبار مصرف" 
            onChange={event=>setOTP(event.target.value)}></input>
            
        </>  }
        {token&&otp === privateOtp?console.log('True'):console.log('false')}
         </div>         
    )
}
export default Login