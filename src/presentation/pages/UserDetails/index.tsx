import * as React from 'react'
import {ImageBackground, Dimensions} from 'react-native'

import {ScreenLayout, Text, Div, Conditional} from '~/presentation/components'
import {Button} from '~/presentation/components/molecules/Button'

import {useUserDetails} from './UserDetails.model'
import {IUserDetails} from './UserDetails.types'

const {width} = Dimensions.get('window')

export const UserDetails = (props: IUserDetails.IView) => {
    const {user, handleSubmit} = useUserDetails({})

    const renderCustomInfos = (label: string, value: number) => (
        <Div className="items-center">
            <Text.GilroyBold className="mb-4">{label}</Text.GilroyBold>
            <Text.GilroyRegular className="text-text-blue">{value}</Text.GilroyRegular>
        </Div>
    )

    return (
        <ScreenLayout.Main>
            <ImageBackground source={{uri: user.avatar_url}} style={{width: width, height: width}}>
                <ScreenLayout.HeaderWithBack className="bg-transparent" iconColor="white" />
            </ImageBackground>
            <ScreenLayout.Body className="py-8 px-6 justify-between">
                <Div className="gap-4">
                    <Text.GilroyBold className="text-2xl text-text-primary">
                        {user.name}
                    </Text.GilroyBold>
                    <Conditional render={!!user.email}>
                        <Text.GilroyMedium className="text-text-secondary">{`• ${user.email}`}</Text.GilroyMedium>
                    </Conditional>
                    <Conditional render={!!user.bio}>
                        <Text.GilroyMedium
                            className="text-text-secondary"
                            numberOfLines={6}
                        >{`• ${user.bio}`}</Text.GilroyMedium>
                    </Conditional>
                    <Div className="flex-row items-center justify-center">
                        {renderCustomInfos('Followers', user.followers)}
                        <Div className="mx-8 h-[32px] w-[1px] bg-text-secondary" />
                        {renderCustomInfos('Following', user.following)}
                    </Div>
                </Div>
                <Button.Success label="See repositories" onPress={handleSubmit} />
            </ScreenLayout.Body>
        </ScreenLayout.Main>
    )
}
