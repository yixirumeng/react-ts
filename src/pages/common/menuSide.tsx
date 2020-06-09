import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'
import { IMenuProps, IMenuConfig } from '@/types'

const { Item: MenuItem, SubMenu } = Menu

const renderMenu = (data: IMenuConfig[]) =>
    data.map(item => {
        const { icon, name, redirect, routes, path } = item
        if (redirect) {
            return null
        }
        if (routes) {
            return <SubMenu icon={icon}>{renderMenu(routes)}</SubMenu>
        }
        return (
            <MenuItem icon={icon} key={`${path}`}>
                <Link to={`${path}`}>{name}</Link>
            </MenuItem>
        )
    })

const MenuSide: React.FC<IMenuProps> = ({ menuData }) => {
    return (
        <Fragment>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['/welcome']}>
                {menuData && renderMenu(menuData)}
            </Menu>
        </Fragment>
    )
}

export default MenuSide
