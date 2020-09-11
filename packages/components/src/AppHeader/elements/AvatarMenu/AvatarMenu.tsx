import React from 'react'

import { Menu } from 'antd'
import Link from 'next/link'

const { Item, Divider } = Menu

type Props = {
  signOut: () => void
}

const AvatarMenu: React.FC<Props> = ({ signOut }) => {
  return <Menu>
    <Item>
      <Link href="/app/settings">
        <a>Settings</a>
      </Link>
    </Item>
    <Divider />
    <Item onClick={signOut}>
      Sign Out
    </Item>
  </Menu>
}

export default AvatarMenu
