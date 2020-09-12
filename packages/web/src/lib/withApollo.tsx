import withApollo from 'next-with-apollo'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { setContext } from '@apollo/link-context'
import { BatchHttpLink } from 'apollo-link-batch-http'

import { resolvers as utilsResolvers, schema as utilsTypedefs } from '@evermod/utils/graphql'

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
    console.log(utilsResolvers)
    return new ApolloClient({
      // @ts-ignore
      link: authLink.concat(httpLink),
      cache,
      typeDefs: utilsTypedefs,
      resolvers: utilsResolvers
    })
  },
  {
    render: ({ Page, props }) => {
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} />
        </ApolloProvider>
      )
    }
  }
)
