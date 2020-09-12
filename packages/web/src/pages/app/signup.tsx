import { SignUp } from '@evermod/components/forms'
import { SignPageLayout } from '@evermod/components'
import withAuth from '../../lib/withAuth'

const SignInPage = () => {
  return <SignPageLayout>
    <SignUp />
  </SignPageLayout>
}

export default withAuth(SignInPage, { event: 'IN' })
