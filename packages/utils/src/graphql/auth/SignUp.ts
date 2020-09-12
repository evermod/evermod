import { gql, useMutation } from '@apollo/client'
import { initFirebase, firebase } from '../../firebase'
import { Provider, SignUp, SignUpInput, SignUpVariables } from '../__generated__'
initFirebase()

export const SIGN_UP = gql`
  mutation SignUp($provider: Provider, $auth: SignUpInput = {}) {
    signUp(provider: $provider, auth: $auth) @client
  }
`
type Args = {
  provider: Provider
  auth: SignUpInput
}

export const signUpResolver = async (_, { provider, auth: { displayName, email, password } }: Args) => {
  try {
    switch (provider) {
      case Provider.GOOGLE:
        await firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
        break
      case Provider.EMAILPASSWORD: {
        await firebase.auth().signOut()
        const UserCredential = await firebase.auth().createUserWithEmailAndPassword(email, password)
        const { user } = UserCredential
        await user.updateProfile({ displayName })
        await user.sendEmailVerification()
        return true
      }
      default:
        break
    }
  } catch (e) {
    if (e.code === 'auth/cancelled-popup-request' || e.code === 'auth/popup-closed-by-user') return
    throw new Error(e.code)
  }
}

export const useSignUp = () => useMutation<SignUp, SignUpVariables>(SIGN_UP)
