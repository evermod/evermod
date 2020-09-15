import { GET_USER, User, useUser } from './GetUser'
import { UPDATE_USER, updateUserResolver, useUpdateUser } from './UpdateUser'
import { GET_AUTH_READY, useAuthReady } from './AuthReady'
import { SIGN_IN, signInResolver, useSignIn } from './SignIn'
import { SIGN_OUT, signOutResolver, useSignOut } from './SignOut'
import { SIGN_UP, signUpResolver, useSignUp } from './SignUp'

const resolvers = {
  User,
  Mutation: {
    signIn: signInResolver,
    signUp: signUpResolver,
    signOut: signOutResolver,
    updateUser: updateUserResolver
  }
}
export { useUser, useAuthReady, useSignIn, useSignUp, useSignOut, useUpdateUser }
export { GET_USER, GET_AUTH_READY, SIGN_IN, SIGN_UP, SIGN_OUT, UPDATE_USER }
export default resolvers
