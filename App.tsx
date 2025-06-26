import './global.css'
import {Provider} from 'react-redux'

import {QueryClientProvider} from '@tanstack/react-query'
import {queryClient} from '~/application/configs'
import {useCustomFonts} from '~/application/hooks'
import store from '~/application/redux/store'
import {Routes} from '~/application/routes'
import {navigationRef} from '~/utils/navigator'

export default function App() {
    const {fontsLoaded} = useCustomFonts()

    if (!fontsLoaded) {
        return null
    }

    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <Routes ref={navigationRef} />
            </QueryClientProvider>
        </Provider>
    )
}
