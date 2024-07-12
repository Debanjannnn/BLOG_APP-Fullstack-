import { number, z } from 'zod'

export const SignupInput = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    name: z.string().min(5)

})

export const SigninInput = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    name: z.string().min(5)

})

export const createBlogInput = z.object({
    title: z.string().min(5),
    content: z.string().min(10),
})

export const UpdateBlogInput = z.object({
    title: z.string().min(5),
    content: z.string().min(10),
    id: number()
})

export type SignupInput = z.infer<typeof SignupInput>
export type SigninInput = z.infer<typeof SigninInput>
export type createBlogInput = z.infer<typeof createBlogInput>
export type UpdateBlogInput = z.infer<typeof UpdateBlogInput>