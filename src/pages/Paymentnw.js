import {addCartQuery} from '../components/Query';
import FetchGraph from '../components/fetchGraph'
import {
    useMutation,
    gql
  } from "@apollo/client";
import {useState} from 'react'
import Step2 from '../modules/CartPage/step2';
    const userInfo = localStorage.getItem('userInfo');
    var created=0;
    var orderNo = 0;
    var productIdTemp = 0;
    var productQTemp = 0;
    const token=JSON.parse(localStorage.getItem('oil-login'))
    const cart=JSON.parse(localStorage.getItem('oil-cart'))
    
function Payment(props){
    //const cart = FetchGraph(TOTAL_CART);
    const [orderId,setOrderId]=useState();
    const [orderCreated,setOrderCreated]=useState(0)
    //console.log(cart)
    const [AddOrder] = useMutation(setOrderQuery(
        token.user.databaseId,token.user.name,
        cart&&cart.total.split('تومان')[1],userInfo,cart),{
        variables: {
            input: {customerId: token.user.databaseId, 
            customerNote: token.user.name}
        },
        onCompleted: (data) => {
            setOrderId(data.createOrder.orderId)
            orderNo=data.createOrder.orderId;
            console.log("order No "+orderNo +" created")
            //addItemsNow(data.createOrder.orderId)
        },
        onError: (({ graphQLErrors}) => {
            console.log("Error!",graphQLErrors[0].message)})
    }); 
    //if(cart&&created === 0){
    const handleCreate=()=>{
        created = 1
        AddOrder();
    }
        //AddOrder();
    //}
    
    async function handleItems(){
        //for(var index=0;index<cart.contents.nodes.length;index++){
           var index = 0;
            productIdTemp = cart.contents.nodes[index].product.node.databaseId;
            productQTemp = cart.contents.nodes[index].quantity;
            
            console.log("before:",productIdTemp,productQTemp,orderId)
            //if(orderNo)break;
            const result = orderId&&await addCart();
            console.log("after:",productIdTemp,productQTemp,result)
            ///index++;
        
    }
    const [addCart]=
    useMutation(addCartQuery(orderId,
        productIdTemp,
        productQTemp),{
        onCompleted: (data) => {
            console.log(data);
            //setOrderId(data.createOrder.orderId)
        }, 
        onError: (({ graphQLErrors}) => {
            console.log("Error!",graphQLErrors)})
    }); 
    //const user = FetchGraph(USER_QUERY);
    
    return(
        <><div className="mainHeader cartHeader">
            
          <div className="checkoutSteps">
              <a className="steps activeStep" href="/checkout">
                  <strong>اطلاعات ارسال</strong>
                  <div className="circleCheck"></div>
              </a>
              <div className="steps activeStep">
                  <strong>پرداخت</strong>
                  <div className="circleCheck"></div>
              </div>
              <div className="steps">
                  <strong>اتمام خرید و ارسال</strong>
                  <div className="circleCheck"></div>
              </div>
          </div>
          <input type="button" onClick={handleCreate} value="create"/>
          <input type="button" onClick={handleItems} value="Add Items"/>
          </div>
          {cart&&orderId&&<Step2 cart={cart} orderId={orderId}/>}
        </>
    )
}
export default Payment;

function setOrderQuery(userId,userName,price,userData){
    const userInfo=JSON.parse(userData)
    price= price?price:0;
    const billing=`billing:{state:"${userInfo.state}", city:"${userInfo.city}", 
    address1:"${userInfo.address_1}", postcode:"${userInfo.postcode}", 
    firstName:"${userInfo.first_name}", phone:"${userInfo.phone}",}`;
    
const addOrderQuery = gql`
mutation MyMutation {
  createOrder(input: {customerId: ${userId}, 
    customerNote: "${userName}"
    
    ${billing}
    }) {
    orderId
  }
}`
return addOrderQuery
}


