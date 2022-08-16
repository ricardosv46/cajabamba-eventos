import { ApolloClient, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { createUploadLink } from 'apollo-upload-client'

const httpLink = createUploadLink({
	uri: 'https://apicajabamba.plazaticket.com/public/graphql'
})

const authLink = setContext((_, { headers }) => {
	// get the authentication token from local storage if it exists
	const token = localStorage.getItem('token')
	// return the headers to the context so httpLink can read them
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : ''
		}
	}
})
const cache = new InMemoryCache({
	addTypename: false
})

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache
})

export default client
