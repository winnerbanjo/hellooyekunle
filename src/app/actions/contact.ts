'use server'

import nodemailer from 'nodemailer'
import { MailtrapTransport } from 'mailtrap'

export async function submitContactForm(prevState: unknown, formData: FormData) {
  try {
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const type = formData.get('type') as string
    const message = formData.get('message') as string
    const honeypot = formData.get('honeypot') as string

    // Spam protection
    if (honeypot) {
      return { success: false, error: 'Spam detected' }
    }

    if (!name || !email || !message) {
      return { success: false, error: 'Please fill in all required fields.' }
    }

    const transport = nodemailer.createTransport(
      MailtrapTransport({
        token: process.env.MAILTRAP_TOKEN || '',
      })
    )

    await transport.sendMail({
      from: {
        address: 'hello@hellooyekunle.com',
        name: 'Oyekunle Website',
      },
      to: 'winner@nile.ng',
      subject: `New Enquiry: ${type || 'General'} from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nType: ${type}\n\nMessage:\n${message}`,
    })

    return { success: true, message: "Thank you for reaching out. I'll get back to you soon." }
  } catch (error: unknown) {
    console.error('Contact form error:', error)
    return { success: false, error: 'Something went wrong. Please try again later.' }
  }
}
