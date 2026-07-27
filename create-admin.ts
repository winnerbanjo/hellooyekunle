import { getPayload } from 'payload'
import config from './src/payload.config'

async function run() {
  try {
    const payload = await getPayload({ config })
    
    // Check if user exists first to avoid duplicate email errors
    const existingUsers = await payload.find({
      collection: 'users',
      where: {
        email: {
          equals: 'admin@nile.ng',
        },
      },
    })

    if (existingUsers.totalDocs > 0) {
      console.log('User already exists, updating password...')
      await payload.update({
        collection: 'users',
        id: existingUsers.docs[0].id,
        data: {
          password: 'password123',
        },
      })
      console.log('Password updated!')
    } else {
      console.log('Creating new admin user...')
      await payload.create({
        collection: 'users',
        data: {
          email: 'admin@nile.ng',
          password: 'password123',
        },
      })
      console.log('Admin created successfully!')
    }
    
    process.exit(0)
  } catch (err) {
    console.error('Error:', err)
    process.exit(1)
  }
}

run()
