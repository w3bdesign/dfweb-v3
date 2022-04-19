const category = {
  // This is the display name for the type
  title: "Category",

  // The identifier for this document type used in the api's
  name: "category",

  // Documents have the type 'document'. Your schema may describe types beyond documents
  // but let's get back to that later.
  type: "document",

  // Now we proceed to list the fields of our document
  fields: [
    {
      title: "Id",
      name: "id",
      type: "number",
      validation: (Rule) => Rule.required()
    },
    {
      title: "Name",
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required()
    }
  ]
};

export default category;
