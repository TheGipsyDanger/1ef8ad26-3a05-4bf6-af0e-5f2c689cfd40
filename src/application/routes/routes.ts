import {createStaticNavigation} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import * as views from '~/presentation/pages'

// @ts-ignore
const routes = Object.keys(views).map(view => ({[view]: views[view]}))

const screens = routes.reduce((acc, item) => {
    const [key, value] = Object.entries(item)[0]
    acc[key] = value
    return acc
}, {})

const Stack = createNativeStackNavigator({
    initialRouteName: 'UserDetails',
    screenOptions: {
        headerShown: false
    },
    screens
})

export const Routes = createStaticNavigation(Stack)
