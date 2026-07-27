import type { GlobalConfig } from 'payload'

export const HomePage: GlobalConfig = {
  slug: 'home-page',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'hero',
      type: 'group',
      fields: [
        { name: 'tagline', type: 'text', required: true, defaultValue: 'Founder. Operator. Visual Creative.' },
        { name: 'heading', type: 'text', required: true, defaultValue: 'Building companies, creating stories, and documenting the journey.' },
        { name: 'subtext', type: 'richText', required: true }
      ]
    },
    {
      name: 'introduction',
      type: 'group',
      fields: [
        { name: 'tagline', type: 'text', required: true, defaultValue: "Hello, I'm Oyekunle" },
        { name: 'heading', type: 'text', required: true, defaultValue: 'I have been around computers for as long as I can remember.' },
        { name: 'content', type: 'richText', required: true }
      ]
    },
    {
      name: 'currentFocus',
      type: 'group',
      fields: [
        { name: 'tagline', type: 'text', required: true, defaultValue: "Right Now" },
        { name: 'heading', type: 'text', required: true, defaultValue: 'What I am focused on today.' },
        {
          name: 'focusAreas',
          type: 'array',
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
          ]
        }
      ]
    },
    {
      name: 'philosophy',
      type: 'group',
      fields: [
        { name: 'tagline', type: 'text', required: true, defaultValue: "What I Believe" },
        { name: 'heading', type: 'text', required: true, defaultValue: 'Progress is proof.' },
        {
          name: 'quotes',
          type: 'array',
          fields: [
            { name: 'quote', type: 'text', required: true }
          ]
        }
      ]
    },
    {
      name: 'closing',
      type: 'group',
      fields: [
        { name: 'heading', type: 'text', required: true, defaultValue: 'I am still becoming.' },
        { name: 'subtext', type: 'textarea', required: true }
      ]
    }
  ]
}
