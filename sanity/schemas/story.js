const story = {
  name: 'story',
  type: 'document',
  title: 'Story',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'The title of the story.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Page slug',
      validation: (Rule) => Rule.required(),
      description: 'make sure there are no special characters',
      options: {
        source: 'title',
        inUnique: 'true',
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Getting started', value: 'getting_started' },
          { title: 'Staying focused', value: 'staying_focused' },
          { title: 'Withstanding challenge', value: 'withstanding_challenge' },
        ],
      },
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'One sentence description of the story.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'details',
      type: 'array',
      title: 'Details',
      description: 'Long-form content for the story.',
      of: [{ type: 'block' }],
    },
    {
      name: 'layers',
      type: 'array',
      title: 'Layers',
      of: [{ type: 'reference', to: { type: 'layer' } }],
    },
    {
      name: 'tools',
      type: 'array',
      title: 'Tools & examples',
      of: [{ type: 'reference', to: { type: 'tool' } }],
    },
  ],
};
export default story;
