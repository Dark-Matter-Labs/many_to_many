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
      type: 'array',
      of: [{ type: 'block' }],
      title: 'Description',
      description:
        'Multi-paragraph text. Use paragraphs, headings, and basic formatting.',
      validation: (Rule) => Rule.required(),
    },
  ],
};
export default insight;
