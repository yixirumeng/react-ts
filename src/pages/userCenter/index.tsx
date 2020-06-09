import React, { FC, Fragment } from 'react'
import { Table, Tag, Space } from 'antd'

type tagType = 'nice' | 'developer' | 'loser' | 'cool' | 'teacher'

interface IUserData {
    key: string
    name: string
    age: number
    address: string
    tags: tagType[]
}

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age'
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address'
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: (tags: tagType[]) => (
            <Fragment>
                {tags.map(tag => {
                    let color = tag.length > 5 ? 'geekblue' : 'green'
                    if (tag === 'loser') {
                        color = 'volcano'
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    )
                })}
            </Fragment>
        )
    },
    {
        title: 'Action',
        key: 'action',
        render: (record: IUserData) => (
            <Space size="middle">
                <span>Invite {record.name}</span>
                <span>Delete</span>
            </Space>
        )
    }
]

const data: IUserData[] = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer']
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser']
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher']
    }
]

const UserCenter: FC = () => {
    return <Table columns={columns} dataSource={data} />
}

export default UserCenter
