const env ={
    siteUrl:'http://oil.deleves.com',
    graphqlUrl:'http://oil.deleves.com/backend/api',
    blogPostList:'https://sharifoilco.com/blog/wp-json/wp/v2/posts',
    blogMedia:'https://sharifoilco.com/blog/wp-json/wp/v2/media/',
    blogCategory:'https://sharifoilco.com/blog/wp-json/wp/v2/categories/',
    kaveNegarApi:'464D534974436D623637454B5547393169306E4D557A59637030574F4C37314930567354446F52424938773D',
    kaveNegarUrl:'https://api.kavenegar.com/v1/',
}
export default env
export function normalPrice(priceText){
    if(priceText === null||priceText === undefined) return(priceText)
    return(
      (priceText.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",").replace( /^\D+/g, ''))
    )
}