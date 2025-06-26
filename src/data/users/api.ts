import {API} from '~/application/configs'

import {IGetRepoDetail} from './types/GetRepoDetail.types'
import {IGetUserInfos} from './types/GetUserInfos.types'
import {IGetUserRepos} from './types/GetUserRepos.types'

const getUserInfos = async ({
    username
}: IGetUserInfos['request']): Promise<IGetUserInfos['response']> => {
    const {data} = await API.get<IGetUserInfos['response']>(`/users/${username}`)
    return data
}

const getUserRepos = async ({
    username
}: IGetUserRepos['request']): Promise<IGetUserRepos['response']> => {
    const {data} = await API.get<IGetUserRepos['response']>(`/users/${username}/repos`)
    return data
}

const getRepoDetail = async ({
    repoName
}: IGetRepoDetail['request']): Promise<IGetRepoDetail['response']> => {
    const {data} = await API.get<IGetRepoDetail['response']>(`/repos/${repoName}`)
    return data
}

export const usersApi = {
    getUserInfos,
    getUserRepos,
    getRepoDetail
}
