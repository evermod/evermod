import React from 'react'

import { Form, Button, Typography, Divider, Checkbox, Alert } from 'antd'
import Link from 'next/link'
import { GoogleOutlined } from '@ant-design/icons'
import 'firebase/auth'

import { useSignIn, Provider } from '@evermod/utils/graphql'
import CodeToMessage from '../FirebaseErrorCode'
import DefaultInput from '../DefaultInput'

const { Title } = Typography

const RememberMe = () => (
  <Form.Item name="remember" valuePropName="checked" noStyle>
    <Checkbox>Remember me</Checkbox>
  </Form.Item>
)
const ForgotPassword = () => <Link href="forgot-password"><a style={{ float: 'right' }}>Forgot password?</a></Link>

const SignIn = () => {
  const [form] = Form.useForm()
  const [signIn, { data, loading, error }] = useSignIn()
  const handleGoogleButton = () => {
    signIn({ variables: { provider: Provider.GOOGLE } }).catch(e => console.log(e))
  }
  const onFinish = values => {
    signIn({ variables: { provider: Provider.EMAILPASSWORD, auth: values } }).catch(e => console.log(e))
  }

  const user = (data || {}).signIn
  console.log('Current user', user)
  return <Form form={form} initialValues={{ remember: true }} onFinish={onFinish}>
    <Title>Sign In</Title>
    <DefaultInput inputName="email" /><DefaultInput inputName="password" />
    <Form.Item><RememberMe/><ForgotPassword/></Form.Item>
    <Form.Item>
      <Button type="primary" style={{ width: '100%' }} htmlType="submit" loading={loading}>Sign In</Button>
      {error && <Alert message={CodeToMessage(error.message)} type="error" showIcon />}
      {(user || {}).emailVerified === false && <Alert message="Verify email!" type="warning" showIcon />}
      Or <Link href="signup"><a>register now!</a></Link>
    </Form.Item>
    <Divider>OR</Divider>
    <Button style={{ width: '100%' }} onClick={handleGoogleButton} loading={loading}><GoogleOutlined /> Google</Button>
  </Form>
}

export default SignIn
