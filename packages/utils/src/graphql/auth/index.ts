import { GET_USER, User, useUser } from './GetUser'
import { GET_AUTH_READY, useAuthReady } from './AuthReady'
import { SIGN_IN, signInResolver, useSignIn } from './SignIn'
import { SIGN_OUT, signOutResolver, useSignOut } from './SignOut'

const resolvers = {
  User,
  Mutation: {
    signIn: signInResolver,
    signOut: signOutResolver
  }
}
export { useUser, useAuthReady, useSignIn, useSignOut }
export { GET_USER, GET_AUTH_READY, SIGN_IN, SIGN_OUT }
export default resolvers
