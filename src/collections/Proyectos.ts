import { CollectionConfig } from "payload/types";

const Proyectos: CollectionConfig = {
  slug: "proyectos",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      label: "Titulo",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      label: "Slug",
      type: "text",
      required: true,
    },
    {
      name: "description",
      label: "Descripción",
      type: "textarea",
      required: true,
    },
    {
      name: "amenities",
      label: "Amenities",
      type: "text",
      required: true,
    },
    {
      name: "featured",
      label: "Destacado",
      type: "checkbox",
      required: true,
      defaultValue: false,
    },
    {
      name: "images",
      label: "Imagenes",
      type: "array",
      required: true,
      labels: {
        singular: "Imagen",
        plural: "Imagenes",
      },
      fields: [
        { name: "image", type: "upload", relationTo: "media", required: true },
      ],
    },
  ],
};

export default Proyectos;
