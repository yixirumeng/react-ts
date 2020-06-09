import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { changeCollasped } from '@/store/common/actions'
import { IRootStore } from '@/store/types'

function Header() {
    const dispatch = useDispatch()
    const { collapsed } = useSelector(({ commonReducer }: IRootStore) => ({ ...commonReducer }))
    const handleTrigger = () => {
        dispatch(changeCollasped())
    }

    return (
        <div>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: handleTrigger
            })}
        </div>
    )
}

export default Header
