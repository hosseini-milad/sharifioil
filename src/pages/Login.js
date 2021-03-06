import { useState } from "react";
import {ADD_USER_MUTATION, LOGIN_USER_MUTATION} from '../components/Query'
import { useMutation} from "@apollo/client";
import env from "../env";



var create_user = 0;

function Login(){
    
    const [mobile_phone, setMobile] = useState('');
    const [privateOtp, setPrivOTP] = useState('');
    const [otp, setOTP] = useState('');
    const [mobileEnter , setMobileEnter] = useState('');
    const [token,setToken] = useState(JSON.parse(localStorage.getItem('oil-login')));
    const [sms,SetSms] = useState('');

    const [addUser] = useMutation(ADD_USER_MUTATION(
      mobile_phone, 
      "Reyham@2372", 
      mobile_phone+"@sharifioil.com"
    ), {
        onCompleted: () => {
        },
        onError: (error) => {
            console.log("registerd!")
            
        }
    });
    
    const handleSendCode=()=>{

      setMobileEnter(1);
        var min = 1000;
        var max = 9999;
        var rand =  Math.floor(min + (Math.random() * (max-min)));
        setPrivOTP(rand);

        fetch(env.kaveNegarUrl+env.kaveNegarApi+"/sms/send.json?"+
        `receptor=${mobile_phone}&sender=100026767&message=${rand}`)
      .then(res => res.json())
      .then(
        (result) => {
            SetSms(result)
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
      console.log("sms Sent");
      const resultRegister = addUser();
    }
    
    const [loginUser] = useMutation(LOGIN_USER_MUTATION(mobile_phone,
    "Reyham@2372"),{
      
      onCompleted: (data) => {
        setToken(JSON.stringify(data.login));
        localStorage.setItem('oil-login', JSON.stringify(data.login));
      },
      onError: (error) => {
          console.log("Error!",error)
          
      }
    })
    const handleLogin = (props) => {
      if(create_user === 0){
        const resultLogin = loginUser();
      create_user= 1;}
      }
      
      const logOut=()=>{
        localStorage.removeItem('oil-login');
      }
    return(<div className="loginHandler">
        {!token&&<div className="notLogin">{!mobileEnter&&<>
            <strong>????????/?????? ??????</strong>
            <span>?????????? ???????????? ?????? ???? ???????? ????????</span>
            <input type="text" placeholder="?????????? ????????" onChange={event=>setMobile(event.target.value)}></input>
            <button className="modal-content-button" onClick={handleSendCode}>???????????? ????</button></>}
            
        {mobileEnter&&<>
            <strong>???? ?????????? ???? ???????? ????????????</strong>
            <span>???? ?????????? ???????? ?????????? {mobile_phone} ?????????? ??????????</span>
            <input type="otp" placeholder="???? ?????????? ????????" 
            onChange={event=>setOTP(event.target.value)}></input>
            
        </>  }
        {mobileEnter&&otp === privateOtp.toString()?handleLogin():''}
        </div>}
        {token&&<div className="Login">
          User Loged In
          <form>
            <input onClick={logOut} type="submit" value="????????" />
          </form>
          </div>}
      </div> 

    )
}
export default Login