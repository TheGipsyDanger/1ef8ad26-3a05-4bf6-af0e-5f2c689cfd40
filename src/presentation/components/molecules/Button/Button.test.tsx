import * as React from 'react'

import {fireEvent, render} from '@testing-library/react-native'

import {Button} from './'

describe('Render Button', () => {
    it('Should be Button primary exist', () => {
        const {getByTestId} = render(<Button.Primary label="Teste" onPress={() => {}} />)
        const currentElement = getByTestId(`ButtonPrimary`)
        expect(currentElement).toBeTruthy()
    })

    it('Should be Button success exist', () => {
        const {getByTestId} = render(<Button.Success label="Teste" onPress={() => {}} />)
        const currentElement = getByTestId(`ButtonSuccess`)
        expect(currentElement).toBeTruthy()
    })

    it('Should call onPress when button primary is clicked', () => {
        const mockOnPress = jest.fn()
        const {getByTestId} = render(<Button.Primary label="Click Me" onPress={mockOnPress} />)

        const button = getByTestId('ButtonPrimary')
        fireEvent.press(button)

        expect(mockOnPress).toHaveBeenCalledTimes(1)
    })

    it('Should call onPress when button success is clicked', () => {
        const mockOnPress = jest.fn()
        const {getByTestId} = render(<Button.Success label="Click Me" onPress={mockOnPress} />)

        const button = getByTestId('ButtonSuccess')
        fireEvent.press(button)

        expect(mockOnPress).toHaveBeenCalledTimes(1)
    })
})
