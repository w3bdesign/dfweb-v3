import { Article } from "phosphor-react";

const pagecontent = {
  // This is the display name for the type
  title: "Page content",

  // The identifier for this document type used in the api's
  name: "pagecontent",

  icon: Article,

  // Documents have the type 'document'. Your schema may describe types beyond documents
  // but let's get back to that later.
  type: "object",

  // Now we proceed to list the fields of our document
  fields: [
    {
      title: "Id",
      name: "id",
      type: "number"
    },
    {
      title: "Title",
      name: "title",
      type: "string"
    },
    {
      title: "Text",
      name: "text",
      type: "array",
      of: [{ type: "block" }]
    }
  ]
};

export default pagecontent;
