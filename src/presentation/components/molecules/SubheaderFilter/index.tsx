import * as React from 'react'

import {Div, Text} from '~/presentation/components/atoms'

import {useSubheaderFilter} from './SubheaderFilter.model'
import {ISubheaderFilter} from './SubheaderFilter.types'

export const SubheaderFilter = (props: ISubheaderFilter.IView) => {
    const {filterLabel, handleFilterOpenOptions} = useSubheaderFilter(props)

    return (
        <Div
            onPress={handleFilterOpenOptions}
            className="flex-row items-center justify-end"
            testID={`SubheaderFilter`}
        >
            <Text.GilroyRegular className="text-text-secondary">{`Filter by: `}</Text.GilroyRegular>
            <Text.GilroyMedium>{filterLabel}</Text.GilroyMedium>
        </Div>
    )
}
