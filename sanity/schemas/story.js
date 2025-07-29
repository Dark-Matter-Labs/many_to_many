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
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'One sentence description of the story.',
      validation: (Rule) => Rule.required(),
    },
  ],
};
export default story;
