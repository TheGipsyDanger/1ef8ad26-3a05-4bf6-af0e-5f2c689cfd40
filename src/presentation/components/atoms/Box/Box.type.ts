import {StyleProp, ViewStyle} from 'react-native'

import {withChildren} from '~/utils'

export namespace IBox {
    export interface IView extends withChildren {
        testID?: string
        className?: string
        onPress?(): void
        hitSlop?: number
        style?: StyleProp<ViewStyle>
    }
    export interface IModelProps {}
    export interface IModel {}
}
