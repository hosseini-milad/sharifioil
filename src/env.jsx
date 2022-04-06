const siteUrl='https://sharifoilco.com';
//export const siteApi='http://sharif-api.deleves.com/api/v1/app';
export const siteApi='http://yadak-test.deleves.com/api/v1';
const env ={
    siteUrl:'https://sharifoilco.com',
    graphqlUrl:'https://sharifoilco.com/backend/api',
    blogPostList:'https://sharifoilco.com/blog/wp-json/wp/v2/posts',
    blogMedia:'https://sharifoilco.com/blog/wp-json/wp/v2/media/',
    blogCategory:'https://sharifoilco.com/blog/wp-json/wp/v2/categories/',
    kaveNegarApi:'464D534974436D623637454B5547393169306E4D557A59637030574F4C37314930567354446F52424938773D',
    kaveNegarUrl:'https://api.kavenegar.com/v1/',
    loginUserUrl:siteUrl+'/backend/wp-json/jwt-auth/v1/token',
    addUserUrl:siteUrl+'/backend/wp-json/wp/v2/users',
    payApi:'https://sharifoilco.com/backend/wp-json/wp/v1/pay/order/',

    mainPageApi:'/app/main-page',

    cartDetailApi:'/order/cart-detail',
    cartAddApi:'/order/add-to-cart',
    cartRemoveApi:'/order/remove-from-cart'
}
export default env
export function normalPrice(priceText){
    if(priceText === null||priceText === undefined) return(priceText)
    return(
      (priceText.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",").replace( /^\D+/g, ''))
    )
}
export function findAddress(url){
  var cId = '';
  try{cId = (url.split('/')[2])}catch{}
  return(cId);


  //const splitUrl = url.Split('/');
  //if(splitUrl.pop()==='')console.log(splitUrl.pop());
  //var url = 
}