import {useMutation} from '@tanstack/react-query'
import {CustomMutationOptions} from '~/utils'

import {usersService} from '../services'
import {IGetUserInfos} from '../types/GetUserInfos.types'

const useGetUserInfos = ({
    onError,
    onSuccess
}: CustomMutationOptions<IGetUserInfos['response']>) => {
    const {mutateAsync, isLoading, error, isError} = useMutation({
        mutationFn: (props: IGetUserInfos['request']) => usersService.getUserInfos(props),
        onSuccess,
        onError
    })

    return {
        mutateAsync,
        isLoading,
        error,
        isError
    }
}

export {useGetUserInfos}
