import { gql, useMutation } from '@apollo/client'
import { initFirebase, firebase } from '../../firebase/init'
import { SignIn, SignInVariables, Provider, AuthInput } from '../__generated__'
initFirebase()

export const SIGN_IN = gql`
  mutation SignIn($provider: Provider, $auth: AuthInput = {}) {
    signIn(provider: $provider, auth: $auth) @client {
      emailVerified
    }
  }
`

type Args = {
  provider: Provider
  auth: AuthInput
}

export const useSignIn = () => useMutation<SignIn, SignInVariables>(SIGN_IN)

export const signInResolver = async (_, { provider, auth: { email, password, remember } }: Args) => {
  try {
    switch (provider) {
      case Provider.GOOGLE:
        await firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
        break
      case Provider.EMAILPASSWORD: {
        const UserCredential = await firebase.auth().signInWithEmailAndPassword(email, password)
        if (!remember) {
          firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
        }
        return UserCredential.user
      }
      default:
        break
    }
  } catch (e) {
    if (e.code === 'auth/cancelled-popup-request' || e.code === 'auth/popup-closed-by-user') return
    throw new Error(e.code)
  }
}
