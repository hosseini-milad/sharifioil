import {useState, useEffect } from "react";
function SimplePost(apiUrl,body){
    const [item, setItem] = useState('')
    const postOptions={
      method:'post',
      headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone_numbers: body})
    }
    useEffect(()=>{
    !item&&fetch(apiUrl,postOptions)
      .then(res => res.json())
      .then(
        (result) => {
          setItem(result)
        },
        (error) => {
          console.log(error);
        }
      )});
      return (item&&item)
    }
export default SimplePost