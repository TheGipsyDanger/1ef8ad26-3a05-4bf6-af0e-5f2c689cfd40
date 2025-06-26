/* eslint-disable */
/** @type {import('tailwindcss').Config} */
import {themeColors} from './src/application/styles/colors'
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    presets: [require('nativewind/preset')],
    theme: {
        extend: {
            fontFamily: {
                'gilroy-thin': 'gilroy-Thin',
                'gilroy-thin-italic': 'gilroy-ThinItalic',
                'gilroy-ultralight': 'gilroy-UltraLight',
                'gilroy-ultralight-italic': 'gilroy-UltraLightItalic',
                'gilroy-light': 'gilroy-Light',
                'gilroy-light-italic': 'gilroy-LightItalic',
                'gilroy-regular': 'gilroy-Regular',
                'gilroy-regular-italic': 'gilroy-RegularItalic',
                'gilroy-medium': 'gilroy-Medium',
                'gilroy-medium-italic': 'gilroy-MediumItalic',
                'gilroy-semibold': 'gilroy-SemiBold',
                'gilroy-semibold-italic': 'gilroy-SemiBoldItalic',
                'gilroy-bold': 'gilroy-Bold',
                'gilroy-bold-italic': 'gilroy-BoldItalic',
                'gilroy-extrabold': 'gilroy-ExtraBold',
                'gilroy-extrabold-italic': 'gilroy-ExtraBoldItalic',
                'gilroy-heavy': 'gilroy-Heavy',
                'gilroy-heavy-italic': 'gilroy-HeavyItalic',
                'gilroy-black': 'gilroy-Black',
                'gilroy-black-italic': 'gilroy-BlackItalic'
            },
            colors: {
                ...themeColors
            }
        }
    },
    plugins: []
}
