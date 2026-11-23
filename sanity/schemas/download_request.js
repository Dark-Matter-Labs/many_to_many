// People who filled in the short form before downloading a tool or the Field
// Guide. They arrive as drafts, so they are never readable from the public
// dataset. Personal data: delete an entry when its owner asks.
const downloadRequest = {
  name: 'downloadRequest',
  type: 'document',
  title: 'Download sign-up',
  fields: [
    { name: 'download', type: 'string', title: 'Downloaded', readOnly: true },
    { name: 'name', type: 'string', title: 'Name', readOnly: true },
    { name: 'email', type: 'string', title: 'Email', readOnly: true },
    { name: 'organisation', type: 'string', title: 'Organisation', readOnly: true },
    { name: 'note', type: 'text', title: 'Why they want it (optional)', rows: 3, readOnly: true },
    { name: 'newsletter', type: 'boolean', title: 'Wants the newsletter', readOnly: true },
    {
      name: 'addedToNewsletter',
      type: 'boolean',
      title: 'Added to the newsletter list',
      description: 'Tick once you have added them to the newsletter by hand.',
      initialValue: false,
    },
    { name: 'submittedAt', type: 'datetime', title: 'Submitted at', readOnly: true },
  ],
  orderings: [
    {
      title: 'Newest first',
      name: 'submittedAtDesc',
      by: [{ field: 'submittedAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: { name: 'name', organisation: 'organisation', download: 'download' },
    prepare({ name, organisation, download }) {
      return {
        title: [name, organisation].filter(Boolean).join(', ') || '(empty)',
        subtitle: download,
      };
    },
  },
};
export default downloadRequest;
