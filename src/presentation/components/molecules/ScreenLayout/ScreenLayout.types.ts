import {withChildren} from '~/utils'

export namespace IScreenLayout {
    export interface IView extends withChildren {
        className?: string
        hasBottom?: boolean
    }
    export interface ISafeArea extends IView {
        hasTop?: boolean
        hasBottom?: boolean
    }
    export interface IHeader extends withChildren {
        label: string
        className?: string
        textClassName?: string
        iconColor?: 'black' | 'white'
    }

    export interface IHeaderWithBack extends Pick<IHeader, 'className' | 'iconColor'> {}

    export interface IMainHeader {
        avatar: string
    }

    export interface IHeaderWitchAction extends IHeader, withChildren {
        handleAction: VoidFunction
        icon: JSX.Element
    }

    export interface IModelProps {}
    export interface IModel {
        top: number
        bottom: number
        goBack: VoidFunction
    }
}
