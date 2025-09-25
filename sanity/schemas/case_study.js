const case_study = {
  name: 'case_study',
  title: 'Case Study',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Page slug',
      validation: (Rule) => Rule.required(),
      description: 'Make sure there are no special characters',
      options: {
        source: 'title',
        inUnique: 'true',
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      name: 'image',
      type: 'image',
      title: 'Cover Image',
      options: { hotspot: true },
    },
    {
      name: 'context',
      type: 'text',
      rows: 5,
      title: 'Context',
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
              of: [{ type: 'block' }],
            },
          ],
          preview: {
            select: { title: 'title' },
          },
        },
      ],
    },
  ],
};

export default case_study;


