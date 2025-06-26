/* eslint-disable @typescript-eslint/no-require-imports */
import {useFonts} from 'expo-font'

interface IUseCustomFonts {
    fontsLoaded: boolean
}

export const useCustomFonts = (): IUseCustomFonts => {
    const [fontsLoaded] = useFonts({
        'gilroy-Black': require('~/assets/fonts/gilroy/Gilroy-Black.ttf'),
        'gilroy-BlackItalic': require('~/assets/fonts/gilroy/Gilroy-BlackItalic.ttf'),
        'gilroy-Bold': require('~/assets/fonts/gilroy/Gilroy-Bold.ttf'),
        'gilroy-BoldItalic': require('~/assets/fonts/gilroy/Gilroy-BoldItalic.ttf'),
        'gilroy-ExtraBold': require('~/assets/fonts/gilroy/Gilroy-ExtraBold.ttf'),
        'gilroy-ExtraBoldItalic': require('~/assets/fonts/gilroy/Gilroy-ExtraBoldItalic.ttf'),
        'gilroy-Heavy': require('~/assets/fonts/gilroy/Gilroy-Heavy.ttf'),
        'gilroy-HeavyItalic': require('~/assets/fonts/gilroy/Gilroy-HeavyItalic.ttf'),
        'gilroy-Light': require('~/assets/fonts/gilroy/Gilroy-Light.ttf'),
        'gilroy-LightItalic': require('~/assets/fonts/gilroy/Gilroy-LightItalic.ttf'),
        'gilroy-Medium': require('~/assets/fonts/gilroy/Gilroy-Medium.ttf'),
        'gilroy-MediumItalic': require('~/assets/fonts/gilroy/Gilroy-MediumItalic.ttf'),
        'gilroy-Regular': require('~/assets/fonts/gilroy/Gilroy-Regular.ttf'),
        'gilroy-RegularItalic': require('~/assets/fonts/gilroy/Gilroy-RegularItalic.ttf'),
        'gilroy-SemiBold': require('~/assets/fonts/gilroy/Gilroy-SemiBold.ttf'),
        'gilroy-SemiBoldItalic': require('~/assets/fonts/gilroy/Gilroy-SemiBoldItalic.ttf'),
        'gilroy-Thin': require('~/assets/fonts/gilroy/Gilroy-Thin.ttf'),
        'gilroy-ThinItalic': require('~/assets/fonts/gilroy/Gilroy-ThinItalic.ttf'),
        'gilroy-UltraLight': require('~/assets/fonts/gilroy/Gilroy-UltraLight.ttf'),
        'gilroy-UltraLightItalic': require('~/assets/fonts/gilroy/Gilroy-UltraLightItalic.ttf')
    })

    return {fontsLoaded}
}
