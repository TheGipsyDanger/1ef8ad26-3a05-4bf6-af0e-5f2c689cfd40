import {z} from 'zod'

export const ExampleSchemaValidation = z.object({
    input: z.string().min(1, 'Email is required').email('Invalid email format')
})

export type ExampleSchemaFormType = z.infer<typeof ExampleSchemaValidation>
