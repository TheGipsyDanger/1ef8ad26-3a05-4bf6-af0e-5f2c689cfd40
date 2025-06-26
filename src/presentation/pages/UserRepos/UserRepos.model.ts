import {useEffect} from 'react'

import {setRepos} from '~/application/redux/reducers/Repo'
import {useAppDispatch, useAppSelector} from '~/application/redux/store'
import {AppRoutes} from '~/application/routes/routeConfig'
import {useGetUserRepos} from '~/data/users/useCases/useGetUserRepos'
import {navigate} from '~/utils/navigator'

import {IUserRepos} from './UserRepos.types'

export const useUserRepos = (props: IUserRepos.IModelProps): IUserRepos.IModel => {
    const {repos, filter} = useAppSelector(state => state.Repo)
    const user = useAppSelector(state => state.User.user)

    const dispatch = useAppDispatch()

    const handleSubmit = (page: string) => {
        navigate(AppRoutes.RepoDetails, {page})
    }

    const {mutateAsync: getUserRepos, isLoading} = useGetUserRepos({
        onSuccess: data => {
            dispatch(setRepos(data))
            navigate(AppRoutes.UserRepos)
        },
        onError: () => {
            alert('Error on fetching repositories')
        }
    })

    useEffect(() => {
        getUserRepos({username: user.login, sort: filter})
    }, [filter])

    return {
        repos,
        isLoading,
        handleSubmit
    }
}
