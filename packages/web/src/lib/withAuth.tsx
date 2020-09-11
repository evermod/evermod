/* eslint-disable react/display-name */
import { Spin } from 'antd'
import { useRouter } from 'next/router'

import { useUser, useAuthReady } from '@evermod/utils/graphql'
import withApollo from './withApollo'


type RedirectConfig = {
  event: 'IN' | 'OUT'
}

function withAuth (
  Component,
  redirect?: RedirectConfig
) {
  return withApollo((props: any) => {
    const { data, loading } = useUser()
    const { data: ready } = useAuthReady()
    const router = useRouter()

    const { authReady } = ready || {}

    if (loading || !authReady) return <Spin style={{ top: '50%', left: '50%', position: 'absolute' }} />

    if (redirect) {
      const goToLogin = (!data || !data.user.emailVerified)
      if (goToLogin && redirect.event === 'OUT' && router.pathname !== 'app/signin') {
        router.replace('/app/signin')
        return null
      } else if (!goToLogin && redirect.event === 'IN' && router.pathname !== 'app') {
        router.replace('/app')
        return null
      }
    }
    return <Component auth={data} {...props} />
  })
}

export default withAuth
