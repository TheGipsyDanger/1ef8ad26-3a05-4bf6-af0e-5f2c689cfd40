import {IFilterOptions, IRepo} from '~/utils'

export type Root = {
    response: Response
    request: Request
}

type Response = IRepo[] & {}

type Request = {
    username: string
    sort?: IFilterOptions
}

export type IGetUserRepos = Root
