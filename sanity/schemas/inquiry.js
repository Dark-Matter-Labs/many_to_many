// Submissions from the System Blockers page: questions, corrections, people's
// own experiences and interest in working on a condition. They arrive as
// drafts, so they are never readable from the public dataset. Review them
// here before anything feeds back into the wiki.
const inquiry = {
  name: 'inquiry',
  type: 'document',
  title: 'System blockers submission',
  fields: [
    {
      name: 'status',
      type: 'string',
      title: 'Review status',
      options: {
        list: [
          { title: 'New', value: 'new' },
          { title: 'Reviewed', value: 'reviewed' },
          { title: 'Added to the wiki', value: 'added_to_wiki' },
          { title: 'Not used', value: 'not_used' },
        ],
        layout: 'radio',
      },
      initialValue: 'new',
    },
    {
      name: 'kind',
      type: 'string',
      title: 'Kind',
      options: {
        list: [
          { title: 'Question', value: 'question' },
          { title: 'Correction', value: 'correction' },
          { title: 'Experience', value: 'experience' },
          { title: 'Interest in working on a condition', value: 'interest' },
        ],
      },
      readOnly: true,
    },
    { name: 'stage', type: 'string', title: 'Stage', readOnly: true },
    { name: 'point', type: 'string', title: 'Condition or point', readOnly: true },
    {
      name: 'response',
      type: 'string',
      title: 'Correction type',
      options: {
        list: [
          { title: 'I’ve seen this', value: 'seen' },
          { title: 'I’ve seen the opposite', value: 'opposite' },
          { title: 'Something’s missing', value: 'missing' },
        ],
      },
      readOnly: true,
    },
    { name: 'message', type: 'text', title: 'Message', rows: 6, readOnly: true },
    { name: 'contact', type: 'string', title: 'Contact email (optional)', readOnly: true },
    { name: 'submittedAt', type: 'datetime', title: 'Submitted at', readOnly: true },
    { name: 'notes', type: 'text', title: 'Reviewer notes', rows: 3 },
  ],
  orderings: [
    {
      title: 'Newest first',
      name: 'submittedAtDesc',
      by: [{ field: 'submittedAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: { kind: 'kind', stage: 'stage', message: 'message', status: 'status' },
    prepare({ kind, stage, message, status }) {
      return {
        title: message ? message.slice(0, 80) : '(empty)',
        subtitle: [kind, stage, status].filter(Boolean).join(' · '),
      };
    },
  },
};
export default inquiry;
