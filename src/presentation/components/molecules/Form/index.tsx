import * as React from 'react'
import {useState} from 'react'
import {Controller} from 'react-hook-form'
import {TextInput} from 'react-native'

import FeatherIcons from '@expo/vector-icons/Feather'
import {Div, Text} from '~/presentation/components/atoms'
import {mask as masker, unMask} from 'remask'
import {twMerge} from 'tailwind-merge'

import {IForm} from './Form.types'

const handleChangeText = (value: string, onChangeText: (text: string) => void, mask?: string) => {
    onChangeText(mask ? unMask(masker(value, mask), mask) : value)
}

const handleValue = (value: string, mask?: string) => {
    return mask ? masker(value || '', mask) : value
}

const InputContainer = ({children, error, isFocused}: IForm.IInputContainer) => (
    <Div
        className={twMerge(
            'flex-row items-center justify-between bg-background-input rounded-lg',
            !!error && 'border-coral-500'
        )}
    >
        {children}
    </Div>
)

const CustomInputContainer = ({
    textInputProps,
    setIsFocused,
    isFocused,
    placeholder,
    value,
    mask,
    onChangeText,
    testID,
    isVisible = false
}: IForm.ICustomInputContainer) => (
    <TextInput
        testID={testID}
        {...textInputProps}
        autoCapitalize="none"
        autoCorrect={false}
        autoComplete="off"
        secureTextEntry={!isVisible}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="flex-1 text-black h-[54px] font-gilroy-regular px-8"
        placeholder={isFocused ? '' : placeholder}
        value={handleValue(value, mask)}
        onChangeText={text => handleChangeText(text, onChangeText, mask)}
    />
)

const Error = ({error}: IForm.IError) => (
    <Div className="flex-row items-center gap-1 mb-4 mt-2 py-1">
        <FeatherIcons name={'alert-circle'} size={14} color={'red'} />
        <Text.GilroyRegular numberOfLines={2} className="text-sm text-text-primary">
            {error}
        </Text.GilroyRegular>
    </Div>
)

export const Input = ({
    placeholder,
    error,
    value,
    mask,
    textInputProps,
    testID,
    onChangeText
}: IForm.IInput) => {
    const [isFocused, setIsFocused] = useState(false)

    return (
        <Div>
            <InputContainer {...{isFocused}}>
                <CustomInputContainer
                    {...{
                        isVisible: true,
                        textInputProps,
                        setIsFocused,
                        isFocused,
                        placeholder,
                        value,
                        mask,
                        onChangeText,
                        testID
                    }}
                />
            </InputContainer>
            {!!error && <Error {...{error}} />}
        </Div>
    )
}

export const Form = {
    Controller,
    Input
}
