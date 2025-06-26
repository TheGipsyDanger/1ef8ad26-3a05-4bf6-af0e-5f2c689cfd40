import {createSlice} from '@reduxjs/toolkit'
import {IRepo} from '~/utils'

export interface IRepoState {
    repos: IRepo[]
}

const initialState: IRepoState = {
    repos: []
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
        }
    }
})

export const {setRepos, clearRepos} = Repo.actions

export default Repo.reducer
