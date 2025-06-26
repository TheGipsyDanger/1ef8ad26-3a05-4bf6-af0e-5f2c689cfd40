import * as React from 'react'

import {ScreenLayout, Div, Form, Text} from '~/presentation/components'
import {Button} from '~/presentation/components/molecules/Button'

import {useMain} from './Main.model'
import {IMain} from './Main.types'

export const Main = (props: IMain.IView) => {
    const {control, handleSubmit, isValid, isLoading} = useMain({})

    return (
        <Div className="flex-1" testID="Main">
            <ScreenLayout.Main>
                <ScreenLayout.MainHeader avatar="https://avatars.githubusercontent.com/u/22872282?v=4" />
                <ScreenLayout.BodyScroll>
                    <Text.GilroyBold className="text-text-primary text-2xl px-8 gap-6 mt-12">
                        Find
                        <Text.GilroyRegular className="text-text-secondary">
                            {' '}
                            a dev
                        </Text.GilroyRegular>
                    </Text.GilroyBold>

                    <Div className="px-8 gap-6 mt-12">
                        <Form.Controller
                            control={control}
                            name="input"
                            render={({field: {onChange, value}, formState: {errors}}) => {
                                return (
                                    <Form.Input
                                        testID="DevInput"
                                        placeholder={'Search a dev'}
                                        error={errors?.input?.message}
                                        value={value}
                                        onChangeText={onChange}
                                    />
                                )
                            }}
                        />
                        <Button.Primary
                            label="Find"
                            onPress={handleSubmit}
                            disabled={!isValid}
                            loading={isLoading}
                        />
                    </Div>
                </ScreenLayout.BodyScroll>
            </ScreenLayout.Main>
        </Div>
    )
}
