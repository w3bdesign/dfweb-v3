import { List } from "phosphor-react";

const navigation = {
  name: "Navigation",
  title: "Navigation",
  type: "document",
  icon: List,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required()
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      description: "required",
      validation: (Rule) => Rule.required(),
      options: {
        source: "title",
        maxLength: 35
      }
    },
    {
      name: "navigation",
      title: "Navigation",
      description: "Navigation links",
      type: "array",
      of: [{ type: "link" }]
    }
  ]
};

export default navigation;
