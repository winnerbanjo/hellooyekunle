'use client'

import { useActionState } from 'react'
import { submitContactForm } from '@/app/actions/contact'
import { FadeIn } from '@/components/animations/FadeIn'

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, null)

  if (state?.success) {
    return (
      <FadeIn className="p-8 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md">
        <h3 className="text-xl text-green-800 dark:text-green-300 font-serif mb-2">Message Sent</h3>
        <p className="text-green-600 dark:text-green-400 font-light">{state.message}</p>
      </FadeIn>
    )
  }

  return (
    <form action={formAction} className="flex flex-col gap-6">
      {state?.error && (
        <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 text-sm">
          {state.error}
        </div>
      )}
      
      {/* Honeypot field for spam prevention */}
      <input type="text" name="honeypot" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid grid-cols-1 gap-6">
        <div>
          <label htmlFor="name" className="sr-only">Full name</label>
          <input id="name" name="name" type="text" required placeholder="Full name" className="px-4 py-3 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 focus:outline-none focus:border-foreground w-full" />
        </div>
        <div>
          <label htmlFor="email" className="sr-only">Email address</label>
          <input id="email" name="email" type="email" required placeholder="Email address" className="px-4 py-3 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 focus:outline-none focus:border-foreground w-full" />
        </div>
      </div>
      <div>
        <label htmlFor="type" className="sr-only">Enquiry Type</label>
        <select id="type" name="type" className="px-4 py-3 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 focus:outline-none focus:border-foreground appearance-none w-full">
          <option value="">Select Enquiry Type</option>
          <option value="Nile and business">Nile and business</option>
          <option value="Partnership">Partnership</option>
          <option value="Media or speaking">Media or speaking</option>
          <option value="Creative collaboration">Creative collaboration</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="sr-only">Message</label>
        <textarea id="message" name="message" required rows={6} placeholder="Message" className="px-4 py-3 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 focus:outline-none focus:border-foreground w-full"></textarea>
      </div>
      <button 
        type="submit" 
        disabled={isPending}
        className="w-max px-8 py-3 bg-foreground text-background text-xs font-semibold uppercase tracking-widest hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isPending ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
