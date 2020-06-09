import { combineReducers } from 'redux'
import { IRootStore } from './types'
import commonReducer from './common/reducer'

const reducers = {
    commonReducer
}

export default combineReducers<IRootStore>(reducers)
