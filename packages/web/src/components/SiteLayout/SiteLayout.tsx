/** @jsx jsx */
import { Layout } from 'antd'
import { jsx, css } from '@emotion/core'
import Footer from '../Footer'

const { Content } = Layout

type Props = {
  main?: boolean
}

const SiteLayout: React.FC<Props> = ({ children, main = false }) => {
  const layoutCss = css`
    min-height: 100vh;
  `

  const contentCss = css`
    background: #fff;
    margin: ${main ? 0 : '25px 25px 0 25px'};
    padding: ${main ? 0 : '25px'};
  `

  return <Layout css={layoutCss}>
    <Content css={contentCss} data-testid="site-layout-content">
      {children}
    </Content>
    <Footer />
  </Layout>
}

export default SiteLayout
