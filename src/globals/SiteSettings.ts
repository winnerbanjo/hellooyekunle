import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'metrics',
      type: 'group',
      fields: [
        {
          name: 'usersReached',
          type: 'text',
          defaultValue: '50K+',
          required: true,
        },
        {
          name: 'processedEcosystem',
          type: 'text',
          defaultValue: '₦2B',
          required: true,
        },
        {
          name: 'teamSize',
          type: 'text',
          defaultValue: '4',
          required: true,
        },
        {
          name: 'funding',
          type: 'text',
          defaultValue: 'Self-funded',
          required: true,
        },
      ]
    }
  ]
}
