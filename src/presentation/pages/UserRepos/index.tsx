import * as React from 'react'
import {useCallback, useMemo} from 'react'
import {FlatList, ListRenderItem, Image} from 'react-native'

import FontAwesome from '@expo/vector-icons/FontAwesome'
import {ScreenLayout, Text, Div, Conditional} from '~/presentation/components'
import {IRepo} from '~/utils'

import {useUserRepos} from './UserRepos.model'
import {IUserRepos} from './UserRepos.types'

export const UserRepos = (props: IUserRepos.IView) => {
    const {repos, handleSubmit} = useUserRepos({})

    const renderRepoStatus = (count: number, icon: 'code-fork' | 'star-o') => {
        return (
            <Div className="flex-row items-center gap-1">
                <FontAwesome name={icon} size={14} color="black" />
                <Text.GilroyRegular className="text-sm text-text-secondary">
                    {count}
                </Text.GilroyRegular>
            </Div>
        )
    }

    const renderItem: ListRenderItem<IRepo> = ({item}) => (
        <Div onPress={() => handleSubmit(item.html_url)} className="gap-2">
            <Div className="flex-row items-center gap-2">
                <Div className="size-20 rounded-full bg-background-gray">
                    <Image
                        source={{uri: item.owner.avatar_url}}
                        className="size-full rounded-full"
                    />
                </Div>
                <Div className="gap-2 px-4 flex-1">
                    <Text.GilroyRegular numberOfLines={1}>{item.name}</Text.GilroyRegular>
                    <Conditional render={!!item.description}>
                        <Text.GilroyRegular
                            numberOfLines={1}
                            className="text-sm text-text-secondary"
                        >
                            {`• ${item.description}`}
                        </Text.GilroyRegular>
                        <Div />
                    </Conditional>
                    <Div className="flex-row items-center gap-2 justify-between">
                        <Conditional render={!!item.language}>
                            <Div className="flex-row items-center gap-1">
                                <Div className="size-2 rounded-full bg-background-green" />
                                <Text.GilroyRegular
                                    className="text-sm text-text-secondary"
                                    numberOfLines={1}
                                >
                                    {item.language}
                                </Text.GilroyRegular>
                            </Div>
                            <Div />
                        </Conditional>
                        <Div className="flex-row items-center gap-2">
                            {renderRepoStatus(item.forks_count, 'code-fork')}
                            {renderRepoStatus(item.stargazers_count, 'star-o')}
                        </Div>
                    </Div>
                </Div>
            </Div>
        </Div>
    )

    const keyExtractor = useMemo(() => (item: IRepo, index: number) => `${item.id}-${index}`, [])

    const memoizedRenderItem = useCallback(renderItem, [])

    return (
        <ScreenLayout.Main>
            <ScreenLayout.HeaderWithBack />
            <ScreenLayout.Body className="px-6">
                <Text.GilroyBold className="text-2xl text-text-primary mb-6">{`Repositories`}</Text.GilroyBold>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={repos}
                    renderItem={memoizedRenderItem}
                    keyExtractor={keyExtractor}
                    ItemSeparatorComponent={() => <Div className="h-12" />}
                />
            </ScreenLayout.Body>
        </ScreenLayout.Main>
    )
}
