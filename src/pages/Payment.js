import {TOTAL_CART,USER_QUERY} from '../components/Query';
import FetchGraph from '../components/fetchGraph'
import {
    useMutation,
    gql
  } from "@apollo/client";
import {useState} from 'react'
import Step2 from '../modules/CartPage/step2';
    const userInfo = localStorage.getItem('userInfo');
    var created=0;
    var itemCreated = 0;
    var productIdTemp = 0;
    var productQTemp = 0;
    
function Payment(props){
    const cart = FetchGraph(TOTAL_CART);
    const [orderId,setOrderId]=useState(80);
    const [orderCreated,setOrderCreated]=useState(0)
    const token=JSON.parse(localStorage.getItem('oil-login'))
    const [AddOrder] = useMutation(setOrderQuery(
        token.user.databaseId,token.user.name,
        cart.cart&&cart.cart.total.split('تومان')[1],userInfo,cart),{
        variables: {
            input: {customerId: token.user.databaseId, 
            customerNote: token.user.name}
        },
        onCompleted: (data) => {
            setOrderId(data.createOrder.orderId)
            console.log("orderCreated",data.createOrder.orderId);
            setOrderCreated(1);
            addItemsNow(data.createOrder.orderId)
        },
        onError: (({ graphQLErrors}) => {
            console.log("Error!",graphQLErrors[0].message)})
    }); 
    if(cart.cart&&created === 0){
        created = 1
        AddOrder();
        console.log("orderRecieved",orderId)
        //AddOrder();
    }
    const [addCart]=
        useMutation(addCartQuery(orderId,
            productIdTemp,
            productQTemp),{
            onCompleted: (data) => {
                console.log(data)
                setOrderId(data.createOrder.orderId)
            },
            onError: (({ graphQLErrors}) => {
                console.log("Error!",graphQLErrors[0].message)})
        }); 
    async function addItemsNow(){
        for(var index=0;index<cart.cart.contents.nodes.length;index++){
           
            productIdTemp = cart.cart.contents.nodes[index].product.node.databaseId;
            productQTemp = cart.cart.contents.nodes[index].quantity;
            if(productIdTemp===0)break;
            console.log(productIdTemp,productQTemp)
            await addCart();
            itemCreated++;
        }
    }
    const user = FetchGraph(USER_QUERY);
    
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
function addCartQuery(orderId,pId,pQ){
    console.log(pId,pQ)
const updateOrderQuery = gql`mutation MyUpdateCart {
    updateOrder(input: {orderId: ${orderId}, 
    lineItems:{ productId: ${pId}, quantity: ${pQ}}}) {
      order {
        databaseId
      }
    }
  }
`
return updateOrderQuery
}

