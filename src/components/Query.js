import {gql} from "@apollo/client";

const PRODUCT_NODE=`nodes {
  databaseId
  name
  sku
  productCategories(first: 1) {
    nodes {
      databaseId
      name
    }
  }
  image {
      sourceUrl
      srcSet
      sizes
    }
    ... on SimpleProduct {
        price
        regularPrice
    }
    carsuitable {
      grade
    }
}`
export const PRODUCT_LIST_QUERY = gql`query {
    products(first: 100, where:{orderby: {field: DATE, order: ASC}}) {
        ${PRODUCT_NODE}
    }
}`
export const PRODUCT_NOT_LABEL_QUERY = gql`query {
    products(first: 4) {
      ${PRODUCT_NODE}
    }
}`
export const SLIDER_QUERY = gql`query MyQuery {
  slides(first: 3) {
    nodes {
      databaseId
      title
      featuredImage {
        node {
          sourceUrl
          srcSet
          sizes
        }
      }
    }
  }
}

`

export const PRODUCT_QUERY=(sku)=>{
    return(gql`query {
    products(first: 1,where:{sku:"${sku}"}) {
      ${PRODUCT_NODE}
    }
}`)}

export const PRODUCT_TAG_QUERY = gql` query { 
  products(first: 10, where: {tag: "تیبا"}) {
    ${PRODUCT_NODE}
  }
}
`
export const PRODUCT_OFFER_QUERY = gql`query {
    products(last: 4) {
      ${PRODUCT_NODE} 
    }
}`

export const CATEGORY_QUERY=gql`query{
    productCategories(first: 3, where: {parent: 0, orderby: NAME, order: DESC}) {
      ${PRODUCT_NODE}
    }
  }
`  

export const BRAND_QUERY=gql`query MyQuery {
  brands(first: 10) {
    nodes {
      databaseId
      title
      carnames(first: 10) {
        nodes {
          databaseId
          name
        }
      }
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
}
`
export const CATEGORIES_QUERY=gql`
query MyQuery {
  productCategories(first: 10) {
    nodes {
      image {
        sourceUrl
      }
      name
      slug
    }
  }
}

`

export const ADD_USER_MUTATION=(userName,passWord,eMail)=>{
  return (gql`mutation MyMutation {
  registerUser(input: {username:"${userName}", password:"${passWord}", email:"${eMail}"}) {
    clientMutationId
  }
}`)}

export const LOGIN_USER_MUTATION=(userName,passWord)=>{return(gql`
mutation LoginUser {
  login( input:{username:"${userName}", password:"${passWord}"}) {
    authToken
    user {
      id
      name
    }
  }
}
`)}



export const ADD_TO_CART = (productId)=>{
  return(gql`
    mutation ADD_TO_CART {
      addToCart(input: {productId: ${productId}, quantity: 1}) {
        cartItem {
          key
          product {
            node {
              databaseId
              name
            }
          }
        }
      }
    }
`)};


export const TOTAL_CART = gql`query MyQuery {
  cart {
    contents {
      nodes {
        key
        quantity
        total
        subtotal 
        product {
          node {
            name
            databaseId
            sku
            slug
            ... on SimpleProduct {
              price
              regularPrice
            }
            image {
              databaseId
              sizes
              sourceUrl
              srcSet
            }
          }
        }
      }
    }
    total
    discountTotal
    feeTotal
  }
}
`;