import * as React from 'react'
import {View, TouchableOpacity} from 'react-native'

import {IBox} from './Box.type'

export const Box = ({children, className, ...props}: IBox.IView) => {
    const Component = props.onPress ? TouchableOpacity : View
    return (
        <Component {...props} className={className}>
            {children}
        </Component>
    )
}
