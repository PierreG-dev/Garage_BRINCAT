'use server'

import { contactSchema } from '@/lib/validations'
import { createTransporter } from '@/lib/mailer'
import type { ContactFormState } from '@/types'

export async function sendContactAction(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const raw = Object.fromEntries(formData)
  const parsed = contactSchema.safeParse(raw)

  if (!parsed.success) {
    return {
      status: 'error',
      message: 'Veuillez corriger les erreurs du formulaire.',
      errors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
    }
  }

  const { name, phone, email, location, message } = parsed.data
  const locationLabel = location === 'castelsarrasin' ? 'Castelsarrasin' : 'Montauban'
  const locationEmail = location === 'castelsarrasin' ? 'sarlgaragebrincat@orange.fr' : 'sarl.brincat@wanadoo.fr'

  try {
    const transporter = createTransporter()
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: locationEmail,
      replyTo: email || undefined,
      subject: `Nouveau message depuis le site — ${locationLabel}`,
      text: [
        `Nom : ${name}`,
        `Téléphone : ${phone}`,
        `Email : ${email || 'non renseigné'}`,
        `Établissement concerné : ${locationLabel}`,
        '',
        message,
      ].join('\n'),
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="background:#2563EB;color:#fff;padding:16px 24px;margin:0;">
            Nouveau message — Garage BRINCAT ${locationLabel}
          </h2>
          <div style="padding:24px;background:#f5f4f2;">
            <p><strong>Nom :</strong> ${name}</p>
            <p><strong>Téléphone :</strong> ${phone}</p>
            <p><strong>Email :</strong> ${email || 'non renseigné'}</p>
            <p><strong>Établissement :</strong> ${locationLabel}</p>
            <hr style="border:none;border-top:1px solid #ddd;margin:16px 0;">
            <p style="white-space:pre-wrap;">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
          </div>
          <p style="padding:12px 24px;background:#1a1a1a;color:#8a8a8a;font-size:12px;margin:0;">
            Message envoyé depuis sarlgaragebrincat.fr
          </p>
        </div>
      `,
    })

    return {
      status: 'success',
      message:
        'Votre message a bien été envoyé. Nous vous recontacterons dans les plus brefs délais.',
    }
  } catch (err) {
    console.error('[sendContactAction]', err)
    return {
      status: 'error',
      message:
        'Une erreur est survenue lors de l\'envoi. Veuillez réessayer ou nous appeler directement.',
    }
  }
}
