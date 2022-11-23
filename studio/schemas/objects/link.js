import { ArrowSquareOut } from "phosphor-react";

const link = {
  name: "link",
  title: "Link",
  type: "object",
  icon: ArrowSquareOut,
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Title",
      type: "string"
    },
    {
      name: "url",
      title: "Url",
      description: "URL",
      type: "string",
      validation: (Rule) => Rule.required()
    },
    {
      name: "external",
      title: "External",
      description: "Is link external?",
      type: "boolean",
      validation: (Rule) => Rule.required()
    }
  ],
  initialValue: {
    external: false
  },
  preview: {
    select: {
      title: "title",
      url: "url"
    },
    prepare({ title, url }) {
      return {
        title: title ?? url
      };
    }
  }
};

export default link;
