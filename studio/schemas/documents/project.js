import { Browser } from "phosphor-react";

const project = {
  // This is the display name for the type
  title: "Project",

  // The identifier for this document type used in the api's
  name: "project",

  icon: Browser,

  // Documents have the type 'document'. Your schema may describe types beyond documents
  // but let's get back to that later.
  type: "document",

  // Now we proceed to list the fields of our document
  fields: [
    {
      title: "Id",
      name: "id",
      type: "number"
    },
    {
      title: "Name",
      name: "name",
      type: "string"
    },
    {
      title: "Description",
      name: "description",
      type: "string"
    },
    {
      title: "Technologies",
      name: "subdescription",
      type: "string"
    },
    {
      title: "Project category",
      name: "projectcategory",
      type: "reference",
      to: [{ type: "category" }]
    },
    {
      title: "Project URL",
      name: "urlwww",
      type: "array",
      of: [{ type: "link" }]
    },
    {
      title: "Github URL",
      name: "urlgithub",
      type: "array",
      of: [{ type: "link" }]
    },
    {
      title: "Project image",
      name: "projectimage",
      type: "image"
    }
  ]
};

export default project;
