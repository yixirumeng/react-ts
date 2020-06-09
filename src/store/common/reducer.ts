import { Reducer } from 'redux'
import { ICommonStoreState, ICommonStoreAction } from '../types'
import { CHANGE_COLLASPED } from './actionTypes'

const initialState: ICommonStoreState = {
    collapsed: false
}

const commonReducer: Reducer<ICommonStoreState, ICommonStoreAction> = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_COLLASPED:
            return { ...state, collapsed: !state.collapsed }
        default:
            return state
    }
}

export default commonReducer
