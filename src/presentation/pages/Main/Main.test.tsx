import * as React from 'react'
import {Provider} from 'react-redux'

import {QueryClientProvider} from '@tanstack/react-query'
import {render} from '@testing-library/react-native'
import {queryClient} from '~/application/configs'
import store from '~/application/redux/store'

import {Main} from './'

// Mock useSafeAreaInsets
jest.mock('react-native-safe-area-context', () => ({
    useSafeAreaInsets: () => ({
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    }),
    SafeAreaProvider: ({children}: {children: React.ReactNode}) => children
}))

describe('Render Button', () => {
    it('Should be Main Screen exist', () => {
        const Component = () => (
            <Provider store={store}>
                <QueryClientProvider client={queryClient}>
                    <Main />
                </QueryClientProvider>
            </Provider>
        )

        const {getByTestId} = render(<Component />)
        const currentElement = getByTestId(`Main`)
        expect(currentElement).toBeTruthy()
    })

    it('Should be Main Screen all componentsexist', () => {
        const Component = () => (
            <Provider store={store}>
                <QueryClientProvider client={queryClient}>
                    <Main />
                </QueryClientProvider>
            </Provider>
        )

        const {getByTestId} = render(<Component />)
        const screenElement = getByTestId(`Main`)
        expect(screenElement).toBeTruthy()

        const buttonElement = getByTestId(`ButtonPrimary`)
        expect(buttonElement).toBeTruthy()

        const inputElement = getByTestId(`DevInput`)
        expect(inputElement).toBeTruthy()
    })
})
