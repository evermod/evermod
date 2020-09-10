import { gql } from '@apollo/client'

export default gql`
  enum Provider {
    GOOGLE
    EMAILPASSWORD
  }

  input AuthInput {
    email: String
    password: String
    remember: Boolean
  }

  type User {
    uid: String
    photoURL: String
    token: String
    displayName: String
    email: String
    emailVerified: Boolean
  }

  extend type Query {
    user: User
    authReady: Boolean
  }

  extend type Mutation {
    signIn(provider: Provider, auth: AuthInput): User
    signOut: Boolean
  }
`
