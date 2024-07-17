import { createClient } from "contentful";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
});

export interface ContentfulEntry {
  title: string;
  content: any;
}

export const getEntries = async (): Promise<ContentfulEntry[]> => {
  try {
    const response = await client.getEntries({
      content_type: "products",
    });
    return response.items.map((item: any) => ({
      title: item.fields.title,
      content: item.fields.content,
    }));
  } catch (error) {
    console.log(error);
    return [];
  }
};
