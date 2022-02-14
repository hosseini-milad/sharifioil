import {useState, useEffect } from "react";
function SimpleFetch(apiUrl){
    const [item, setItem] = useState('')
    useEffect(()=>{
    !item&&fetch(apiUrl)
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
export default SimpleFetch