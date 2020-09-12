/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Button, Row, Col, Typography, Space } from 'antd'
import { useRouter } from 'next/router'
import SiteLayout from '../components/SiteLayout'

const { Title } = Typography

const Index = () => {
  const router = useRouter()
  return <SiteLayout main>
    <Row>
      <Col span={12} offset={6}>
        <Row justify="center">
          <img src="./BigLogo-02.png" height="125px" />
        </Row>
      </Col>
    </Row>
    <Row justify="center">
      <Title level={2} style={{ fontWeight: 200 }}>Easy tool for making modpacks</Title>
    </Row>
    <Row justify="center">
      <Space size="middle">
        <Button shape="round" disabled>Download for Windows</Button>
        <Button type="primary" shape="round" onClick={() => router.push('/app')}>Open Evermod</Button>
      </Space>
    </Row>
  </SiteLayout>
}

export default Index
