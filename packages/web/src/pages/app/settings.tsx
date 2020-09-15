import { Layout, Typography } from 'antd'
import { AppHeader } from '@evermod/components'
import SettingsForm from '../../components/SettingsForm'
import withAuth from '../../lib/withAuth'

const { Content } = Layout
const { Title } = Typography
const Settings = () => {
  return <Layout>
    <AppHeader/>
    <Layout style={{ padding: '24px' }}>
      <Content style={{ background: '#fff', padding: '24px' }}>
        <Title>Settings</Title>
        <SettingsForm />
      </Content>
    </Layout>
  </Layout>
}

export default withAuth(Settings, { event: 'OUT' })
