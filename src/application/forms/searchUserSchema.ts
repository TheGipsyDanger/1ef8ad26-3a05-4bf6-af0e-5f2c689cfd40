import {z} from 'zod'

export const SearchSchemaValidation = z.object({
    input: z.string().min(3, 'Field is required')
})

export type SearchSchemaFormType = z.infer<typeof SearchSchemaValidation>
