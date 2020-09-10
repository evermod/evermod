// @ts-nocheck
import withApollo from 'next-with-apollo'
import { ApolloClient, InMemoryCache, createHttpLink, ApolloProvider } from '@apollo/client'
import { setContext } from '@apollo/link-context'
import { BatchHttpLink } from 'apollo-link-batch-http'
import typeDefs from '../graphql/client/schema'
import resolvers from '../graphql/client'

import { initFirebase, firebase } from '@evermod/utils/firebase'

initFirebase()

const httpLink = new BatchHttpLink({
  uri: '/api/graphql'
})

const authLink = setContext(async (_, { headers }) => {
  // get the authentication token from local storage if it exists

  try {
    const token = await firebase.auth().currentUser.getIdToken()
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : ''
      }
    }
  } catch (e) {}
})

export default withApollo(
  ({ initialState }) => {
    const cache = new InMemoryCache().restore(initialState || {})
    return new ApolloClient({
      link: authLink.concat(httpLink),
      cache,
      typeDefs,
      resolvers
    })
  },
  {
    // eslint-disable-next-line react/display-name
    render: ({ Page, props }) => {
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} />
        </ApolloProvider>
      )
    }
  }
)
