// Sanity CMS Schema Definitions for hellooyekunle.com

export const companySchema = {
  name: 'company',
  title: 'Companies',
  type: 'document',
  fields: [
    { name: 'name', title: 'Company Name', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' } },
    { name: 'headline', title: 'Headline', type: 'string' },
    { name: 'tagline', title: 'Tagline', type: 'string' },
    { name: 'thesis', title: 'Company Thesis', type: 'text' },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'role', title: 'Founder Role', type: 'string' },
    { name: 'status', title: 'Status', type: 'string' },
    { name: 'websiteUrl', title: 'Website URL', type: 'url' },
    { name: 'heroImage', title: 'Hero Visual', type: 'image' },
    {
      name: 'metrics',
      title: 'Metrics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', type: 'string' },
            { name: 'value', type: 'string' },
            { name: 'detail', type: 'string' }
          ]
        }
      ]
    }
  ]
};

export const contentSchema = {
  name: 'creatorContent',
  title: 'Content & Videos',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: ['BUSINESS', 'MARKETING', 'BUILDING NILE', 'FOUNDER DIARIES', 'PRODUCT', 'LIFE']
      }
    },
    {
      name: 'platform',
      title: 'Platform',
      type: 'string',
      options: {
        list: ['YouTube', 'TikTok', 'Instagram', 'X', 'LinkedIn']
      }
    },
    { name: 'views', title: 'Views / Reach', type: 'string' },
    { name: 'duration', title: 'Duration', type: 'string' },
    { name: 'thumbnail', title: 'Thumbnail Image', type: 'image' },
    { name: 'summary', title: 'Summary', type: 'text' },
    { name: 'keyTakeaway', title: 'Key Takeaway', type: 'text' },
    { name: 'featured', title: 'Featured on Homepage', type: 'boolean' },
    { name: 'videoUrl', title: 'External Video URL', type: 'url' }
  ]
};

export const articleSchema = {
  name: 'article',
  title: 'Articles (Notes)',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'subtitle', title: 'Subtitle', type: 'string' },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: ['BUSINESS', 'AFRICA', 'PRODUCT', 'TECH', 'BUILDING', 'LIFE']
      }
    },
    { name: 'publishedAt', title: 'Published At', type: 'date' },
    { name: 'readingTime', title: 'Reading Time', type: 'string' },
    { name: 'heroImage', title: 'Hero Image', type: 'image' },
    { name: 'excerpt', title: 'Excerpt', type: 'text' },
    { name: 'body', title: 'Article Body', type: 'array', of: [{ type: 'block' }] }
  ]
};

export const photoSchema = {
  name: 'photo',
  title: 'Photos (Camera Roll & Life)',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title / Alt', type: 'string' },
    { name: 'image', title: 'Image', type: 'image' },
    { name: 'caption', title: 'Caption', type: 'string' },
    { name: 'location', title: 'Location', type: 'string' },
    { name: 'date', title: 'Date', type: 'string' },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: ['founder', 'building', 'archive', 'life', 'lagos', 'camera-roll']
      }
    }
  ]
};

export const timelineSchema = {
  name: 'timelineStep',
  title: 'Founder Timeline',
  type: 'document',
  fields: [
    { name: 'step', title: 'Step Number', type: 'string' },
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'subtitle', title: 'Subtitle', type: 'string' },
    { name: 'body', title: 'Body Text', type: 'text' },
    { name: 'highlight', title: 'Highlight Quote', type: 'string' },
    { name: 'year', title: 'Year', type: 'string' },
    { name: 'image', title: 'Archive Image', type: 'image' }
  ]
};

export const metricSchema = {
  name: 'metric',
  title: 'Metrics',
  type: 'document',
  fields: [
    { name: 'value', title: 'Stat Value', type: 'string' },
    { name: 'label', title: 'Label', type: 'string' },
    { name: 'subtext', title: 'Subtext', type: 'string' },
    { name: 'order', title: 'Display Order', type: 'number' }
  ]
};

export const currentlySchema = {
  name: 'currently',
  title: 'Currently Status',
  type: 'document',
  fields: [
    { name: 'building', title: 'Building', type: 'string' },
    { name: 'based', title: 'Based In', type: 'string' },
    { name: 'reading', title: 'Reading', type: 'string' },
    { name: 'thinking', title: 'Thinking About', type: 'string' },
    { name: 'obsessing', title: 'Obsessing Over', type: 'string' },
    { name: 'creating', title: 'Creating', type: 'string' },
    { name: 'listening', title: 'Listening To', type: 'string' },
    { name: 'lastUpdated', title: 'Last Updated Date', type: 'string' }
  ]
};

export const pressSchema = {
  name: 'press',
  title: 'Press & Media Profile',
  type: 'document',
  fields: [
    { name: 'shortBio', title: 'Short Bio', type: 'text' },
    { name: 'formalBio', title: 'Formal Bio', type: 'text' },
    { name: 'pressKitZipUrl', title: 'Downloadable Press Kit URL', type: 'url' }
  ]
};

export const schemaTypes = [
  companySchema,
  contentSchema,
  articleSchema,
  photoSchema,
  timelineSchema,
  metricSchema,
  currentlySchema,
  pressSchema,
];
