import {TextInputProps} from 'react-native'

export namespace IForm {
    export interface IInput {
        placeholder: string
        error?: string
        value: string
        mask?: string
        testID: string
        textInputProps?: TextInputProps
        onChangeText: (value: string) => void
    }
    export interface ILabel extends Pick<IInput, 'error'> {}
    export interface IError extends Pick<IInput, 'error'> {}
    export interface ICustomInputContainer
        extends Omit<IInput, 'label'>,
            Pick<IInputContainer, 'isFocused'> {
        setIsFocused: (value: boolean) => void
        isVisible?: boolean
    }
    export interface IInputContainer extends Pick<IInput, 'error'> {
        isFocused: boolean
        children: React.ReactNode
    }
    export interface IView {}
    export interface IModelProps {}
    export interface IModel {}
}
