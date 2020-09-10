/* eslint-disable react/display-name */
import React from 'react'
import { Form, Input } from 'antd'
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons'

const style = { color: 'rgba(0, 0, 0, 0.25)' }

const Config = {
  displayName: {
    rules: [{ required: true, message: 'Please input your name!' }],
    type: 'text',
    placeholder: 'Your name',
    Icon: () => <UserOutlined style={style} />
  },
  email: {
    rules: [{ required: true, message: 'Please input your email!' }],
    type: 'email',
    placeholder: 'Email',
    Icon: () => <MailOutlined style={style} />
  },
  password: {
    rules: [{ required: true, message: 'Please input your password!' }],
    type: 'password',
    placeholder: 'Password',
    Icon: () => <LockOutlined style={style} />
  }
}

const DefaultInput = ({
  inputName
}: { inputName : keyof typeof Config }) => {
  const { type, rules, placeholder, Icon } = Config[inputName]
  return <Form.Item name={inputName} rules={rules}>
    <Input type={type} prefix={<Icon />} placeholder={placeholder} />
  </Form.Item>
}

export default DefaultInput
