import {RouteProp} from '@react-navigation/native'
import {AppRoutes, RootParamListT} from '~/application/routes/routeConfig'

export namespace IRepoDetails {
    export interface IView {
        route: RouteProp<RootParamListT, AppRoutes.RepoDetails>
    }
    export interface IModelProps {}
    export interface IModel {}
}
