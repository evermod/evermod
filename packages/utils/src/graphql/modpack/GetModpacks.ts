import { gql, useQuery, useApolloClient } from '@apollo/client'
import { GetModpacks } from '../__generated__'

export const GET_MODPACKS = gql`
  query GetModpacks {
    modpacks {
      id
      version
      name
      author {
        displayName
      }
    } 
  }
`

export const useModpacks = () => useQuery<GetModpacks>(GET_MODPACKS)
export const writeModpacks = (modpacks) => {
  const client = useApolloClient()
  client.writeQuery<GetModpacks>({
    query: GET_MODPACKS,
    data: {
      modpacks
    }
  })
}
