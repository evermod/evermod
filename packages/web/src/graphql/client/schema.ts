import { gql } from '@apollo/client'

export default gql`
  extend type Query {
    test: Boolean
  }
`

const s = `
  enum Provider {
    GOOGLE
    EMAILPASSWORD
  }
  
  type User {
    uid: String
    photoURL: String
    token: String
    displayName: String
    email: String
    emailVerified: Boolean
  }
  
  input UserInput {
    email: String
  }
  
  
  input AuthInput {
    email: String
    password: String
    remember: Boolean
  }
  
  input SignUpInput {
    displayName: String
    email: String
    password: String
  }
  
  input UserPatch {
    displayName: String
    photo: String
  }
  
  extend type Query {
    modsList: [Mod]!
    user: User
    authReady: Boolean
  }
  
  extend type Mutation {
    updateUser(patch: UserPatch): Boolean
    signUp(provider: Provider, auth: SignUpInput): Boolean
    signIn(provider: Provider, auth: AuthInput): User
    signOut: Boolean
  }
`