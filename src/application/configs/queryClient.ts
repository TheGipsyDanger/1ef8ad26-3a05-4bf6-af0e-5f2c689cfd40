import {QueryClient} from '@tanstack/react-query'
import axios from 'axios'

import {CONSTANTS} from './constants'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 60 * 5000
        }
    }
})

const API = axios.create({
    baseURL: CONSTANTS.API_URL
})

export {queryClient, API}
