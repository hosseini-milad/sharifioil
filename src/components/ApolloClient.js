import fetch from 'node-fetch';
import env from '../env';
import { ApolloClient, ApolloLink, InMemoryCache, createHttpLink } from "@apollo/client";

export const middleware = new ApolloLink( ( operation, forward ) => {
	const session = ( process.browser ) ?  localStorage.getItem( "hi-session" ) : null;
    console.log(session)
	if ( session ) {
		operation.setContext( ( { headers = {} } ) => ( {
			headers: {
				"hiprinter-session": `Session ${ session }`
			}
		} ) );
	}

	return forward( operation );

} );

export const afterware = new ApolloLink( ( operation, forward ) => {
    console.log("afterware")
    return forward( operation ).map( response => {
		if ( !process.browser ) {
			return response;
		}

		const context = operation.getContext();
		const { response: { headers } }  = context;
		const session = headers.get( "hiprinter-session" );

		if ( session ) {
			if ( "false" === session ) {

				localStorage.removeItem( "hi-session" );

				// Update session new data if changed.
			} else if ( localStorage.getItem( "hi-session" ) !== session ) {

				localStorage.setItem( "hi-session", headers.get( "hiprinter-session" ) );

			}
		}
		return response;

	} );
} );
// Apollo GraphQL client.
/*const client = new ApolloClient({
    
	link: middleware.concat( afterware.concat( createHttpLink({
		uri: env.graphqlUrl,
		fetch: fetch
	}) ) ),
	cache: new InMemoryCache(),
});*/
const client = new ApolloClient({
    uri: env.graphqlUrl,
    cache: new InMemoryCache()
  });
export default client;
