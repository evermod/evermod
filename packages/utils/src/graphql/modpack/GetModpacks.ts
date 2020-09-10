import { gql, useQuery } from '@apollo/client'
import { GetModpacks } from '../__generated__'

export const GET_MODPACKS = gql`
  query GetModpacks {
    modpacks {
      id
      name
    } 
  }
`

export const useModpacks = () => useQuery<GetModpacks>(GET_MODPACKS)