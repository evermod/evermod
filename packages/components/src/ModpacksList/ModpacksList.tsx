/* eslint-disable camelcase */
import React from 'react'

import { Table } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import { GetModpacks_modpacks } from '@evermod/utils/graphql'

const columns: ColumnsType<GetModpacks_modpacks> = [{
  title: 'Name',
  dataIndex: 'name'
}, {
  title: 'Version',
  dataIndex: 'version'
}, {
  title: 'Author',
  dataIndex: ['author', 'displayName']
}]

type Props = {
  loading: boolean,
  modpacks: GetModpacks_modpacks[]
}

const ModpacksList: React.FC<Props> = ({ loading, modpacks }) => {
  return <Table dataSource={modpacks} loading={loading} columns={[...columns]} />
}

export default ModpacksList
