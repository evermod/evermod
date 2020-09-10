import { FirebaseError } from 'firebase'

const FirebaseErorCode = (code: FirebaseError['code']) => {
  switch (code) {
    case 'auth/user-not-found':
      return 'Account does not exist!'
    case 'auth/invalid-email':
      return 'Email is invalid!'
    case 'auth/wrong-password':
      return 'Email or password is incorrect'
    default:
      return `Unknown error (${code})`
  }
}

export default FirebaseErorCode
