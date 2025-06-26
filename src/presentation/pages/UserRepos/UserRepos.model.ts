import {useAppSelector} from '~/application/redux/store'
import {AppRoutes} from '~/application/routes/routeConfig'
import {navigate} from '~/utils/navigator'

import {IUserRepos} from './UserRepos.types'

export const useUserRepos = (props: IUserRepos.IModelProps): IUserRepos.IModel => {
    const repos = useAppSelector(state => state.Repo.repos)

    const handleSubmit = (page: string) => {
        navigate(AppRoutes.RepoDetails, {page})
    }

    return {
        repos,
        handleSubmit
    }
}
