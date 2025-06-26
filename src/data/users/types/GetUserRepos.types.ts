import {IRepo} from '~/utils'

export type Root = {
    response: Response
    request: Request
}

type Response = IRepo[] & {}

type Request = {
    username: string
}

export type IGetUserRepos = Root
