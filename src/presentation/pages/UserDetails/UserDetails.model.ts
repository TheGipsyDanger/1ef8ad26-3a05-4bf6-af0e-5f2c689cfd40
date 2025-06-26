import {useAppSelector} from '~/application/redux/store'
import {AppRoutes, navigate} from '~/utils/navigator'

import {IUserDetails} from './UserDetails.types'

export const useUserDetails = (props: IUserDetails.IModelProps): IUserDetails.IModel => {
    const user = useAppSelector(state => state.User.user)

    if (!user) {
        navigate(AppRoutes.Main)
    }

    const handleSubmit = () => {
        navigate(AppRoutes.UserRepos)
    }

    return {
        user,
        handleSubmit
    }
}
