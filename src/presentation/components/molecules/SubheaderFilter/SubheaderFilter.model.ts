import {Alert} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'

import {setFilter} from '~/application/redux/reducers/Repo'
import {RootState} from '~/application/redux/store'
import {IFilterOptions} from '~/utils'

import {ISubheaderFilter} from './SubheaderFilter.types'

export const useSubheaderFilter = (
    props: ISubheaderFilter.IModelProps
): ISubheaderFilter.IModel => {
    const dispatch = useDispatch()

    const filter = useSelector((state: RootState) => state.Repo.filter)

    const handleFilter = (filter: IFilterOptions) => {
        dispatch(setFilter(filter))
    }

    const defineLabel = (filter: IFilterOptions) => {
        const labels = {
            created: 'Created',
            updated: 'Updated',
            pushed: 'Pushed',
            full_name: 'Full Name',
            stargazers_count: 'Stargazers Count'
        }

        return labels[filter]
    }

    const handleFilterOpenOptions = () => {
        Alert.alert('Filter Options', '', [
            {
                text: 'Created',
                onPress: () => handleFilter('created')
            },
            {
                text: 'Updated',
                onPress: () => handleFilter('updated')
            },
            {
                text: 'Pushed',
                onPress: () => handleFilter('pushed')
            },
            {
                text: 'Full Name',
                onPress: () => handleFilter('full_name')
            },
            {
                text: 'Stargazers Count',
                onPress: () => handleFilter('stargazers_count')
            }
        ])
    }

    return {
        handleFilterOpenOptions,
        filterLabel: defineLabel(filter)
    }
}
