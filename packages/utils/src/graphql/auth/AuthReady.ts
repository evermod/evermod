import { gql, useQuery } from '@apollo/client'
import { GetAuthReady } from '../__generated__'

export const GET_AUTH_READY = gql`
  query GetAuthReady {
    authReady @client
  }
`

export const useAuthReady = () => useQuery<GetAuthReady>(GET_AUTH_READY)
