import { gql, useMutation } from '@apollo/client'
import { initFirebase, firebase } from '../../firebase/init'
import { SignOut } from '../__generated__'
initFirebase()

export const SIGN_OUT = gql`
  mutation SignOut {
    signOut @client
  }
`

export const useSignOut = () => useMutation<SignOut>(SIGN_OUT)

export const signOutResolver = () => {
  firebase.auth().signOut()
}
