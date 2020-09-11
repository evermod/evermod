import { Layout, Row, Col } from 'antd'
import Link from 'next/link'
import { GithubOutlined } from '@ant-design/icons'

const Footer: React.FC = () => {
  return <Layout.Footer>
    <Row justify="space-between">
      <Col xxl={20}>
        <Row gutter={[16, 0]}>
          <Col xxl={6}>Evermod ©2020 Created by <a target="_blank" rel="noreferrer" href="https://t.me/Maks1m_S">@Maks1m_S</a></Col>
          <Col><Link href="/"><a>Home</a></Link></Col>
          <Col><Link href="/privacy"><a>Privacy</a></Link></Col>
        </Row>
      </Col>
      <Col>
        <a target="_blank" rel="noreferrer" href="https://github.com/evermod/evermod">
          <GithubOutlined style={{ fontSize: 20 }} />
        </a>
      </Col>
    </Row>
  </Layout.Footer>
}

export default Footer
