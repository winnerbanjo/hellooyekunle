'use server'

import { getPayload } from 'payload'
import config from '@/payload.config'
import nodemailer from 'nodemailer'
import { MailtrapTransport } from 'mailtrap'

export async function submitNewsletterForm(prevState: unknown, formData: FormData) {
  try {
    const firstName = formData.get('firstName') as string
    const email = formData.get('email') as string
    const honeypot = formData.get('honeypot') as string

    if (honeypot) {
      return { success: false, error: 'Spam detected' }
    }

    if (!email) {
      return { success: false, error: 'Please provide an email address.' }
    }

    const payload = await getPayload({ config })

    // Check if subscriber exists
    const existing = await payload.find({
      collection: 'subscribers',
      where: {
        email: {
          equals: email,
        },
      },
    })

    if (existing.totalDocs > 0) {
      return { success: false, error: 'You are already subscribed!' }
    }

    // Save to Payload DB
    await payload.create({
      collection: 'subscribers',
      data: {
        firstName,
        email,
      },
    })

    // Send Welcome Email
    const transport = nodemailer.createTransport(
      MailtrapTransport({
        token: process.env.MAILTRAP_TOKEN || '',
      })
    )

    await transport.sendMail({
      from: {
        address: 'hello@hellooyekunle.com',
        name: 'Oyekunle',
      },
      to: email,
      subject: 'Welcome to Founder Diary',
      text: `Hi ${firstName || 'there'},\n\nThank you for subscribing to Founder Diary. Expect one honest note from the journey every week.\n\nBest,\nOyekunle`,
    })

    return { success: true, message: "You're subscribed! Check your inbox for a welcome email." }
  } catch (error: unknown) {
    console.error('Newsletter form error:', error)
    return { success: false, error: 'Something went wrong. Please try again later.' }
  }
}
