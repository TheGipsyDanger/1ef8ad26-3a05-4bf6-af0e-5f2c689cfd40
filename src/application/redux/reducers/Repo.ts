import {createSlice} from '@reduxjs/toolkit'
import {IRepo, IFilterOptions} from '~/utils'

export interface IRepoState {
    repos: IRepo[]
    filter: IFilterOptions
}

const initialState: IRepoState = {
    repos: [],
    filter: 'created'
}

const Repo = createSlice({
    name: 'Repo',
    initialState,
    reducers: {
        setRepos: (state, {payload}) => {
            state.repos = payload
        },
        clearRepos: state => {
            state.repos = initialState.repos
        },
        setFilter: (state, {payload}) => {
            state.filter = payload
        },
        clearFilter: state => {
            state.filter = initialState.filter
        }
    }
})

export const {setRepos, clearRepos, setFilter, clearFilter} = Repo.actions

export default Repo.reducer
