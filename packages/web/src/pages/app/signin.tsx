import { SignIn } from '@evermod/components/forms'
import { SignPageLayout } from '@evermod/components'
import withAuth from '../../lib/withAuth'

const SignInPage = () => {
  return <SignPageLayout>
    <SignIn />
  </SignPageLayout>
}

export default withAuth(SignInPage, { event: 'IN' })
