import { CollectionConfig } from "payload/types";

const Propiedades: CollectionConfig = {
  slug: "propiedades",
  labels: {
    singular: "propiedad",
    plural: "propiedades",
  },
  admin: {
    useAsTitle: "slug",
  },
  fields: [
    {
      name: "slug",
      label: "Slug",
      type: "text",
      required: true,
    },
    {
      name: "type",
      label: "Tipo",
      type: "text",
      required: true,
    },
    {
      name: "address",
      label: "Dirección",
      type: "text",
      required: true,
    },
    {
      name: "city",
      label: "Barrio",
      type: "text",
      required: true,
    },
    {
      name: "sup_total",
      label: "Superficie total",
      type: "text",
      required: true,
    },
    {
      name: "sup_cubierta",
      label: "Superficie cubierta",
      type: "text",
      required: true,
    },
    {
      name: "sup_descubierta",
      label: "Superficie descubierta",
      type: "text",
      required: true,
    },
    {
      name: "price",
      label: "Precio",
      type: "number",
      required: true,
    },
    {
      name: "proyect",
      label: "Proyecto",
      type: "relationship",
      relationTo: "proyectos",
      required: true,
    },
    {
      name: "description",
      label: "Descripcción",
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
      name: "servicios",
      label: "Servicios",
      type: "text",
      required: true,
    },
    {
      name: "file",
      label: "Archivo",
      type: "relationship",
      required: true,
      relationTo: "file",
      hasMany: false,
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

export default Propiedades;
