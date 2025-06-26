import {IUser} from '~/utils'

export type Root = {
    response: Response
    request: Request
}

type Response = IUser & {}

type Request = {
    username: string
}

export type IGetUserInfos = Root
