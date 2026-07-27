import { buildConfig } from 'payload'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { cloudinaryStorage } from 'payload-cloudinary'
import path from 'path'
import { fileURLToPath } from 'url'
import { Media } from './collections/Media'
import { Categories } from './collections/Categories'
import { Journal } from './collections/Journal'
import { Pages } from './collections/Pages'
import { Subscribers } from './collections/Subscribers'
import { Projects } from './collections/Projects'
import { SiteSettings } from './globals/SiteSettings'
import { HomePage } from './globals/HomePage'
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'
import nodemailer from 'nodemailer'
import { MailtrapTransport } from 'mailtrap'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: 'users',
  },
  collections: [
    {
      slug: 'users',
      auth: true,
      access: {
        read: () => true,
      },
      fields: [],
    },
    Media,
    Categories,
    Journal,
    Pages,
    Subscribers,
    Projects,
  ],
  globals: [
    SiteSettings,
    HomePage,
  ],
  editor: lexicalEditor({}),
  email: nodemailerAdapter({
    defaultFromAddress: 'hello@hellooyekunle.com',
    defaultFromName: 'Nile Agency',
    transport: nodemailer.createTransport(
      MailtrapTransport({
        token: process.env.MAILTRAP_TOKEN || '',
      })
    ),
  }),
  secret: process.env.PAYLOAD_SECRET || 'super-secret-key',
  db: mongooseAdapter({
    url: process.env.MONGODB_URI || '',
  }),
  plugins: [
    cloudinaryStorage({
      collections: {
        media: true,
      },
      config: {
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME || '',
        api_key: process.env.CLOUDINARY_API_KEY || '',
        api_secret: process.env.CLOUDINARY_API_SECRET || '',
      },
    }),
  ],
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})
