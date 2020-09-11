import React from 'react'

import { Layout, Menu, Dropdown, Avatar } from 'antd'
import Link from 'next/link'
import { useUser, useSignOut } from '@evermod/utils/graphql'
import AvatarMenu from './elements/AvatarMenu'
import Logo from './Logo.png'

const { Header } = Layout
const { Item } = Menu

const AppHeader: React.FC = () => {
  const { data, loading } = useUser()
  const [signOut] = useSignOut()
  console.log(signOut)
  const { user } = data || {}
  if (!user) return null
  return <Header>
    <Menu theme="light" mode="horizontal" selectable={false}>
      <Item><Link href="/app"><img src={Logo} height={40} /></Link></Item>
      <Item style={ { float: 'right' }}>
        {!loading && <Dropdown overlay={AvatarMenu({ signOut })} placement="bottomCenter">
          <Avatar src={user.photoURL} style={{ right: 0 }}>
            {user.displayName[0]}
          </Avatar>
        </Dropdown>}
      </Item>
    </Menu>
  </Header>
}

export default AppHeader
