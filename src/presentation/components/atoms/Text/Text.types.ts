import {StyleProp, TextStyle} from 'react-native'
import {TextProps} from 'react-native'

export namespace IText {
    export interface IView extends TextProps {
        className?: string
        style?: StyleProp<TextStyle>
    }
}
