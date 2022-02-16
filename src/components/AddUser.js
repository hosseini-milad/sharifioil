import env from '../env'
function AddUser(props){
    const mobileNumber= props;
    console.log(mobileNumber)
    const loginFunc=()=>{
        const requestOptions = {
            method: 'POST',
            headers: {  
              'Content-Type': 'application/json' 
            },
            body: JSON.stringify({ 
                username: 'reyham',
                password: 'Reyham@2372'
            })
          }
          fetch(env.loginUserUrl, requestOptions)
            .then(response => response.json())
            .then(data => adduserFunc(data))
    }
    loginFunc()
    const adduserFunc=(props)=>{
      if(props.token === undefined) return;
      console.log(env.addUserUrl+'?token='+props.token)
      const requestOptions = {
        method: 'POST',
        headers: { 
            'Authorization':'Bearer ' + props.token, 
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify({ 
          "username": mobileNumber,
          "email":mobileNumber+"@gmail.com",
          "password":"Guest@2372",
          "roles":"customer"
        })
      }
      fetch(env.addUserUrl+'?token='+props.token, requestOptions)
        .then(response => response.json())
        .then(data => console.log(data))
    }
  }
export default AddUser