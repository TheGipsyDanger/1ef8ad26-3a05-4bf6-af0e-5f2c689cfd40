type CustomMutationOptions<T> = {
    onSuccess?: (data: T) => void
    onError?: (error: any) => void
}

export type {CustomMutationOptions}
