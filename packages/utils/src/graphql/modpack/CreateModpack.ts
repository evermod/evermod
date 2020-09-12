import { gql, useMutation } from '@apollo/client'
import { CreateModpack } from '../__generated__'

export const CREATE_MODPACK = gql`
  mutation CreateModpack {
    createModpack 
  }
`

export const useCreateModpack = () => useMutation<CreateModpack>(CREATE_MODPACK)
