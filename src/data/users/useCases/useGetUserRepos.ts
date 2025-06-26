import {useMutation} from '@tanstack/react-query'
import {CustomMutationOptions} from '~/utils'

import {usersService} from '../services'
import {IGetUserRepos} from '../types/GetUserRepos.types'

const useGetUserRepos = ({
    onError,
    onSuccess
}: CustomMutationOptions<IGetUserRepos['response']>) => {
    const {mutateAsync, isLoading, error, isError} = useMutation({
        mutationFn: (props: IGetUserRepos['request']) => usersService.getUserRepos(props),
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

export {useGetUserRepos}
