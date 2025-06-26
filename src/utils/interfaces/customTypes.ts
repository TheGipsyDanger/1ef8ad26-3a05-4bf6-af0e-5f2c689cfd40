export type withChildren<T = {}> = T & {children?: React.ReactNode}
export type StringToNumberMapcd = {[key: string]: number}
export type IModalType = {[key: string]: JSX.Element}
export type IInsets = {top: number; bottom: number}
export type IStringMap = {[key: string]: string}
export type StringToNumberMap = {[key: string]: number}

export interface IBaseResponse {
    message?: string
    status: 'Ok' | 'Error'
}
