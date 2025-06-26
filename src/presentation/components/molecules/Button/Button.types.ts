import {ColorValue} from 'react-native'

import {withChildren} from '~/utils'

export namespace IButton {
    export interface IView {
        onPress: VoidFunction
        label: string
        loading?: boolean
        loadingColor?: ColorValue
        disabled?: boolean
        leftIcon?: React.ReactNode
        rightIcon?: React.ReactNode
        type?: 'default' | 'slim'
    }
    export interface IModelProps {}
    export interface IModel {}
}

export interface IButtonContainer extends withChildren, Omit<IButton.IView, 'label'> {
    children: React.ReactNode
    testID: string
    className?: string
}
