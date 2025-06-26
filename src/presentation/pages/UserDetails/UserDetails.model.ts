import {setRepos} from '~/application/redux/reducers/Repo'
import {useAppDispatch, useAppSelector} from '~/application/redux/store'
import {useGetUserRepos} from '~/data/users/useCases/useGetUserRepos'
import {AppRoutes, navigate} from '~/utils/navigator'

import {IUserDetails} from './UserDetails.types'

export const useUserDetails = (props: IUserDetails.IModelProps): IUserDetails.IModel => {
    const user = useAppSelector(state => state.User.user)

    const dispatch = useAppDispatch()

    if (!user) {
        navigate(AppRoutes.Main)
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

    const handleSubmit = () => {
        getUserRepos({username: user.login})
    }

    return {
        user,
        handleSubmit,
        isLoading
    }
}
