import React from 'react'

import { Form, Button, Typography, Divider, Alert } from 'antd'
import Link from 'next/link'
import { GoogleOutlined } from '@ant-design/icons'
import CodeToMessage from '../FirebaseErrorCode'
import DefaultInput from '../DefaultInput'
import { useSignIn, useSignUp, Provider } from '@evermod/utils/graphql'

const { Title } = Typography

const SignUp = () => {
  const [signUp, { data, loading, error }] = useSignUp()
  const [signIn] = useSignIn()

  const handleGoogleButton = () => {
    signIn({ variables: { provider: Provider.GOOGLE } }).catch(e => console.log(e))
  }

  const onFinish = values => {
    signUp({ variables: { provider: Provider.EMAILPASSWORD, auth: values } }).catch(e => console.log(e))
  }

  return <Form onFinish={onFinish}>
    <Title>Sign Up</Title>
    <DefaultInput inputName="displayName" />
    <DefaultInput inputName="email" />
    <DefaultInput inputName="password" />
    <Typography.Paragraph type="secondary">By clicking Sign Up, you agree to our <Link href="/privacy"><a>Privacy Policy</a></Link>.</Typography.Paragraph>
    <Form.Item>
      <Button type="primary" style={{ width: '100%' }} htmlType="submit" loading={loading}>Sign Up</Button>
      {error && <Alert message={CodeToMessage(error.message)} type="error" showIcon />}
      {data && <Alert message="Verify email!" type="warning" showIcon />}
  Or <Link href="signin"><a>sign in now!</a></Link>
    </Form.Item>
    <Divider>OR</Divider>
    <Button style={{ width: '100%' }} onClick={handleGoogleButton}><GoogleOutlined /> Google</Button>
  </Form>
}

export default SignUp
