
import { Form, Input, Skeleton, Button } from 'antd'

import { useUser, useUpdateUser } from '@evermod/utils/graphql'

import Avatar from './elements/Avatar'

const { Item } = Form

const SettingsForm = () => {
  const { data, loading } = useUser()
  const { user } = data || {}
  const { displayName, photoURL } = user || {}
  const [updateUser, { loading: mutationLoading }] = useUpdateUser()

  if (loading) return <Skeleton />

  return <Form initialValues={{ displayName, photoURL }} onFinish={v => {
    console.log(v)
    updateUser({ variables: { patch: v } })
  }}>
    <Item
      label="Name"
      name="displayName"
      required={false}
      rules={[{ required: true, message: 'Please input your name!' }]}
    >
      <Input />
    </Item>
    <Avatar />
    <Item>
      <Button loading={mutationLoading} type="primary" htmlType="submit">Update</Button>
    </Item>
  </Form>
}

export default SettingsForm
