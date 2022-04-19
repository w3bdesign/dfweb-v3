// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Documents
import project from "./documents/project";
import category from "./documents/category";
import page from "./documents/page";
import navigation from "./documents/navigation";

// Objects
import link from "./objects/link";
import pagecontent from "./objects/pagecontent";
import hero from "./objects/hero";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "Dfweb schema",

  // Then proceed to concatenate our document types (just one, for now)
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([project, category, page, navigation, link, pagecontent, hero])
});
