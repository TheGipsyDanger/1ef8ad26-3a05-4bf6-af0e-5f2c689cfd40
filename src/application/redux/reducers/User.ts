import {createSlice} from '@reduxjs/toolkit'
import {IUser} from '~/utils'

export interface IUserState {
    user: IUser
}

const initialState: IUserState = {
    user: {
        login: 'TheGipsyDanger',
        id: 22872282,
        node_id: 'MDQ6VXNlcjIyODcyMjgy',
        avatar_url: 'https://avatars.githubusercontent.com/u/22872282?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/TheGipsyDanger',
        html_url: 'https://github.com/TheGipsyDanger',
        followers_url: 'https://api.github.com/users/TheGipsyDanger/followers',
        following_url: 'https://api.github.com/users/TheGipsyDanger/following{/other_user}',
        gists_url: 'https://api.github.com/users/TheGipsyDanger/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/TheGipsyDanger/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/TheGipsyDanger/subscriptions',
        organizations_url: 'https://api.github.com/users/TheGipsyDanger/orgs',
        repos_url: 'https://api.github.com/users/TheGipsyDanger/repos',
        events_url: 'https://api.github.com/users/TheGipsyDanger/events{/privacy}',
        received_events_url: 'https://api.github.com/users/TheGipsyDanger/received_events',
        type: 'User',
        user_view_type: 'public',
        site_admin: false,
        name: 'Renan H',
        company: 'vindicce',
        blog: '',
        location: 'Rio de janeiro',
        email: null,
        hireable: null,
        bio: 'Software engineer with Rails and React technologies. Creator of the vindicce template for react native. Future billionaire.',
        twitter_username: null,
        public_repos: 27,
        public_gists: 97,
        followers: 41,
        following: 23,
        created_at: '2016-10-16T17:19:40Z',
        updated_at: '2025-05-25T16:58:15Z'
    }
}

const User = createSlice({
    name: 'User',
    initialState,
    reducers: {
        setUser: (state, {payload}) => {
            state.user = payload
        },
        clearUser: state => {
            state.user = initialState.user
        }
    }
})

export const {setUser, clearUser} = User.actions

export default User.reducer
