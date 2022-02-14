import {gql} from "@apollo/client";


export const PRODUCT_LIST_QUERY = gql`query {
    products(first: 10, where:{orderby: {field: DATE, order: ASC}}) {
        nodes {
            databaseId
            name
            sku
            description
            shortDescription
            productCategories(first: 1) {
              nodes {
                databaseId
                name
              }
            }
  
            productCategories(first:1){
                nodes {
                    name
                }  
            }
            image {
                sourceUrl
                srcSet
                sizes
              }
        }
    }
}`
export const PRODUCT_NOT_LABEL_QUERY = gql`query {
    products(first: 4, where:{categoryNotIn: "A4 Sheets"}) {
        nodes {
            databaseId
            name
            sku
            description
            shortDescription
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
        }
    }
}`
export const PRODUCT_QUERY=(sku)=>{
    return(gql`query {
    products(first: 1,where:{sku:"${sku}"}) {
        nodes {
            databaseId
            name
            sku
            shortDescription
            description
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
        }
    }
}`)}
export const PRODUCT_OFFER_QUERY = gql`query {
    products(first: 4) {
        nodes {
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
        }
    }
}`

export const CATEGORY_QUERY=gql`query{
    productCategories(first: 3, where: {parent: 0, orderby: NAME, order: DESC}) {
      nodes {
        databaseId
        description
        productCategories(first: 1) {
          nodes {
            databaseId
            name
          }
        }
        image {
          sizes
          sourceUrl
          srcSet
        }
        name
      }
    }
  }
`  