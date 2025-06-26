import {IUser} from '~/utils'

export namespace IUserDetails {
    export interface IView {}
    export interface IModelProps {}
    export interface IModel {
        user: IUser
        handleSubmit: VoidFunction
    }
}
