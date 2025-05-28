const alert = {
  name: 'alert',
  type: 'document',
  title: 'Alert',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'The title of the alert.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'One sentence description of the alert.',
      validation: (Rule) => Rule.required(),
    },
  ],
};
export default alert;