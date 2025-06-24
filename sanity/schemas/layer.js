const layer = {
  name: "layer",
  type: "document",
  title: "Layer",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      description: "The title of the layer.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      description: "One sentence description of the layer.",
      validation: (Rule) => Rule.required(),
    },
  ],
};

export default layer;
