import {useSafeAreaInsets} from 'react-native-safe-area-context'

import {goBack} from '~/utils'

import {IScreenLayout} from './ScreenLayout.types'

export const useScreenLayout = (): IScreenLayout.IModel => {
    const {top, bottom} = useSafeAreaInsets()

    return {
        top,
        bottom,
        goBack
    }
}
