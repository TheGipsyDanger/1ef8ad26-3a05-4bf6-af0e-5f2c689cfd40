import {usersApi} from './api'
import {IGetUserInfos} from './types/GetUserInfos.types'
import {IGetUserRepos} from './types/GetUserRepos.types'

const getUserInfos = async (
    props: IGetUserInfos['request']
): Promise<IGetUserInfos['response']> => {
    const data = await usersApi.getUserInfos(props)
    return data
}

const getUserRepos = async (
    props: IGetUserRepos['request']
): Promise<IGetUserRepos['response']> => {
    const data = await usersApi.getUserRepos(props)
    return data
}

export const usersService = {
    getUserInfos,
    getUserRepos
}
