import type { Collection } from "tinacms";

const Tag: Collection = {
  label: "Tags",
  name: "tag",
  path: "content/tags",
  format: "mdx",
  fields: [
    {
      type: "string",
      label: "Name",
      name: "name",
      isTitle: true,
      required: true,
    },
    {
      type: "string",
      label: "Name2",
      name: "name2",
      list: true,
    },
  ],
};

export default Tag;
