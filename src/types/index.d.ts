import React from 'react'
import { RouteConfig } from 'react-router-config'

export interface IMenuProps {
    menuData?: IMenuConfig[]
}

export interface IMenuConfig extends RouteConfig {
    icon?: React.CElement
    redirect?: string
    routes?: IMenuConfig[]
}
