import * as React from 'react'
import {WebView} from 'react-native-webview'

import {ScreenLayout, Text} from '~/presentation/components'

import {IRepoDetails} from './RepoDetails.types'

export const RepoDetails = (props: IRepoDetails.IView) => {
    const {page} = props.route.params

    return (
        <ScreenLayout.Main>
            <ScreenLayout.HeaderWithBack />
            <ScreenLayout.Body>
                <Text.GilroyBold className="px-6 text-2xl text-text-primary mb-6">{`Details`}</Text.GilroyBold>
                <WebView className="flex-1" source={{uri: page}} />
            </ScreenLayout.Body>
        </ScreenLayout.Main>
    )
}
