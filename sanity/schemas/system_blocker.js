const system_blocker = {
  name: 'system_blocker',
  type: 'document',
  title: 'System Blocker',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'The title of the System Blocker.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'One sentence description of the System Blocker.',
      validation: (Rule) => Rule.required(),
    },
  ],
};
export default system_blocker;
