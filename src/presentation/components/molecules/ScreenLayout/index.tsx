import * as React from 'react'
import {ScrollView, KeyboardAvoidingView, Platform, Image} from 'react-native'

import FeatherIcons from '@expo/vector-icons/Feather'
import {Div} from '~/presentation/components/atoms'
import {twMerge} from 'tailwind-merge'

import {useScreenLayout} from './ScreenLayout.model'
import {IScreenLayout} from './ScreenLayout.types'

export const HeaderWithBack = ({className, iconColor = 'black'}: IScreenLayout.IHeaderWithBack) => {
    const {top, goBack} = useScreenLayout()
    return (
        <Div>
            <Div
                className={twMerge('min-h-[56px] bg-white justify-center', className)}
                style={{marginTop: top}}
            >
                <Div className="flex-row items-center justify-between px-4">
                    <Div onPress={goBack} hitSlop={10}>
                        <FeatherIcons name={'arrow-left'} size={24} color={iconColor} />
                    </Div>
                </Div>
            </Div>
        </Div>
    )
}

export const MainHeader = ({avatar}: IScreenLayout.IMainHeader) => {
    const {top} = useScreenLayout()
    return (
        <Div style={{marginTop: top}} className="flex-row items-center justify-between px-8">
            <Div />
            <Div onPress={() => {}} className="size-16 rounded-full bg-gray-300">
                <Image
                    source={{uri: avatar}}
                    resizeMode="contain"
                    className="size-full rounded-full"
                />
            </Div>
        </Div>
    )
}

export const Main = ({children, className}: IScreenLayout.IView) => (
    <Div className={twMerge('flex-1 bg-white', className)}>{children}</Div>
)

export const Body = ({children, className}: IScreenLayout.IView) => {
    const {bottom} = useScreenLayout()
    return (
        <Div className={twMerge('flex-1', className)} style={{paddingBottom: bottom}}>
            {children}
        </Div>
    )
}

export const SafeArea = ({
    children,
    className,
    hasTop = true,
    hasBottom = true
}: IScreenLayout.ISafeArea) => {
    const {bottom, top} = useScreenLayout()
    return (
        <Div
            className={twMerge('flex-1', className)}
            style={{paddingBottom: hasBottom ? bottom : 0, paddingTop: hasTop ? top : 0}}
        >
            {children}
        </Div>
    )
}

export const BodyScroll = ({children, className, hasBottom = true}: IScreenLayout.IView) => {
    const {bottom} = useScreenLayout()
    return (
        <KeyboardAvoidingView
            className="flex-1"
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerClassName={twMerge('flex-grow-1', className)}
                contentContainerStyle={{paddingBottom: hasBottom ? bottom : 0}}
                showsVerticalScrollIndicator={false}
            >
                {children}
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export const ScreenLayout = {
    HeaderWithBack,
    MainHeader,
    Main,
    Body,
    SafeArea,
    BodyScroll
}
