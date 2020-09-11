import { gql, useApolloClient } from '@apollo/client'
import { GetModpack, GetModpackVariables } from '../__generated__'

export const GET_MODPACK = gql`
  query GetModpack($id: ID!) {
    modpack(id: $id) {
      name
      version
      share
      author {
        displayName
        photoURL
      }
      mods {
        id
        name
        gameVersionLatestFiles {
          id
          downloadUrl
          fileName
          dependencies {
            id
            name
            gameVersionLatestFiles {
              id
              downloadUrl
              fileName
              dependencies {
                id
                name
                gameVersionLatestFiles {
                  id
                  fileName
                  downloadUrl
                }
              }
            }
          }
        }
      }
    }
  }
`

export const getModpack = (id: string) => {
    const client = useApolloClient()
    return client.query<GetModpack, GetModpackVariables>({ query: GET_MODPACK, variables: { id } })
}