const story = {
  name: 'story',
  type: 'document',
  title: 'Challenge',
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
      name: 'intro',
      type: 'text',
      rows: 5,
      title: 'Intro paragraph',
      description: 'Brief overview paragraph shown at the top.',
    },
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Section title' },
            {
              name: 'body',
              title: 'Section body',
              type: 'array',
              of: [
                {
                  type: 'block',
                  marks: {
                    decorators: [
                      { title: 'Strong', value: 'strong' },
                      { title: 'Emphasis', value: 'em' },
                      { title: 'Blue', value: 'blue' },
                    ],
                  },
                },
              ],
            },
          ],
          preview: {
            select: { title: 'title' },
          },
        },
      ],
    },
    {
      name: 'layers',
      type: 'array',
      title: 'Layers',
      of: [{ type: 'reference', to: { type: 'layer' } }],
    },
    {
      name: 'tools_into',
      type: 'text',
      title: 'Tools intro paragraph',
    },
    {
      name: 'tools',
      type: 'array',
      title: 'Tools & examples',
      of: [{ type: 'reference', to: { type: 'tool' } }],
    },
    {
      name: 'insights',
      type: 'array',
      title: 'Insights',
      of: [{ type: 'reference', to: { type: 'insight' } }],
    },
    {
      name: 'alerts',
      type: 'array',
      title: 'Alerts',
      of: [{ type: 'reference', to: { type: 'alert' } }],
    },
  ],
};
export default story;
