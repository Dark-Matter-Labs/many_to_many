const test = {
  name: 'test',
  title: 'Test',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'The title of the test (e.g., "Test 1: Infrastructures")',
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
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'One paragraph description of the test.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'whatWasTested',
      title: 'What we tested',
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
      description: 'Rich text content describing what was tested',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'whatWasNotTested',
      title: "What we didn't test",
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
      description: 'Rich text content describing what was not tested',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'linkedTools',
      type: 'array',
      title: 'Linked Tools',
      description: 'Tools related to this test',
      of: [{ type: 'reference', to: { type: 'tool' } }],
    },
    {
      name: 'testNumber',
      type: 'string',
      title: 'Test Number',
      description: 'The number/identifier for the test (e.g., "1", "2", "3")',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'testNumber',
    },
    prepare(selection) {
      const { title, subtitle } = selection;
      return {
        title: title,
        subtitle: `Test ${subtitle}`,
      };
    },
  },
};

export default test;
