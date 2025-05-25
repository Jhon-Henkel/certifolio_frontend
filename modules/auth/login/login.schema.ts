import { z } from 'zod'

export const LoginSchema = z.object({
    user: z.string().min(1, 'Usuário é obrigatório'),
    password: z.string().min(1, 'Senha é obrigatória'),
})

export type LoginSchemaType = z.output<typeof LoginSchema>
