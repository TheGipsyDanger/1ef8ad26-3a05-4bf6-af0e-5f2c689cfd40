import * as React from 'react'
import {TouchableOpacity} from 'react-native'
import {ActivityIndicator} from 'react-native'

import {Div, Text} from '~/presentation/components/atoms'
import {twMerge} from 'tailwind-merge'

import {IButtonContainer, IButton} from './Button.types'

const Container = ({
    children,
    onPress,
    testID,
    className,
    loading = false,
    disabled = false,
    loadingColor = 'white'
}: IButtonContainer) => {
    return (
        <TouchableOpacity
            testID={testID}
            activeOpacity={0.7}
            onPress={onPress}
            disabled={disabled || loading}
        >
            <Div className={twMerge(`rounded-lg items-center justify-center h-[54px]`, className)}>
                {loading ? <ActivityIndicator color={loadingColor} /> : children}
            </Div>
        </TouchableOpacity>
    )
}

export const Primary = ({label, ...props}: IButton.IView) => (
    <Container
        testID="ButtonPrimary"
        className={twMerge('bg-button-primary', props.disabled && 'opacity-40')}
        {...props}
    >
        <Text.GilroyBold className="text-white text-lg">{label}</Text.GilroyBold>
    </Container>
)

export const Success = ({label, ...props}: IButton.IView) => (
    <Container
        testID="ButtonSuccess"
        className={twMerge('bg-button-success', props.disabled && 'opacity-40')}
        {...props}
    >
        <Text.GilroyBold className="text-white text-lg">{label}</Text.GilroyBold>
    </Container>
)

export const Button = {
    Primary,
    Success
}
