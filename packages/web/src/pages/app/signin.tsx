import { SignIn } from '@evermod/components/forms'
import withAuth from '../../lib/withAuth'

const SignInPage = () => {
    return <SignIn />
}

export default withAuth(SignInPage, { event: 'IN' })