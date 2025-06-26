import {IRepo} from '~/utils'

export namespace IUserRepos {
    export interface IView {}
    export interface IModelProps {}
    export interface IModel {
        repos: IRepo[]
        handleSubmit: (repoName: string) => void
        isLoading: boolean
    }
}
