import { AppProps } from 'next/app'
import Head from 'next/head'
import 'antd/dist/antd.less'
import { useEffect } from 'react'

import { useApolloClient } from '@apollo/client'
import withApollo from '../lib/withApollo'

import { initFirebase, firebase } from '@evermod/utils/firebase'
import { GET_USER, GET_AUTH_READY, GetUser, GetAuthReady } from '@evermod/utils/graphql'

initFirebase()

function MyApp ({ Component, pageProps }: AppProps) {
  const client = useApolloClient()

  useEffect(() => {
    firebase.analytics()
    firebase.auth().onAuthStateChanged(user => {
      console.log('AUTH_STATE_CHANGED', user)
      client.writeQuery<GetUser>({ query: GET_USER, data: { user: { ...user, __typename: 'User' } } })
      client.writeQuery<GetAuthReady>({ query: GET_AUTH_READY, data: { authReady: true } })
    })
  }, [])

  return <>
    <Head>
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap" rel="stylesheet" />
    </Head>
    <Component {...pageProps} />
  </>
}
export default withApollo(MyApp)
