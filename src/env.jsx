const env ={
    siteUrl:'http://oil.deleves.com',
    graphqlUrl:'http://oil.deleves.com/backend/api',
    blogPostList:'https://sharifoilco.com/blog/wp-json/wp/v2/posts',
    blogMedia:'https://sharifoilco.com/blog/wp-json/wp/v2/media/',
    blogCategory:'https://sharifoilco.com/blog/wp-json/wp/v2/categories/'
}
export default env
export function normalPrice(priceText){
    if(priceText === null||priceText === undefined) return(priceText)
    return(
      (priceText.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",").replace( /^\D+/g, ''))
    )
}