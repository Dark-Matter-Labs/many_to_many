const layer = {
  name: 'layer',
  type: 'document',
  title: 'Layer',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'The title of the layer.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle',
      description: 'The subtitle of the layer.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'order',
      type: 'number',
      title: 'Order',
      description: 'Choose the order of the layer in the guide.',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'One sentence description of the layer.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Icon',
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Caption',
        },
      ],
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

export default layer;
