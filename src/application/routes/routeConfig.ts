import {type NavigationProp, type RouteProp} from '@react-navigation/native'

export enum AppRoutes {
    Main = 'Main',
    UserDetails = 'UserDetails',
    UserRepos = 'UserRepos',
    RepoDetails = 'RepoDetails'
}

export type RootParamListT = {
    [AppRoutes.Main]: undefined
    [AppRoutes.UserDetails]: undefined
    [AppRoutes.UserRepos]: {repoName: string}
    [AppRoutes.RepoDetails]: {page: string}
}

export const AppRouteNames = Object.keys(
    AppRoutes
) as unknown as keyof typeof AppRoutes as keyof RootParamListT

export type IAppRouteNames = typeof AppRouteNames

export type INavigate = NavigationProp<IAppRouteNames>
export type IRoute = RouteProp<RootParamListT>
