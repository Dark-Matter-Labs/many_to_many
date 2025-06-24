const legal_theme = {
  name: "legal_theme",
  type: "document",
  title: "Legal Theme",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      description: "The title of the legal theme.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      description: "One sentence description of the legal theme.",
      validation: (Rule) => Rule.required(),
    },
  ],
};
export default legal_theme;
