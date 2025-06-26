import * as React from 'react'
import {Text as OriginalText} from 'react-native'

import {twMerge} from 'tailwind-merge'

import {IText} from './Text.types'

export const GilroyThin = ({className, children, ...props}: IText.IView) => (
    <OriginalText {...props} className={twMerge('font-gilroy-thin', className)}>
        {children}
    </OriginalText>
)

export const GilroyThinItalic = ({className, children, ...props}: IText.IView) => (
    <OriginalText {...props} className={twMerge('font-gilroy-thin-italic', className)}>
        {children}
    </OriginalText>
)

export const GilroyUltraLight = ({className, children, ...props}: IText.IView) => (
    <OriginalText {...props} className={twMerge('font-gilroy-ultralight', className)}>
        {children}
    </OriginalText>
)

export const GilroyUltraLightItalic = ({className, children, ...props}: IText.IView) => (
    <OriginalText {...props} className={twMerge('font-gilroy-ultralight-italic', className)}>
        {children}
    </OriginalText>
)

export const GilroyLight = ({className, children, ...props}: IText.IView) => (
    <OriginalText {...props} className={twMerge('font-gilroy-light', className)}>
        {children}
    </OriginalText>
)

export const GilroyLightItalic = ({className, children, ...props}: IText.IView) => (
    <OriginalText {...props} className={twMerge('font-gilroy-light-italic', className)}>
        {children}
    </OriginalText>
)

export const GilroyRegular = ({className, children, ...props}: IText.IView) => (
    <OriginalText {...props} className={twMerge('font-gilroy-regular', className)}>
        {children}
    </OriginalText>
)

export const GilroyRegularItalic = ({className, children, ...props}: IText.IView) => (
    <OriginalText {...props} className={twMerge('font-gilroy-regular-italic', className)}>
        {children}
    </OriginalText>
)

export const GilroyMedium = ({className, children, ...props}: IText.IView) => (
    <OriginalText {...props} className={twMerge('font-gilroy-medium', className)}>
        {children}
    </OriginalText>
)

export const GilroyMediumItalic = ({className, children, ...props}: IText.IView) => (
    <OriginalText {...props} className={twMerge('font-gilroy-medium-italic', className)}>
        {children}
    </OriginalText>
)

export const GilroySemiBold = ({className, children, ...props}: IText.IView) => (
    <OriginalText {...props} className={twMerge('font-gilroy-semibold', className)}>
        {children}
    </OriginalText>
)

export const GilroySemiBoldItalic = ({className, children, ...props}: IText.IView) => (
    <OriginalText {...props} className={twMerge('font-gilroy-semibold-italic', className)}>
        {children}
    </OriginalText>
)

export const GilroyBold = ({className, children, ...props}: IText.IView) => (
    <OriginalText {...props} className={twMerge('font-gilroy-bold', className)}>
        {children}
    </OriginalText>
)

export const GilroyBoldItalic = ({className, children, ...props}: IText.IView) => (
    <OriginalText {...props} className={twMerge('font-gilroy-bold-italic', className)}>
        {children}
    </OriginalText>
)

export const GilroyExtraBold = ({className, children, ...props}: IText.IView) => (
    <OriginalText {...props} className={twMerge('font-gilroy-extrabold', className)}>
        {children}
    </OriginalText>
)

export const GilroyExtraBoldItalic = ({className, children, ...props}: IText.IView) => (
    <OriginalText {...props} className={twMerge('font-gilroy-extrabold-italic', className)}>
        {children}
    </OriginalText>
)

export const GilroyHeavy = ({className, children, ...props}: IText.IView) => (
    <OriginalText {...props} className={twMerge('font-gilroy-heavy', className)}>
        {children}
    </OriginalText>
)

export const GilroyHeavyItalic = ({className, children, ...props}: IText.IView) => (
    <OriginalText {...props} className={twMerge('font-gilroy-heavy-italic', className)}>
        {children}
    </OriginalText>
)

export const GilroyBlack = ({className, children, ...props}: IText.IView) => (
    <OriginalText {...props} className={twMerge('font-gilroy-black', className)}>
        {children}
    </OriginalText>
)

export const GilroyBlackItalic = ({className, children, ...props}: IText.IView) => (
    <OriginalText {...props} className={twMerge('font-gilroy-black-italic', className)}>
        {children}
    </OriginalText>
)

export const Text = {
    GilroyThin,
    GilroyThinItalic,
    GilroyUltraLight,
    GilroyUltraLightItalic,
    GilroyLight,
    GilroyLightItalic,
    GilroyRegular,
    GilroyRegularItalic,
    GilroyMedium,
    GilroyMediumItalic,
    GilroySemiBold,
    GilroySemiBoldItalic,
    GilroyBold,
    GilroyBoldItalic,
    GilroyExtraBold,
    GilroyExtraBoldItalic,
    GilroyHeavy,
    GilroyHeavyItalic,
    GilroyBlack,
    GilroyBlackItalic
}
