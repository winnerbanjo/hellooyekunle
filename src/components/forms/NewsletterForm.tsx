'use client'

import { useActionState } from 'react'
import { submitNewsletterForm } from '@/app/actions/newsletter'

export function NewsletterForm() {
  const [state, formAction, isPending] = useActionState(submitNewsletterForm, null)

  if (state?.success) {
    return (
      <div className="p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md text-center mb-8">
        <h3 className="text-xl text-green-800 dark:text-green-300 font-serif mb-2">Welcome aboard!</h3>
        <p className="text-green-600 dark:text-green-400 font-light">{state.message}</p>
      </div>
    )
  }

  return (
    <form action={formAction} className="flex flex-col gap-4 mb-8">
      {state?.error && (
        <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 text-sm">
          {state.error}
        </div>
      )}
      
      {/* Honeypot field for spam prevention */}
      <input type="text" name="honeypot" className="hidden" tabIndex={-1} autoComplete="off" />
      
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <label htmlFor="firstName" className="sr-only">First name</label>
          <input 
            id="firstName"
            name="firstName"
            type="text" 
            placeholder="First name" 
            className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 focus:outline-none focus:border-foreground"
          />
        </div>
        <div className="flex-1">
          <label htmlFor="email" className="sr-only">Email address</label>
          <input 
            id="email"
            name="email"
            type="email" 
            required
            placeholder="Email address" 
            className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 focus:outline-none focus:border-foreground"
          />
        </div>
        <button 
          type="submit" 
          disabled={isPending}
          className="px-8 py-3 bg-foreground text-background text-xs font-semibold uppercase tracking-widest hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isPending ? 'Subscribing...' : 'Subscribe Free'}
        </button>
      </div>
    </form>
  )
}
