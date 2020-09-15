import { gql, ApolloClient, useMutation } from '@apollo/client'
import { initFirebase, firebase } from '../../firebase'
import { GetUser, UpdateUser } from '../__generated__'
import { GET_USER } from './GetUser'

initFirebase()

export const UPDATE_USER = gql`
  mutation UpdateUser($patch: UserPatch!) {
    updateUser(patch: $patch) @client
  }
`

export const useUpdateUser = () => useMutation<UpdateUser>(UPDATE_USER)

type Patch = {
  photoURL?: string
}

export const updateUserResolver = async (_, { patch }: { patch: Patch }, { client }: { client: ApolloClient<any>}) => {
  const user = firebase.auth().currentUser
  if (patch.photoURL && patch.photoURL.slice(0, 4) === 'data') {
    const data = await (await fetch(patch.photoURL)).blob()
    var storageRef = firebase.storage().ref(user.uid + '/profilePhoto')
    await storageRef.put(data)
    patch.photoURL = await storageRef.getDownloadURL()
  }
  console.log(patch)
  await user.updateProfile(patch)
  console.log({ user: { ...patch, ...user, __typename: 'User' } })
  client.writeQuery<GetUser>({ query: GET_USER, data: { user: { ...patch, ...user, __typename: 'User' } } })
}
