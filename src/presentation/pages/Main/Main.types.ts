import {Control} from 'react-hook-form'

import {SearchSchemaFormType} from '~/application/forms'

export namespace IMain {
    export interface IView {}
    export interface IModelProps {}
    export interface IModel {
        control: Control<SearchSchemaFormType>
        handleSubmit: VoidFunction
        isValid: boolean
        isLoading: boolean
    }
}
