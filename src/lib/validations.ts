import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(2, 'Veuillez entrer votre nom (min. 2 caractères)').max(100),
  phone: z.string().min(8, 'Numéro de téléphone invalide').max(20),
  email: z
    .string()
    .email('Adresse email invalide')
    .optional()
    .or(z.literal('')),
  location: z.enum(['castelsarrasin', 'montauban'], {
    error: 'Veuillez sélectionner un établissement',
  }),
  message: z
    .string()
    .min(10, 'Votre message doit comporter au moins 10 caractères')
    .max(2000, 'Votre message est trop long (2000 caractères max)'),
})

export type ContactFormData = z.infer<typeof contactSchema>
