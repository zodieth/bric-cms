import { CollectionConfig } from "payload/types";

const File: CollectionConfig = {
  slug: "file",
  upload: {
    staticURL: "/file",
    staticDir: "file",
  },
  fields: [
    {
      name: "name",
      label: "Nombre del archivo",
      type: "text",
    },
  ],
};

export default File;
