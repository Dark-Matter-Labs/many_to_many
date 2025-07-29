const insight = {
  name: 'insight',
  type: 'document',
  title: 'Insight',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'The title of the insight.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'One sentence description of the insight.',
      validation: (Rule) => Rule.required(),
    },
  ],
};
export default insight;
