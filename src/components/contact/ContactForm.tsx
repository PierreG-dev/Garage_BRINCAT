'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { sendContactAction } from '@/app/actions/sendContact'
import type { ContactFormState } from '@/types'

const initialState: ContactFormState = {
  status: 'idle',
  message: '',
}

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full sm:w-auto bg-accent hover:bg-accent-hover disabled:opacity-60 disabled:cursor-not-allowed text-white font-sans font-medium text-sm uppercase tracking-wider px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
    >
      {pending ? (
        <>
          <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          Envoi en cours...
        </>
      ) : (
        'Envoyer le message'
      )}
    </button>
  )
}

function FieldError({ errors, name }: { errors?: Record<string, string[]>; name: string }) {
  const fieldErrors = errors?.[name]
  if (!fieldErrors?.length) return null
  return (
    <p className="mt-1 text-xs text-red-500 font-sans" role="alert">
      {fieldErrors[0]}
    </p>
  )
}

export default function ContactForm() {
  const [state, formAction] = useFormState(sendContactAction, initialState)

  if (state.status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display font-bold text-xl uppercase text-brand-dark mb-2">
          Message envoyé
        </h3>
        <p className="text-brand-muted font-sans text-sm">{state.message}</p>
      </div>
    )
  }

  return (
    <form action={formAction} className="space-y-6" noValidate>
      {/* Global error */}
      {state.status === 'error' && !state.errors && (
        <div className="bg-red-50 border border-red-200 rounded-2xl p-4">
          <p className="text-red-600 text-sm font-sans">{state.message}</p>
        </div>
      )}

      {/* Name + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block font-sans text-xs uppercase tracking-wider text-brand-muted mb-2">
            Nom complet <span className="text-accent">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            autoComplete="name"
            className="w-full bg-white border border-gray-200 rounded-2xl px-4 py-3 font-sans text-sm text-brand-dark placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
            placeholder="Votre nom"
          />
          <FieldError errors={state.errors} name="name" />
        </div>

        <div>
          <label htmlFor="phone" className="block font-sans text-xs uppercase tracking-wider text-brand-muted mb-2">
            Téléphone <span className="text-accent">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            autoComplete="tel"
            className="w-full bg-white border border-gray-200 rounded-2xl px-4 py-3 font-sans text-sm text-brand-dark placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
            placeholder="06 xx xx xx xx"
          />
          <FieldError errors={state.errors} name="phone" />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block font-sans text-xs uppercase tracking-wider text-brand-muted mb-2">
          Email <span className="text-brand-muted text-xs normal-case tracking-normal">(facultatif)</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          className="w-full bg-white border border-gray-200 rounded-2xl px-4 py-3 font-sans text-sm text-brand-dark placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
          placeholder="votre@email.fr"
        />
        <FieldError errors={state.errors} name="email" />
      </div>

      {/* Location selector */}
      <div>
        <fieldset>
          <legend className="block font-sans text-xs uppercase tracking-wider text-brand-muted mb-3">
            Établissement concerné <span className="text-accent">*</span>
          </legend>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { id: 'castelsarrasin', label: 'Castelsarrasin', sub: '93 Av. du Maréchal Leclerc' },
              { id: 'montauban', label: 'Montauban', sub: '426 Av. de Toulouse' },
            ].map((loc) => (
              <label
                key={loc.id}
                htmlFor={`location-${loc.id}`}
                className="flex items-start gap-3 bg-white border border-gray-200 rounded-2xl p-4 cursor-pointer hover:border-accent transition-colors has-[:checked]:border-accent has-[:checked]:bg-accent/5"
              >
                <input
                  type="radio"
                  id={`location-${loc.id}`}
                  name="location"
                  value={loc.id}
                  className="mt-0.5 accent-[#2563EB]"
                  defaultChecked={loc.id === 'castelsarrasin'}
                />
                <div>
                  <p className="font-sans font-medium text-sm text-brand-dark">{loc.label}</p>
                  <p className="font-sans text-xs text-brand-muted">{loc.sub}</p>
                </div>
              </label>
            ))}
          </div>
        </fieldset>
        <FieldError errors={state.errors} name="location" />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block font-sans text-xs uppercase tracking-wider text-brand-muted mb-2">
          Votre message <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full bg-white border border-gray-200 rounded-2xl px-4 py-3 font-sans text-sm text-brand-dark placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition resize-none"
          placeholder="Décrivez votre demande..."
        />
        <FieldError errors={state.errors} name="message" />
      </div>

      <SubmitButton />
    </form>
  )
}
