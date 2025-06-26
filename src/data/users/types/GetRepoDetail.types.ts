import {IRepo} from '~/utils'

export type Root = {
    response: Response
    request: Request
}

type Response = IRepo[] & {}

type Request = {
    repoName: string
}

export type IGetRepoDetail = Root
