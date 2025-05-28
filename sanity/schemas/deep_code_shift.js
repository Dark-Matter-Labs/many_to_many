const deep_code_shift = {
  name: 'deep_code_shift',
  type: 'document',
  title: 'Deep Code Shift',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'The title of the Deep Code Shift.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'One sentence description of the Deep Code Shift.',
      validation: (Rule) => Rule.required(),
    }
  ]
};
export default deep_code_shift;