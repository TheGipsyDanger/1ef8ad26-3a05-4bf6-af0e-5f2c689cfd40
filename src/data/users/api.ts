import {API} from '~/application/configs'

import {IGetUserInfos} from './types/GetUserInfos.types'
import {IGetUserRepos} from './types/GetUserRepos.types'

const getUserInfos = async ({
    username
}: IGetUserInfos['request']): Promise<IGetUserInfos['response']> => {
    const {data} = await API.get<IGetUserInfos['response']>(`/users/${username}`)
    return data
}

const getUserRepos = async ({
    username,
    sort = 'created'
}: IGetUserRepos['request']): Promise<IGetUserRepos['response']> => {
    const params = new URLSearchParams()

    params.append('per_page', '100')

    if (sort) params.append('sort', sort)

    const queryString = params.toString()

    const url = `/users/${username}/repos${queryString ? `?${queryString}` : ''}`

    const {data} = await API.get<IGetUserRepos['response']>(url)

    return data
}

export const usersApi = {
    getUserInfos,
    getUserRepos
}
