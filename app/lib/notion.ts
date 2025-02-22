import { Client } from "@notionhq/client";
import {
  BlockObjectResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import React from "react";

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const getPages = React.cache(() => {
  return notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
    filter: {
      property: "Status",
      status: {
        equals: "Live",
      },
    },
  });
});

export const getPageBySlug = React.cache((slug: string) => {
  return notion.databases
    .query({
      database_id: process.env.NOTION_DATABASE_ID!,
      filter: {
        property: "Slug",
        rich_text: {
          equals: slug,
        },
      },
    })
    .then((res) => res.results[0] as PageObjectResponse | undefined);
});

export const getPageContent = React.cache((pageId: string) => {
  return notion.blocks.children
    .list({
      block_id: pageId,
    })
    .then((res) => res.results as BlockObjectResponse[]);
});
