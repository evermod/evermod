import React from 'react'
import { Col, Row } from 'antd'
import styled from '@emotion/styled'

const Container = styled.div`
  padding: 50px;
`

const SignPageLayout: React.FC = ({ children }) =>
  <Container>
    <Row justify="center">
      <Col xs={24} sm={18} md={12} lg={8} xl={6} xxl={4}>
        {children}
      </Col>
    </Row>
  </Container>

export default SignPageLayout
