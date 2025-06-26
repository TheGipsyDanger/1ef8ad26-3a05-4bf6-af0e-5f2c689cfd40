import {SubmitHandler, useForm} from 'react-hook-form'

import {zodResolver} from '@hookform/resolvers/zod'
import {SearchSchemaFormType, SearchSchemaValidation} from '~/application/forms'
import {setUser, clearUser} from '~/application/redux/reducers/User'
import {useAppDispatch} from '~/application/redux/store'
import {useGetUserInfos} from '~/data/users/useCases/useGetUserInfos'
import {AppRoutes, navigate} from '~/utils/navigator'

import {IMain} from './Main.types'

export const useMain = (props: IMain.IModelProps): IMain.IModel => {
    const dispatch = useAppDispatch()
    const {
        control,
        handleSubmit,
        formState: {isValid}
    } = useForm<SearchSchemaFormType>({
        defaultValues: {
            input: ''
        },
        mode: 'onSubmit',
        resolver: zodResolver(SearchSchemaValidation)
    })

    const {mutateAsync: getUserInfos, isLoading} = useGetUserInfos({
        onSuccess: data => {
            dispatch(setUser(data))
            navigate(AppRoutes.UserDetails)
        },
        onError: error => {
            alert('User not found')
            dispatch(clearUser())
        }
    })

    const onSubmit: SubmitHandler<SearchSchemaFormType> = async ({input}) => {
        await getUserInfos({username: input})
    }

    return {
        control,
        handleSubmit: handleSubmit(onSubmit),
        isValid,
        isLoading
    }
}
