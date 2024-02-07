import { CollectionConfig } from "payload/types"
import CustomComponent from "../components/Custom"

const Posts: CollectionConfig = {
  slug: "posts",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    { type: "text", name: "title", label: "Title" },
    {
      type: "ui",
      name: "customComponent",
      admin: { components: { Field: CustomComponent } },
    },
  ],
}

export default Posts
