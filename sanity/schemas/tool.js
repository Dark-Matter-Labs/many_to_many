const tool = {
  name: "tool",
  type: "document",
  title: "Tool",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      description: "The title of the tool.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "type",
      name: "type",
      type: "string",
      options: {
        list: [
          { title: "PDF", value: "pdf" },
          { title: "Case Study", value: "case_study" },
          { title: "Miro Template", value: "miro" },
          { title: "Deck", value: "deck" },
          { title: "Diagram", value: "diagram" },
          { title: "Digital Tool", value: "digital_tool" },
        ],
      },
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      description: "One sentence description of the tool.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "link",
      type: "url",
      title: "External link",
      validation: (Rule) => Rule.uri({ scheme: ["http", "https"] }),
    },
  ],
};
export default tool;
