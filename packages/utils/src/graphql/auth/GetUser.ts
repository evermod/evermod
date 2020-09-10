import { gql, useQuery } from '@apollo/client'
import { initFirebase, firebase } from '../../firebase/init'
import { GetUser } from '../__generated__'

initFirebase()

export const GET_USER = gql`
  query GetUser {
    user @client {
      uid
      displayName
      photoURL
      email
      emailVerified
    }
  }
`

export const useUser = () => useQuery<GetUser>(GET_USER)

export const GET_USER_TOKEN = gql`
  query GetUserToken {
    user @client {
      token
    }
  }
`

export const User = {
  token: async () => await firebase.auth().currentUser.getIdToken()
}
