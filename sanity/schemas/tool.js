const tool = {
  name: 'tool',
  type: 'document',
  title: 'Tool',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'The title of the tool.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Tool', value: 'tool' },
          { title: 'Case Study', value: 'case_study' },
          { title: 'Example', value: 'example' },
        ],
      },
    },
    {
      name: 'format',
      title: 'Format',
      type: 'string',
      options: {
        list: [
          { title: 'PDF', value: 'pdf' },
          { title: 'Miro Template', value: 'miro' },
          { title: 'Deck', value: 'deck' },
          { title: 'Image', value: 'image' },
          { title: 'Digital Tool', value: 'digital_tool' },
        ],
      },
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'One sentence description of the tool.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'readiness',
      title: 'Readiness',
      type: 'string',
      options: {
        list: [
          { title: 'Low', value: 'low' },
          { title: 'Medium', value: 'medium' },
          { title: 'Ready', value: 'ready' },
        ],
      },
    },
    {
      name: 'availability',
      title: 'Availability',
      type: 'string',
      options: {
        list: [
          { title: 'Now', value: 'now' },
          { title: 'Coming Soon', value: 'coming_soon' },
          { title: 'Demand Led', value: 'demand_led' },
          { title: 'Next 6 Months', value: 'next' },
        ],
      },
    },
    {
      name: 'test_status',
      title: 'Test Status',
      type: 'string',
      options: {
        list: [
          { title: 'Early Stage', value: 'early_stage' },
          { title: 'No', value: 'no' },
          { title: 'Yes - once', value: 'once' },
          { title: 'Yes - a few times', value: 'few' },
        ],
      },
    },
    {
      name: 'audience',
      title: 'Audience',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            list: ['Governance Stewards', 'Lawyers', 'Funders'],
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
      name: 'link',
      type: 'url',
      title: 'External link',
      validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }),
    },
  ],
};
export default tool;
