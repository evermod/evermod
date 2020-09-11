import { Button, Layout, Space, Menu } from 'antd'
import { useRouter } from 'next/router'
import { AppHeader, ModpacksList } from '@evermod/components'

import { useModpacks, writeModpacks, useCreateModpack } from '@evermod/utils/graphql'

import initModpack from '../../lib/initModpack'
import withAuth from '../../lib/withAuth'

const { Content } = Layout

// eslint-disable-next-line max-lines-per-function
const App = ({ auth }) => {
  const router = useRouter()
  const [createModpack] = useCreateModpack()
  const { data, loading } = useModpacks()

  const { modpacks } = data || {}

  const createHandle = async () => {
    const { data } = await createModpack()
    router.push('/app/modpack/[id]', `/app/modpack/${data.createModpack}`)
    writeModpacks([...modpacks, {
      __typename: 'Modpack',
      id: data.createModpack,
      ...initModpack()
    }])
  }

  return <Layout>
    <AppHeader />
    <Layout style={{ padding: '24px' }}>
      <Content style={{ background: '#fff', padding: '24px' }}>
        <Space direction="vertical">
          <div style={{ width: '100%' }}><Button type="primary" onClick={createHandle}>Create modpack</Button></div>
          <div><ModpacksList modpacks={modpacks} loading={loading} /></div>
        </Space>
      </Content>
    </Layout>
  </Layout>
}

export default withAuth(App, { event: 'OUT' })
