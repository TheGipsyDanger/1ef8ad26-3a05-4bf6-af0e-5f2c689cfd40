import {useMutation} from '@tanstack/react-query'
import {CustomMutationOptions} from '~/utils'

import {usersService} from '../services'
import {IGetRepoDetail} from '../types/GetRepoDetail.types'

const useGetRepoDetail = ({
    onError,
    onSuccess
}: CustomMutationOptions<IGetRepoDetail['response']>) => {
    const {mutateAsync, isLoading, error, isError} = useMutation({
        mutationFn: (props: IGetRepoDetail['request']) => usersService.getRepoDetail(props),
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

export {useGetRepoDetail}
