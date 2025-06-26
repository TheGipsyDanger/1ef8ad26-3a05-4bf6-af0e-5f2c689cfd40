import {createRef} from 'react'

import {CommonActions, type NavigationContainerRef} from '@react-navigation/native'
import {DrawerActions} from '@react-navigation/native'
import {type RootParamListT, AppRoutes} from '~/application/routes/routeConfig'

export const navigationRef = createRef<NavigationContainerRef<RootParamListT>>()

type IRouteNamesToNavigate = keyof RootParamListT

export const navigate = (name: IRouteNamesToNavigate, params?: any) =>
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    navigationRef.current?.navigate(name, params)

export const reset = (route: string) =>
    navigationRef.current?.dispatch(CommonActions.reset({index: 0, routes: [{name: route}]}))

export const openDrawer = () => navigationRef.current?.dispatch(DrawerActions.openDrawer)

export const goBack = () => navigationRef.current?.goBack()

export {AppRoutes}
