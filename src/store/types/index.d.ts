export interface IRootStore {
    commonReducer: ICommonStoreState
}

export interface ICommonStoreState {
    collapsed: boolean
}

export interface ICommonStoreAction {
    type: Symbol
    payload: ICommonStoreState
}
